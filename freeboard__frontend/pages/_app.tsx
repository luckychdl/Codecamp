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
import { globalStyles } from "./src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { useState, Dispatch, SetStateAction, createContext } from "react";
// import { useEffect } from "react";

interface IContext {
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  userInfo: any;
  setUserInfo: any;
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

  // useEffect(() => {
  //     console.log(JSON.parse(localStorage.getItem("token")));
  // }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend02.codebootcamp.co.kr/graphql",
    headers: {
      authorization: `Bearer ${
        (typeof window !== "undefined" && localStorage.getItem("token")) || ""
      }`,
    },
  });
  const client = new ApolloClient({
    // uri: "http://backend02.codebootcamp.co.kr/graphql",
    link: ApolloLink.from([uploadLink]),
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
