import React from 'react'
import styled from 'styled-components'
const SidebarStyle = styled.aside`
display: grid;
background-color:blue;
height:100vh;
grid-row: 1/-1;`
const Sidebar = () => {
  return (
    <SidebarStyle>
     sidebar 
    </SidebarStyle>
  )
}

export default Sidebar
