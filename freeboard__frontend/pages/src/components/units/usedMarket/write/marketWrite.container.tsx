// import { useState } from "react";
import { CREATE_USED_ITEM } from "./marketWrite.queries";
import MarketWriteUI from "./marketWrite.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
// import withAuth from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaWrite } from "../../../../commons/libraries/yup.validation";
// import { useContext } from "react";
// import { UploadContext } from "../../../commons/uploads/Upload01.container";

const MarketWrite = () => {
  // const [files, setFiles] = useState([]);

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaWrite),
  });
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  // const [uploadFile] = useMutation(UPLOAD_FILE);
  // const { imgUrl } = useContext(UploadContext);
  const onClickItem = async (data) => {
    try {
      // const resultFiles = await uploadFile({
      //   variables: { file: data.url },
      // });

      // console.log(data.uploadFile);
      // console.log("asd");
      // console.log(resultFiles);

      const result = await createUseditem({
        variables: {
          createUseditemInput: { ...data, price: Number(data.price) },
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

  // const onChangeImage = (data) => async () => {
  //   try {
  //     await uploadFile({
  //       variables: { data },
  //     });
  //     console.log(data);
  //   } catch (err) {
  //     Modal.error({
  //       content: err.message,
  //     });
  //   }
  // };

  // const onChangeFileUrl = async (file, index) => {
  //   const newFileUrl = [...files];
  //   newFileUrl[index] = file;
  //   setFiles(newFileUrl);
  //   console.log(newFileUrl);
  // };
  return (
    <>
      <MarketWriteUI
        isActive={formState.isValid}
        errors={formState.errors}
        register={register}
        handleSubmit={handleSubmit}
        // onChangeImage={onChangeImage}
        // onChangeFileUrl={onChangeFileUrl}
        onClickItem={onClickItem}
      />
    </>
  );
};

export default MarketWrite;
