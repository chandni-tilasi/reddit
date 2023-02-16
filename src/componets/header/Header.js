import styled from "styled-components";
import Button from "../button/Button";
import Logo from "../logo/Logo";
const Head = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <>
      <Head>
        <Logo src="https://external-preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76d5e1d8639234d8da0152b2" />

        <Button
          height={`${40}px`}
          width={`${100}px`}
          bg={"#ff4500"}
          borderRadius={`${9999}px`}
          color={"white"}
          m={`${10}px`}
        >
          Login
        </Button>
      </Head>
    </>
  );
}

export default Header;
export { Head}
