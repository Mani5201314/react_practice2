import { useEffect, useState } from "react";

const Home = () => {
  let [users, setUser] = useState([])
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/users ')
      let data = await response.json()
      setUser(data)
    }
    fetchData()
  }, [])
  

  return (
    <div className="api">
      <h1>Home</h1>
      {users.map(data => (
        <div>
          <h1 style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
               
              
              }}
>{data.username}</h1>
        </div>
      ))}
    </div>
  );
}

export default Home;