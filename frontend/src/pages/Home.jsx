import { useEffect, useState } from "react";
import axios from "axios";

export default function Home(){
  const [msg,setMsg] = useState('');
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if(!token) return setMsg('Not logged in');
    axios.get('http://localhost:3000/profile', { headers: { Authorization: `Bearer ${token}` } })
      .then(r=>setMsg(JSON.stringify(r.data)))
      .catch(e=>setMsg('Error: '+(e.response?.data?.message || e.message)));
  },[]);
  return <div>
    <h2>Home</h2>
    <pre>{msg}</pre>
  </div>
}
