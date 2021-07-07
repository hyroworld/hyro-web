/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ iconName, size, color, callback }) => {
  return (
    <div className='icon-wrapper' onClick={callback}>
      <FontAwesomeIcon
        icon={iconName}
        color={color}
        style={{ fontSize: size ? `${size}px` : "inherit" }}
      />
    </div>
  );
};

export default Icon;
