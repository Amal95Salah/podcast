import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const nav = useNavigate();
  async function handleSubmit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:3000/auth/signup", { email, password });
      alert("Registered! Please login.");
      nav('/login');
    }catch(err){
      alert(err.response?.data?.message || err.message);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
