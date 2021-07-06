import React from "react";
import { useState } from "react";
import { Avatar, SideSheet, Paragraph, Button, Position } from "evergreen-ui";

const MobileNavigation = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <SideSheet
        isShown={isShown}
        position={Position.BOTTOM}
        onCloseComplete={() => setIsShown(false)}>
        <Paragraph margin={40}>Basic Example</Paragraph>
      </SideSheet>
      <Avatar
        onClick={() => setIsShown(true)}
        src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg'
        name='Alan Turing'
        size={40}
      />
    </>
  );
};

export default MobileNavigation;
