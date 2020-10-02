/* eslint-disable react/prop-types */
import React from "react";

//This is anonymous function which takes BaseComponet as param
//Nont ** BaseComponent is not a React Component. Its a parameter of a function
export default (BaseComponent) => ({ children, onToggleClick, ...rest }) => (
  <BaseComponent {...rest}>
    {React.cloneElement(children, { onClick: onToggleClick })}
  </BaseComponent>
);
