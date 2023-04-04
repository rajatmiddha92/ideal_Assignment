import './addphoto.css'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useState } from 'react';



const Addphoto=({display,setDisplay,fetchData})=>{

    const [data,setData]=useState({label:'',photourl:''})
    const [error,setError]=useState(false)

     const handleAdddata=async()=>{
        try{
         let res=await axios.post(`https://idealcareers.onrender.com/adddata`,{label:data.label,photourl:data.photourl})
         fetchData()
         setData({label:'',photourl:''})
         setError(false)
         setDisplay(false)
        }
        catch(err){
            if(err){
                setError(true)
            }
        }
     }

    return (<>
       <section className='popup'>
       <div className='main-popup'>
        <h2 className='heading-photo'>Add a new photo</h2>
        {error ? <h1 style={{color:'red'}}>Details are missing</h1> : " "}
        <label className='label' htmlFor='label'>Label</label>
        <div>
        <input onChange={(e)=>setData({...data,label:e.target.value})} className='label-details' placeholder='Enter the label Here...' id='label'/>
        </div>
        <label className='label' htmlFor='photo'>Photo URL</label>
        <div>
        <input onChange={(e)=>setData({...data,photourl:e.target.value})} className='label-details' placeholder='Enter the URL Here...' id='photo'/>
        </div>
        <div className='buttons'>
        <Button onClick={()=>setDisplay(false)} className='cancel' size="large" color="secondary">Cancel</Button>
        <Button onClick={handleAdddata} size="large" variant="contained" color="success">Submit</Button>
        </div>
        </div>
     
       </section>
    </>)
}

export default Addphoto;