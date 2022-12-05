import React from "react";
import { useTodoContext } from "../../context/TodoContextProvider";
import {
  StyledContainerButtons,
  StyledTaskItemButton,
  StyledTaskItemCard,
  StyledTaskItemText,
} from "./TaskItemStyles";

export const TaskItem = ({ task }) => {
  const { dispatch } = useTodoContext();

  const handleToggleTask = (id) => {
    dispatch({
      type: "Toggle Task",
      payload: id,
    });
  };
  const handleDeleteTask = (id) => {
    dispatch({
      type: "Remove Task",
      payload: id,
    });
  };
  return (
    <>
      <StyledTaskItemCard done={task.done}>
        <StyledTaskItemText done={task.done}>
          {task.description}
        </StyledTaskItemText>
        <StyledContainerButtons>
          <StyledTaskItemButton onClick={() => handleToggleTask(task.id)}>
            Completar
          </StyledTaskItemButton>
          <StyledTaskItemButton
            delete
            onClick={() => handleDeleteTask(task.id)}
          >
            Eliminar
          </StyledTaskItemButton>
        </StyledContainerButtons>
      </StyledTaskItemCard>
    </>
  );
};
