

import React from "react";

const Inc = () => {

    let [count,setcount]=React.useState()

    function inc(){
        setcount(count+1)
    }
    function reset(){
        setcount(0)
    }
    function dec(){
        setcount(count-1)
    }

    return( 
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>inc</button>
            <button onClick={reset}>reset</button>
            <button onClick={dec}>dec</button>
        </div>
    );
}
 
export default Inc;








// import React, { Component } from 'react'

// export class Hello extends Component {
//     constructor(){
//         super()
// this.state={
//     count:0
// }
//         }
//         increment(){
//             this.setState({
//                 count:this.state.count+1
//             })
//         }
//         decrement(){
//             this.setState({
//                 count:this.state.count-1
//             })
//         }
//         reset(){
//             this.setState({
//                 count:0
//             })
//         }
    
//   render() {
//     return (
//       <center>
//        <h1> {this.state.count}</h1>
//         <button onClick={()=>this.increment()}>INC</button>
//         <button onClick={()=>this.decrement()}>DEC</button>
//         <button onClick={()=>this.reset()}>RESET</button>
//       </center>
//     )
//   }
// }

// export default Hello


























