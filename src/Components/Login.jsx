
import React ,{ useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username ,Setusername]=useState('')
    const[password,setpassword]=useState('')

    const {setuser}=useContext(UserContext)
    const handleSubmit = (e) => {
      e.preventDefault()
      setuser({username, password})
  }
  return (
    <>
    <div>Login</div>
    <input type='text' value={username} onChange={(e)=>Setusername(e.target.value)} placeholder=' username'/>   
    <input type='text' placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Login