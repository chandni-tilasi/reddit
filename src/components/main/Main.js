import styled from "styled-components";
import Card from "../card/Card";
import Button from "../button/Button";

const Main = styled.article`
  width: 100vw;
  display: flex;
`;

const MainContainer = () => {
    return (
        <Main>
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
            >
                Create Post
            </Button>
            <Card />
        </Main>
    );
};

export default MainContainer;
