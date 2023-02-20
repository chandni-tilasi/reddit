import styled from "styled-components";
import Button from "../button/Button";
import Logo from "../logo/Logo";
import Avatar from "../avatar/Avatar";
import logoImage from "../../assets/logo.png";
import avatarImage from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUserLoggedIn } from "../../store/userSlice";
<<<<<<< HEAD
=======


>>>>>>> 0d6c0899ec971da7d67acc6ecf25b245e8a0dafb

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  margin-right: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100vw;
<<<<<<< HEAD
  background-color: #ecf2ff;
=======
  background-color: #ffffff;
>>>>>>> 0d6c0899ec971da7d67acc6ecf25b245e8a0dafb
`;
const HeaderContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.isLoggedIn);

  const showToastMessage = () => {
    toast.success("Log Out Success !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Header>
      <Logo src={logoImage} alt="Logo" />
      <Div>
<<<<<<< HEAD
        {!user ? (
          <Button
=======
        {!user ?
          (<Button
>>>>>>> 0d6c0899ec971da7d67acc6ecf25b245e8a0dafb
            height={"40px"}
            width={"100px"}
            backgroundColor={"#ff4500"}
            borderRadius={"20px"}
            border={"none"}
            fontColor={"white"}
            fontSize={"16px"}
            hover={"0.7"}
          >
            <Link to="./register">SIGN UP</Link>
<<<<<<< HEAD
          </Button>
        ) : (
          <Button
=======
          </Button>)
          : (<Button
>>>>>>> 0d6c0899ec971da7d67acc6ecf25b245e8a0dafb
            height={"40px"}
            width={"100px"}
            backgroundColor={"#ff4500"}
            borderRadius={"20px"}
            border={"none"}
            fontColor={"white"}
            fontSize={"16px"}
            hover={"0.7"}
            onClick={() => {
              navigate("/signin");
              dispatch(setUserLoggedIn(false));
              showToastMessage();
            }}
          >
            <Link to="./">LOG OUT</Link>
<<<<<<< HEAD
          </Button>
        )}
        {/* <Avatar src={avatarImage} alt="Avatar" ml={"20px"} /> */}
=======
          </Button>)}
        <Avatar src={avatarImage} alt="Avatar" ml={"20px"} />
>>>>>>> 0d6c0899ec971da7d67acc6ecf25b245e8a0dafb
      </Div>
    </Header>
  );
};

export default HeaderContainer;