import { ChangeEvent, useState } from "react";
import { CREATE_USED_ITEM } from "./marketWrite.queries";
import MarketWriteUI from "./marketWrite.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import withAuth from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";

const MarketWrite = () => {
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState();
  const [files, setFiles] = useState([]);
  const router = useRouter();
  // const [inputs, setInputs] = useState();
  // const newInputs = { ...input };
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onChangeRemarks = (event: ChangeEvent<HTMLInputElement>) => {
    setRemarks(event.target.value);
  };
  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };
  const onChangeTags = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value);
  };

  const onClickItem = async () => {
    try {
      await createUseditem({
        variables: {
          createUseditemInput: {
            name,
            remarks,
            contents,
            price,
            tags,
          },
        },
      });
      Modal.confirm({
        content: "상품이 등록되었습니다!",
      });
      router.push("/usedMarket");
    } catch (err) {
      Modal.confirm({
        content: err.message,
      });
    }
  };

  const onChangeFileUrl = async (file, index) => {
    const newFileUrl = [...files];
    newFileUrl[index] = file;
    setFiles(newFileUrl);
  };
  return (
    <>
      <MarketWriteUI
        onChangeFileUrl={onChangeFileUrl}
        onClickItem={onClickItem}
        onChangeName={onChangeName}
        onChangeRemarks={onChangeRemarks}
        onChangeContents={onChangeContents}
        onChangePrice={onChangePrice}
        onChangeTags={onChangeTags}
      />
    </>
  );
};

export default withAuth(MarketWrite);
