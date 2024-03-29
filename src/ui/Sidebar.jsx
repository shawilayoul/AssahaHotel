import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCalendar, FaUsers, FaHotel } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdCabin } from "react-icons/md";
import styled from "styled-components";

const LinkStled = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;
const TopSideBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const StyleLi = styled.li`
  display: flex;
  gap: 1rem;
`;
const Title = styled.h3``;
const SideBarItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
`;
const SidebarStyle = styled.aside`
  display: grid;
  background-color: white;
  height: 100vh;
  padding: 10px;
  border-right: 1px solid gray;
  grid-row: 1/-1;
`;
const Sidebar = () => {
  return (
    <SidebarStyle>
      <SideBarItems>
        <TopSideBar>
          <FaHotel />
          <Title>ASSAHA Hotel</Title>
        </TopSideBar>
        <StyledUl>
          <StyleLi>
            <FaHome />
            <LinkStled to="/">Home</LinkStled>
          </StyleLi>
          <StyleLi>
            <FaCalendar />
            <LinkStled to="bookings">Bookins</LinkStled>
          </StyleLi>
          <StyleLi>
            <MdCabin />
            <LinkStled to="cabins">Cabins</LinkStled>
          </StyleLi>
          <StyleLi>
            <FaUsers />
            <LinkStled to="users">Users</LinkStled>
          </StyleLi>
          <StyleLi>
            <IoSettings />
            <LinkStled to="settings">Settings</LinkStled>
          </StyleLi>
        </StyledUl>
      </SideBarItems>
    </SidebarStyle>
  );
};

export default Sidebar;
