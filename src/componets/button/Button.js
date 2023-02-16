import styled, { css } from "styled-components";
// This component is for a button
const Button = styled.button`
  cursor: pointer;
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `};
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `};

    ${(props) =>
      props.m &&
      css`
        margin: ${props.m};
      `};
      ${(props) =>
        props.bg &&
        css`
          background-color: ${props.bg};
        `};
  
        ${(props) =>
          props.borderRadius &&
          css`
            border-radius: ${props.borderRadius};
          `};
          ${(props) =>
            props.color &&
            css`
              color: ${props.color};
            `};
    }

  border-style:none;
  font-family: Noto Sans,Arial,sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    padding: 4px 16px;
    margin-left:10px
   
    

`;

export default Button;
