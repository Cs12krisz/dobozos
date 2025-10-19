import { useState } from 'react'
import './App.css'
import BlueBox from './BlueBox'
import RedBox from './RedBox'

const App = () => {
const [isActive, setActive] = useState(true);
const [isDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
const defaultcolor = "black"
const buttonsClassname = "btn btn-primary mb-3"
  return (
    <>
    <div className='border' style={{color : defaultcolor}}>
      <ColorChangeBoxComponent isActive={isActive}></ColorChangeBoxComponent>
      <ButtonComponent isActive={isActive} setActive={setActive}></ButtonComponent>
      <br />
        <CounterBoxComponent hatterszin="green" kiindulo={2} noveles={1}/>
        <CounterBoxComponent hatterszin="blue" kiindulo={3} noveles={2} />
        <CounterBoxComponent hatterszin="red" kiindulo={4} noveles={3}/>
     <br />
      <BlueBox buttonsClassname={buttonsClassname}></BlueBox>
      <RedBox buttonsClassname={buttonsClassname}></RedBox>
    </div>
     App szintű state.
    <h2>{isDarkMode ? "Sötét mód" : "Világos mód"}</h2>
    </>
  );
}

function ButtonComponent({isActive, setActive}) {
  return(
  <div style={{width : "200px", height : "200px"}}
    className='p-2 m-5 rounded border'>
      <button className='btn btn-success m-2 bi bi-android' disabled={isActive} onClick={() => setActive(true)}><img src='node_modules\bootstrap-icons\icons\android.svg'></img>Aktiválás</button>
      <button className='btn btn-danger m-2 bi bi-android' disabled={!isActive} onClick={() => setActive(false)}><img src='node_modules\bootstrap-icons\icons\apple.svg'></img>Inaktiválás</button>
    </div>
  );
}



const ColorChangeBoxComponent = ({isActive}) => {
  const color = isActive ? "green" : "red"

  return(
    <>
    <div className="p-2 m-5 rounded border" style={{
      backgroundColor: color,
      width: "200px",
      height: "200px"
    }}>
    </div>
    <h2>Color change box</h2>
    </>

  );
}



const CounterBoxComponent = ({kiindulo, hatterszin, noveles}) => {

  const [getSzamlalo, setSzamlalo] = useState(kiindulo);

  return(
    <>
    <div style={{
      width: "200px",
      height: "200px",
      backgroundColor : hatterszin,
      cursor: "pointer"
    }}
    className='p-2 m-5 rounded'
    onClick={() => {
      setSzamlalo(getSzamlalo + noveles)
    }}
    >
      <h1>{getSzamlalo}</h1>
    </div>
    </>

  );
}

export default App;