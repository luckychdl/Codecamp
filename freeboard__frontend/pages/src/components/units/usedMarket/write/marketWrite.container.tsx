import { useState } from "react";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./marketWrite.queries";
import MarketWriteUI from "./marketWrite.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
// import withAuth from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaWrite } from "../../../../commons/libraries/yup.validation";
const MarketWrite = () => {
  const [files, setFiles] = useState([]);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaWrite),
  });
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickItem = async (data) => {
    try {
      const uploadFiles = files
        .filter((data) => data)
        .map((data) => uploadFile({ variables: { file: data } }));
      const resultFiles = await Promise.all(uploadFiles);
      const images = resultFiles.map((data) => data.data?.uploadFile.url);
      console.log(data.uploadFile);
      console.log("asd");
      console.log(resultFiles);

      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: images,
          },
        },
      });

      Modal.success({
        content: "상품이 등록되었습니다!",
        onOk() {
          router.push(`/usedMarket/detail/${result.data?.createUseditem._id}`);
        },
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onChangeFileUrl = (file: string, index: number) => {
    const newFileUrl = [...files];
    newFileUrl[index] = file;
    setFiles(newFileUrl);
    console.log(newFileUrl);
  };
  return (
    <>
      <MarketWriteUI
        isActive={formState.isValid}
        errors={formState.errors}
        register={register}
        handleSubmit={handleSubmit}
        // onChangeImage={onChangeImage}
        onChangeFileUrl={onChangeFileUrl}
        onClickItem={onClickItem}
      />
    </>
  );
};
export default MarketWrite;
