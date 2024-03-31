import React from "react";
import styled from "styled-components";
const Head = styled.header`
  padding: 8px;
  height: 60px;
  border-bottom: 1px solid gray;
`;
const Header = () => {
  return (
    <Head>
      <div className="bg-green-500">
        <h3 className="text-green-500 bg-gray-50">
        header 
        </h3>
        
        </div>
    </Head>
  );
};

export default Header;
