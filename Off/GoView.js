import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function GoView(props) {
  var styleName;
  function activeView(props) {
    styleName = props.styleName;
    if (props.currentView === props.objectView) {
      styleName += " button-pressed";
    }
  }
  activeView(props);
  return (
    <a className={styleName} 
        onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon} size={props.iconSize} color="white" />
      <span className="top-bar-numbers">{props.text}</span>
    </a>
  );
}
