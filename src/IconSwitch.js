import React from "react";

function IconSwitch (props) {

  const icon = props.icon;

  const onSwitch = () => {
    props.onSwitch(props.icon);
  }

  return (
    <div className="buttonBlock">
      <button onClick={onSwitch}>
        <span className="material-icons">{icon}</span>
      </button>
    </div>
  )
}

export default IconSwitch;