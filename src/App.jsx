import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <div className='border'>
        <span>Dobozok App</span>
        <BoxComponent hatterszin="green" kiindulo={2} noveles={1}/>
        <BoxComponent hatterszin="blue" kiindulo={3} noveles={2} />
        <BoxComponent hatterszin="red" kiindulo={4} noveles={3}/>
      </div>
    </>
  );
}



function BoxComponent({kiindulo, hatterszin, noveles}) {

  const [getSzamlalo, setSzamlalo] = useState(kiindulo);

  return(
    <>
    <div style={{
      width: "150px",
      height: "150px",
      backgroundColor : hatterszin
    }}
    className='p-2 m-5 rounded'
    onClick={() => {
      setSzamlalo(getSzamlalo + noveles);
    }}
    >
      <h1>{getSzamlalo}</h1>
    </div>
    </>

  );
}

export default App;