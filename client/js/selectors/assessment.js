import * as Qti1Selectors  from "../parsers/qti1/selectors";
import * as Qti2Selectors  from "../parsers/qti2/selectors";
import * as EdxSelectors   from "../parsers/edX/selectors";

function getSelectors(metaData){
  return {
    "QTI1": Qti1Selectors,
    "QTI2": Qti2Selectors,
    "EDX": EdxSelectors
  }[metaData.type];
}

function makeDispatchingSelector(name){
  return (state, props) => {
    var func = getSelectors(state.assessmentMetaData)[name];
    return func(state, props);
  };
}

// Selectors that will interact with the assessment data.
// All of these take state and props as parameters and just
// wrap a call to the selectors native to the assessment.
export const questions      = makeDispatchingSelector("questions");
export const outcomes       = makeDispatchingSelector("outcomes");
export const questionCount  = makeDispatchingSelector("questionCount");
