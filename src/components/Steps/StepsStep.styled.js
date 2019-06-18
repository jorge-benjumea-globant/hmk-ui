import styled from "styled-components";

const StepsContent = styled.div`
  display: inline-block;

  .button,
  .line {
    vertical-align: middle;
    display: inline-block;
  }

  .button {
    border-style: none;
    cursor: ${({ active }) => (active ? "pointer" : "not-allowed")};
    background-color: ${({ theme, active }) =>
      active ? theme.colors.grey0 : "#d6d6d6"};
    color: #ffffff;
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }

  .line {
    width: 104px;
    height: 1px;
    border-top: 1px solid #dddddd;
    ${({ theme }) => theme.components.step || ""}
  }
`;

export default StepsContent;
