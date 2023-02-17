import styled, { css } from "styled-components";
import Card from "../card/Card";
import Button from "../button/Button";
import Popup from "../popup/Popup";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./main.css"
const Main = styled.article`
  width: 100vw;
  display: flex;
  ${(props) =>
    props.opacity &&
    css`
      opacity: ${props.opacity};
    `};
`;

const MainContainer = (props) => {
  const [clicked, seClicked] = useState(false);
  const [cancel, setCancel] = useState(false);

  const value = useSelector((state) => state.post);
  console.log(value);
  function clickHandle() {
    seClicked(!clicked);
    // setCancel(false);
  }

  // function cancelHandle() {
  //   setCancel(true);
  //   seClicked(false);
  // }

  return (
    // <Main opacity={clicked?0.4:1} >
    <Main>
      <div style={{ display: cancel ? "none" : "block" }}>
        {clicked ? <Popup /> : <></>}
      </div>
      {/* {clicked ? (
       <></>
      ) : ( */}
      <Button
        height={"50px"}
        width={"140px"}
        backgroundColor={"blue"}
        fontColor={"white"}
        border={"none"}
        borderRadius={"30px"}
        mt={"30px"}
        ml={"30px"}
        hover={"0.7"}
        fontSize={"16px"}
        onClick={clickHandle}
      >
        create post
      </Button>
      {/* )} */}
      <div>
        {value.length >= 1 ? (
          value.map((post) => {
            return (
              <Card>
                <div className="postContainer">
                  
                  <img src={post.img} />
                  <p>{post.title}</p>
                </div>
              </Card>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </Main>
  );
};

export default MainContainer;
