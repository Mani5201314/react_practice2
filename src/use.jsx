import React, { useState } from "react";

const Use = () => {

    let [hi,usehi]=React.useState("Prince")

    function o(){
        usehi("Mani")
    }


    return ( <>
        <div>{hi}</div>
        <button onClick={o}>change</button>
        </>
     );
}
 
export default Use;