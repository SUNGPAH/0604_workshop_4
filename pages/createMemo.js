import {useState} from 'react';
import {useRouter} from 'next/router'
export default function CreateMemo() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const router = useRouter()

  const submit= async () => {
    const response = await fetch('/api/saveMemo', {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify({title: title, body: body}),
    });

    const res = await response.json()
    if(res.success){
      router.push("/memoList")
    } else {
      alert('something went wrong')
    }
  }

  return (
    <main>
      <input value={title} onChange={e => setTitle(e.target.value)}/>
      <br/>
      <textarea style={{fontFamily:'Arial'}} value={body} onChange={e => setBody(e.target.value)}/>
      <br/>

      <button onClick={e => submit()}>Submit</button>
    </main>
  )
}
