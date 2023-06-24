const fs = require('fs');
const path = require('path');

const saveMemo = (obj) => {
  const filePath = path.join(process.cwd(), 'data.json');

  let data 
  try{
    const jsonDataRead = fs.readFileSync(filePath, 'utf-8');
    data = JSON.parse(jsonDataRead);
  }catch(e){
    data = {memos: []}
  }
  
  obj.id = data.memos.length ? Math.max(...data.map(x => x.id)) + 1 : 1;
  obj.createdAt = new Date().toISOString();
  obj.updatedAt = new Date().toISOString();
  data.memos.push(obj)

  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, jsonData);
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('hahahah')
    const data = req.body;

    console.log(data)
    saveMemo(data);

    res.status(200).json({ message: 'Data saved successfully.', success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

