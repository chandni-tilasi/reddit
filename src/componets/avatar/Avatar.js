import styled, { Styled } from "styled-components";

const Div = styled.div`
width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-top:8px;
  cursor:pointer;

`;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`

function Avatar(){
  return  <Div>
        <Img src="https://st1.bollywoodlife.com/wp-content/uploads/2021/06/MV5BNTY5ZmQyODUtMWViMi00MzQ1LWJmYjEtNjM2NTE2M2NhZjdkXkEyXkFqcGdeQXVyMTMyOTUxNzMx._V1_UY317_CR20,0,214,317_AL_.jpg" />
    </Div>
}

export default Avatar;
