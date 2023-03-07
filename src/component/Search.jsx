import React from 'react'
import { InputGroup, Form} from 'react-bootstrap';

import Searchicon  from "../asset/images/Searchicon.png";
const Search = () => {
  return (
    <>
    <InputGroup style={{width:"35%", border:"1px solid rgb(28, 32, 34)",
      borderRadius:"5px",
     fontSize:'16px', padding:"3px", backgroundColor:"white", marginLeft:"30px"}}>
        <InputGroup.Text id="basic-addon1" style={{backgroundColor:"unset", border:"none"}}>
            <img src={Searchicon} alt="React Image" style={{width:"15px"}}/>
        </InputGroup.Text>
        <Form.Control
          placeholder="search for a country..." aria-describedby="basic-addon1" 
          style={{border:"none", backgroundColor:"none"}} />
      </InputGroup>
    </>
  )
}

export default Search




