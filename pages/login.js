import { useState } from 'react';
import {useRouter} from 'next/router'

//nextjs. 

export default function Login() {
  //hook
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const check = () => {
    if (email !== "sungpah@ringleplus.com") {
      alert('email is not allowed')
      return false
    }

    if (password !== "000000") {
      alert('password not..')
      return false
    }

    router.push("/createMemo")
    //
  }

  return (
    <main>
      login!! page
      <br /><br />
      <input placeholder="email" value={email} onChange={e => {
        setEmail(e.target.value)
      }} />
      <br />
      <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={e => check()}>Login </button>
    </main>
  )
}
