/** @format */

import React from "react";
import { useState } from "react";
import { SideSheet, Paragraph, Position } from "evergreen-ui";

const NavigatiomCustom = () => {
  const [isUp, setIsUp] = useState(false);

  return (
    <>
      <SideSheet
        isShown={isUp}
        position={Position.BOTTOM}
        onCloseComplete={() => setIsUp(false)}>
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
    </>
  );
};

export default NavigatiomCustom;
