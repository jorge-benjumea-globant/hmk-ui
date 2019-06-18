/* eslint-disable no-shadow */

import { pickHTMLProps } from "pick-react-known-prop";
import PropTypes from "prop-types";
import React from "react";

import findByType from "../../utils/findByType";
import StepsContent from "./StepsContent";
import StepsHeader from "./StepsHeader";

const testIDMapperCreator = testID => child => ({
  ...child,
  props: {
    ...child.props,
    testID
  }
});

const Steps = props => {
  const { children, step: currentStep, testID, ...rest } = props;

  const testIDMapper = testIDMapperCreator(testID);

  const steps = findByType(children, StepsContent);

  return (
    <div data-test-id={testID} data-step={currentStep} {...pickHTMLProps(rest)}>
      {findByType(children, StepsHeader).map(child => ({
        ...child,
        props: {
          ...child.props,
          testID,
          steps,
          currentStep
        }
      }))}

      {steps
        .filter(child => {
          const { props } = child;
          return props.index === currentStep;
        })
        .map(testIDMapper)}
    </div>
  );
};

Steps.propTypes = {
  children: PropTypes.node,
  step: PropTypes.number.isRequired,
  testID: PropTypes.string
};

Steps.defaultProps = {
  testID: "steps"
};

Steps.Content = StepsContent;

Steps.Header = StepsHeader;

export default Steps;
