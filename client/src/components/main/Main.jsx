import { useEffect,useState } from "react"
import axios from 'axios'
import '../main/main.css'
import Button from '@mui/material/Button';
import Addphoto from '../addphoto/addphoto'


const Main = ({data,setData,fetchData,display,setDisplay}) => {
  
  const [show, setShow] = useState({});


  useEffect(() => {
    fetchData();
  }, []);



  const handleHover = (id) => {
    setShow((prevShow) => ({
      ...prevShow,
      [id]: "inline-block",
    }));
  };

  const handleLeave = (id) => {
    setShow((prevShow) => ({
      ...prevShow,
      [id]: "none",
    }));
  };

  const handledelete=async(id)=>{
  
    const data=await axios.delete(`https://idealcareers.onrender.com/deletedata/${id}`)
  fetchData()
  }

  return (
    <>
      <section style={{position:"relative"}}>
        <div className="main-div">
          {data.map((item, index) => (
            <div
              key={index}
              className="box"
              onMouseOver={() => handleHover(item._id)}
              onMouseLeave={() => handleLeave(item._id)}
            >
              <img className="image" src={item.photourl} alt={item.label} />
              <div style={{ display: show[item._id] || "none" }} className="text">
                {item.label}
              </div>
              <Button onClick={()=>handledelete(data[index]._id)}
                style={{ display: show[item._id] || "none" }}
                className="delete"
                size="large"
                variant="outlined"
                color="error"
              >
                delete
              </Button>
            </div>
          ))}
        </div>
        {display ? <Addphoto display={display} setDisplay={setDisplay} fetchData={fetchData}/> : '' } 
      </section>
      
        
     
    </>
  );
};

export default Main;






