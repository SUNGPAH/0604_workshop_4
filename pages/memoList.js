import {useState, useEffect} from 'react';
import {useRouter} from 'next/router'

export default function MemoList() {

  const [memos, setMemos] = useState([])
  const router = useRouter()

  useEffect(() => {
    getMemos()
  }, [])

  const getMemos = async () => {
    const res = await fetch("/api/getMemos")
    const json = await res.json()
    setMemos(json.memos)
  }

  const navigateToMemo = (id) => {
    router.push("/memo/" + id)
  }

  // [1,2,3] => [2,4,6]
  return (
    <main>
      hahaha...
      {memos.map((memo,index) => {
        return <div key={index} onClick={e => navigateToMemo(memo.id)}>
          {memo.id}<br/>
          {memo.title}
          {memo.body}
          {memo.createdAt}
        </div>
      })}
    </main>
  )
}
