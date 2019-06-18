import { pickHTMLProps } from "pick-react-known-prop";
import omit from "lodash/omit";
import PropTypes from "prop-types";
import React from "react";

import StepsStepStyled from "./StepsStep.styled";

const StepsStep = props => {
  const {
    active,
    children,
    hasLine,
    index,
    onClick,
    step,
    testID: testIDFromProps,
    ...rest
  } = props;

  const testID = `${testIDFromProps}-content`;

  const onClickHandler = () => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <StepsStepStyled
      data-test-id={testID}
      active={active}
      {...pickHTMLProps(omit(rest, "step"))}
    >
      <button
        disabled={!active}
        className="button"
        type="button"
        onClick={onClickHandler}
      >
        {step}
      </button>

      {hasLine && <div className="line" />}
    </StepsStepStyled>
  );
};

StepsStep.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hasLine: PropTypes.bool,
  index: PropTypes.number,
  onClick: PropTypes.func,
  step: PropTypes.number,
  testID: PropTypes.string
};

StepsStep.defaultProps = {
  testID: "steps",
  hasLine: false,
  active: false
};

export default StepsStep;
