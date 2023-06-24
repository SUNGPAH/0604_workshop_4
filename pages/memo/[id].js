import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Memo = () => {
  const [memo, setMemo] = useState({title: "", body:"", createdAt: ""})
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {

    if(id){
      requestMemoData(id)
    }

  }, [id])

  const requestMemoData = async (id) => {
    const response = await fetch("/api/getMemo?id=" + id)
    const json = await response.json()
    console.log(json.memo)

    if (!json.memo) {
      alert('..?')
    } else {
      setMemo(json.memo)
    }
  }
  

  return <div>
    {id}
    memo!!
    {memo.title}<br/>
    {memo.body}<br/>
    {memo.createdAt}<br/>
    ...?
  </div>
}


export default Memo