import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Main from './components/main/Main';
import { useState } from 'react';
import axios from 'axios'



function App() {
    const [data, setData] = useState([]);
    const [display,setDisplay]=useState(false)

    const fetchData = async () => {
        let res = await axios.get(`https://idealcareers.onrender.com/data`);
        setData(res.data.data);
      };
  
  return (
    <>
        <Nav data={data} setData={setData} fetchData={fetchData} display={display} setDisplay={setDisplay}/>
        <Main data={data} setData={setData} fetchData={fetchData} display={display} setDisplay={setDisplay}/>
        
    </>
  );
}

export default App;
