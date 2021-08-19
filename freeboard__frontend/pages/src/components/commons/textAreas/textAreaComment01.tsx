import styled from "@emotion/styled";

const TextArea01 = styled.textarea`
  width: 1200px;
  height: 161px;
  resize: none;
  font-size: 14px;
  line-height: 24px;
  padding: 20px;
  border: 1px solid #bdbdbd;
  color: #757575;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
`;

const TextAreaComment = (props: any) => {
  return (
    <TextArea01
      {...props.register}
      placeholder={props.textareaName}
      defaultValue={props.defaultValue}
    />
  );
};
export default TextAreaComment;
