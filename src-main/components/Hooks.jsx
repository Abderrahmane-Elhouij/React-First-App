import { useState } from "react"

const Home = () =>{
  const[name, setName] =useState('Abdo')
  const [age, setAge] = useState(20)

  const changeUser = () => {
    setName('Hbira');
    setAge(15);
  }
    return(
        <>
          <h2>Homepage</h2>
          <p>{name} is {age} years old</p>
          <button onClick={changeUser}>click</button>
        </>
    )
}

export default Home;