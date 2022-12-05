import styled, { css } from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 55%;
`;
export const StyledContainerFormButtons = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;

  color: #fff;
  border: none;
  margin: 0;
  width: max-content;
  cursor: pointer;
  ${(props) =>
    props.deleteAll
      ? css`
          background-color: #f00651;
        `
      : css`
          background-color: #06f00a;
        `}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  background: #252525;
  color: #fafafa;
  outline: none;
  border: none;
  border-radius: 5px;
`;
