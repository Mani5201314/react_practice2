
import React, { useState } from "react";
import Login from "./login";
import Error from "./error";
const Ren = () => {

  
  
  // const [isAthorised, setfirst] = useState(true)
  
  // return(
    //  <>
    //  {(isAthorised)?<Payment/>:<Login/>}
    //  </>
    
    let [isAthorised, update] = useState(true);

    switch (isAthorised) {
        case (true):
          return     <Login />
         
        case (false):
           return <Error/> 
          
        default:
            return 
    }

}

export default Ren;