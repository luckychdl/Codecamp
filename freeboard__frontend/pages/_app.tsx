import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Layout from "./src/components/commons";
import "../styles/globals.css";
import "antd/dist/antd.css";
import { Global } from "@emotion/react";
import { onError } from "@apollo/client/link/error";
import { globalStyles } from "./src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
} from "react";
import { getAccessToken } from "./src/commons/libraries/getAccessToken";

interface IContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: any;
  setUserInfo?: any;
}
export const GlobalContext = createContext<IContext>({});

function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    if (localStorage.getItem("userInfo"))
      setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "{}"));
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions?.code === "UNAUTHENTICATED") {
          operation.setContext({
            headers: {
              ...operation.getContext().headers,
              authorization: `Bearer ${getAccessToken(setAccessToken)}`,
            },
          });
          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });
  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });
  return (
    <GlobalContext.Provider value={value}>
      <ApolloProvider client={client}>
        <Layout>
          <Global styles={globalStyles} />
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
