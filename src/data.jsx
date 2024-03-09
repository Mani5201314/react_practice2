import React from "react";
const Date1 = () => {
    const data= new Date()
    const curtime=data.toLocaleTimeString()

    const [time,settime]=React.useState(curtime)

    function a(){
        settime(curtime)
    }
    return ( 
        <div><h1>{time}</h1>
        <button onClick={a}>change</button>

        </div>
     );
}
 
export default Date1;