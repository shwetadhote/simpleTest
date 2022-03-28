import React, {useState} from 'react'
import styles from './style.modules.css'

const Home = () => {
   const [userRegistration, setUserRegistration] = useState({
     username: "",
     email: "",
     phone: "",
     password: ""
   });
   const [records, setRecords] = useState([]);
  
   const handleInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     console.log(name, value);

    setUserRegistration ({...userRegistration, [name]: value});
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord =  { ...userRegistration, id :new Date().getTime().toString() }
    console.log(records);
    setRecords([...records, newRecord]);
    console.log(records);

    setUserRegistration({username:"", email:"", phone:"", password:""})
  }
<>
  return (
    <form action='' onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username: </label>
        <input type="text" 
        value={userRegistration.username} onChange={handleInput}  name="username" id="username" />
        </div>
        <div>
        <label htmlFor="email">Email: </label>
        <input type="email"
         value={userRegistration.email} onChange={handleInput} name="email" id="email" />
        </div>
        <div>
        <label htmlFor="phone">Phone: </label>
        <input type="text"
         value={userRegistration.phone} onChange={handleInput} name="phone" id="phone" />
        </div>
        <div>
        <label htmlFor="password">Password: </label>
        <input type="password"
          value={userRegistration.password} onChange={handleInput} name="password" id="password" />
        </div>
        <button type='submit'>Submit</button>
    </form>

    <div>
      {
        records.map((curElem) => {
          return(
            <div>
              <p>{curElem.username}</p>
              <p>{curElem.email}</p>
              <p>{curElem.phone}</p>
              <p>{curElem.password}</p>
            </div>
          )
        } )
      }
    </div>
    </>
  )
}

export default Home