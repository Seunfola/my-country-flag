import React from 'react';

import { Navbar, Stack } from 'react-bootstrap';
import SearchDropDown from "./SearchDropDown";

const Home = () => {
  return (
    <>
        <Navbar >
            <Stack direction='horizontal' style={{ width: '100%', justifyContent:"space-between", borderBottom:"1px solid black"}}>
                <Navbar.Brand style={{fontWeight: '800', margin:"10px 40px"}}>
                 Where in the World?
                </Navbar.Brand>

                <Navbar.Brand href="#mode" style={{ margin:"10px 70px "}}>
                  dark Mode
                </Navbar.Brand>
            </Stack>
        </Navbar>

        <SearchDropDown/>
    </>
  )
}

export default Home