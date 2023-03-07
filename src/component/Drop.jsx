import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Drop = () => {
  return (
    <DropdownButton  title="Dropdown button" variant='' style={{width:"20px", backgroundColor:"white",padding:"5px"}}>
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
    
  );

}

export default Drop;
