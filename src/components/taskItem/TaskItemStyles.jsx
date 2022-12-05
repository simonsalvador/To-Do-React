import styled, { css } from "styled-components";

export const StyledTaskItemCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  ${({ done }) => done && `border: 1px solid #22b42e;`}
  border-radius: 5px;
  padding: 10px;
`;

export const StyledTaskItemText = styled.span`
  font-size: 20px;

  ${({ done }) => done && `text-decoration: line-through;`}
`;
export const StyledContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const StyledTaskItemButton = styled.button`
  align-self: flex-start;
  margin-left: 5px;

  border-radius: 5px;
  width: max-content;
  padding: 5px 10px;
  ${(props) =>
    props.delete
      ? css`
          color: white;
          background-color:#f00651;
        `
      : css`
          color: white;
          background-color:#06f00a;
        `}
  &:hover {
    ${(props) =>
      props.delete
        ? css`
            background-color: #ec2a2a;
          `
        : css`
            background-color: #22b42e;
          `}
    color: #fff;
    cursor: pointer;
  }
`;
