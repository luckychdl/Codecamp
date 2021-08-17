import { useState } from "react";
import { CREATE_USED_ITEM, UPLOAD_FILE } from "./marketWrite.queries";
import MarketWriteUI from "./marketWrite.presenter";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import withAuth from "../../../commons/hocs/withAuth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaWrite } from "../../../../commons/libraries/yup.validation";
const MarketWrite = () => {
  const [files, setFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);
  const [addressInfo, setAddressInfo] = useState(0);
  const [lngInfo, setLngInfo] = useState();
  const [latInfo, setLatInfo] = useState();
  const [addressDetailInfo, setAddressDetailInfo] = useState(0);
  // const [lngs, setLngs] = useState(0);

  const { register, handleSubmit, setValue, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaWrite),
  });
  const router = useRouter();
  const [createUseditem] = useMutation(CREATE_USED_ITEM);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickItem = async (data) => {
    console.log(files);
    console.log("asd", data);
    try {
      const resultFiles = await Promise.all(
        files.map((data) => uploadFile({ variables: { file: data } }))
      );
      const newImages = resultFiles.map((el) => el.data.uploadFile.url);
      // const newLats = lats;
      // const newLngs = lngs;
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: newImages,
            useditemAddress: {
              address: addressInfo,
              addressDetail: addressDetailInfo,
              lat: latInfo,
              lng: lngInfo,
            },
          },
        },
      });
      console.log("asdasd11", newImages);
      console.log("qweqwe111qwe", addressInfo, addressDetailInfo);
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
  const onChangeFiles = (file: File, index: number) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };
  const onChangeFileUrl = (imgUrl: string, index: number) => {
    const newFileUrl = [...imgUrl];
    newFileUrl[index] = imgUrl;
    setFileUrl(newFileUrl);
    console.log(newFileUrl);
  };
  const onChangeValue = (val) => {
    setValue("contents", val);
  };
  const onChangeAddress = (address) => {
    const newAddress = address;
    console.log("qweqwe", newAddress);
    setAddressInfo(newAddress);
  };
  const onChangeLng = (lng) => {
    const newLng = lng;
    setLngInfo(newLng);
  };
  const onChangeLat = (lat) => {
    const newLat = lat;
    setLatInfo(newLat);
  };
  const onChangeAddressDetailContents = (addressDetail) => {
    const newAddressDetail = addressDetail;
    setAddressDetailInfo(newAddressDetail);
    console.log("qweqwe12", newAddressDetail);
  };
  return (
    <>
      <MarketWriteUI
        isActive={formState.isValid}
        errors={formState.errors}
        fileUrl={fileUrl}
        onChangeLng={onChangeLng}
        onChangeLat={onChangeLat}
        onChangeValue={onChangeValue}
        register={register}
        handleSubmit={handleSubmit}
        onChangeFiles={onChangeFiles}
        onChangeFileUrl={onChangeFileUrl}
        onClickItem={onClickItem}
        onChangeAddress={onChangeAddress}
        onChangeAddressDetailContents={onChangeAddressDetailContents}
      />
    </>
  );
};
export default MarketWrite;
