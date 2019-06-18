import { pickHTMLProps } from "pick-react-known-prop";
import omit from "lodash/omit";
import PropTypes from "prop-types";
import React from "react";

import StepsContentStyled from "./StepsContent.styled";

const StepsContent = props => {
  const { children, className, testID: testIDFromProps, ...rest } = props;

  const testID = `${testIDFromProps}-content`;

  return (
    <StepsContentStyled
      data-test-id={testID}
      {...pickHTMLProps(omit(rest, "step"))}
    >
      {children}
    </StepsContentStyled>
  );
};

StepsContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  testID: PropTypes.string
};

StepsContent.defaultProps = {
  testID: "steps"
};

export default StepsContent;
