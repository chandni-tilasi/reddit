import styled from "styled-components";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Avatar from "../avatar/Avatar";
import logoImage from "../../assets/logo.png";
import avatarImage from "../../assets/avatar.png";
// import { Link } from "react-router-dom";

import Main from "../main/Main";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  // align-items: center;
  background-color: inherit;
  margin-right: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100vw;
  background-color: #ecf2ff;
  // position:absolute;
  // top:0;
`;
const HeaderContainer = () => {
  return (
    <Header>
      <Logo src={logoImage} alt="Logo" />
      
      <Div>
        
        <Button
          height={"40px"}
          width={"100px"}
          backgroundColor={"#ff4500"}
          borderRadius={"20px"}
          border={"none"}
          fontColor={"white"}
          fontSize={"16px"}
          hover={"0.7"}
        >
          <a style={{ backgroundColor: "#ff4500" }} href="./signin">
            sign in
          </a>
        </Button>

        <Avatar src={avatarImage} alt="Avatar" ml={"20px"} />
      </Div>
    </Header>
  );
};

export default HeaderContainer;
