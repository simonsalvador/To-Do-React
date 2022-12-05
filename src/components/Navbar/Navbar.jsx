import { useState } from "react";
import {
  HamburgerIconContainer,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  NavbarWrapper,
} from "./NavbarStyles";
import { FaBars, FaTimes, FaClipboardList} from "react-icons/fa";
import { useTodoContext } from "../../context/TodoContextProvider";


export const Navbar = () => {
  const [click, setClick] = useState(false);
  const { tasks } = useTodoContext();
  const taskPendingCount = tasks.filter((task) => !task.done).length;
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
             < FaClipboardList size={50} color={"#4bc1a9"} /> 
          </LogoContainer>
          <HamburgerIconContainer onClick={handleClick}>
            {click ? (
              <FaTimes size={30} color={"#4bc1a9"} />
            ) : (
              <FaBars size={30} color={"#4bc1a9"} />
            )}
          </HamburgerIconContainer>
          <Menu click={click}>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Home
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/task"}
                className={`${({ isActive }) => (isActive ? "active" : "")} ${
                  taskPendingCount ? "pending" : "no-pending"
                }`}
              >
                Tasks
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/pokemon"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                PokeAPI
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
