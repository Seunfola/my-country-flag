import React from 'react';
import Search from "./Search";
import Drop from "./Drop";
import { Stack } from "react-bootstrap";

const SearchDropDown = () => {
  return (
    <>
     <Stack direction='horizontal' style={{width:"85%", justifyContent:"space-between", padding:'60px'}}>
        <Search/>
        <Drop/>
     </Stack>   
    </>
  )
}

export default SearchDropDown
