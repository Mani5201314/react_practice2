import React from 'react'

const Array = () => {
    const StudentData = [
        {
            firstName:"sudha",
            lastName:"mv",
            dob:2002
        },
        {
            firstName:"Prince",
            lastName:"Mani",
            dob:1999
        },
        {
            firstName:"Manikanta",
            lastName:"Bandi",
            dob:2000
        },
        {
            firstName:"Sheetal",
            lastName:"Bandi",
            dob:1999
        }
    ]
  return (
    
     <div>
      <h1>students data</h1>
      <table border={3}  style={{borderCollapse:"collapse",margin:"auto",width:"500px",height:"200px"}}>
           <thead>
                    <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>dob</th>
                    </tr>
                </thead>
                <tbody>
        {StudentData.map((item, index) => (
            
          <tr border={2} key={index}>
                   
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.dob}</td>

                    </tr>
                    ))}
                </tbody>
                </table>
    </div>
  )
}

export default Array