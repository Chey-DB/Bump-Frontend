import React, { useState } from 'react';
import Checklist from '../Checklist';

const ChecklistButton = () => {
  const [toggle, setToggle] = useState(false);

  const buttonPress = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button onClick={buttonPress}>press me</button>
      {toggle && <Checklist />}
    </>
  );
};

export default ChecklistButton;