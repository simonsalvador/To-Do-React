import styled from "styled-components";

export const RowContainerStyled = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: column;
  }
`;
