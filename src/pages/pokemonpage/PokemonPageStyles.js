import styled from "styled-components";

export const Title = styled.h2`
  color: black;
  margin-block: 30px;
  text-align: center;
`;
export const FormSearch = styled.form`
   display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  margin: auto;
  width: 40%;
  @media (min-width: 768px) {
    max-width: 70%;
  }
`;
export const InputSearch = styled.input`
  width: 100%;
  background-color: #252525;
  padding: 10px;
  background: #252525;
  color: #fafafa;
  outline: none;
  border: none;
  border-radius: 5px;
`;
export const ButtonSearch = styled.button`
  width: 30%;
  font-weight: 700;
  background-color:#06F00A;
  margin-top:20px;
  padding: 12px;
  background: yellow;
  color: #333;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
export const CardContainer = styled.div`
  margin-block: 50px;
  display: flex;
  justify-content:center;
  align-items:center;
`;
export const MessageError = styled.p`
  color: red;
  font-size: 24px;
  text-align: center;
`;
