import { pickHTMLProps } from "pick-react-known-prop";
import PropTypes from "prop-types";
import React from "react";

import StepsHeaderStyled from "./StepsHeader.styled";
import StepsStep from "./StepsStep";

const StepsHeader = props => {
  const {
    className,
    currentStep,
    children,
    testID: testIDFromProps,
    steps,
    ...rest
  } = props;

  const testID = `${testIDFromProps}-header`;

  return (
    <StepsHeaderStyled data-test-id={testID} {...pickHTMLProps(rest)}>
      <div className="steps">
        {steps.map((child, index) => {
          const { index: key, step = {} } = child.props;

          return (
            <StepsStep
              {...step}
              key={key}
              index={key}
              hasLine={steps.length !== index + 1}
              step={index + 1}
              active={currentStep >= index}
              currentStep
            />
          );
        })}
      </div>

      {children}
    </StepsHeaderStyled>
  );
};

StepsHeader.propTypes = {
  currentStep: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  testID: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.node)
};

StepsHeader.defaultProps = {
  testID: "steps"
};

export default StepsHeader;
