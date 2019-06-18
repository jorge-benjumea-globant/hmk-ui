import styled from "styled-components";

const Button = styled.button`
  display: block;
  font-weight: 500;
  line-height: normal;
  outline: none;
  overflow: hidden;
  padding: 0;
  text-align: center;
  text-overflow: ellipsis;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "unset")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "unset")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  ${({ theme, color, primary }) => {
    if (primary || color === "primary") {
      return `
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      border-radius: 10px;
      font-weight: 700;
      font-size: 23px;
      padding: 20px 70px;
      `;
    }
  }}

  ${({ disabled }) => (disabled ? "background-color: #d6d6d6" : "")};
`;

export default Button;
