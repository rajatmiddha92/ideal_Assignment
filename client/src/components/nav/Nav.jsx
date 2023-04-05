import CottageIcon from '@mui/icons-material/Cottage';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios'
import '../nav/nav.css'


const Nav = ({ data, setData, fetchData, display, setDisplay }) => {
    const [searchKey, setSearchKey] = useState("");
  
    const handleSearch = async () => {
      if (searchKey) {
        try {
          const res = await axios.get(
            `https://idealcareers.onrender.com/search/${searchKey}`
          );
          setData(res.data.result);
        } catch (err) {
          console.error(err);
        }
      }
    };
  
    const handleInputChange = (e) => {
       setSearchKey(e.target.value);
       if (e.target.value === "") {
        fetchData();
      }
    };
  
    const handleSearchButtonClick = () => {
      if (searchKey) {
        handleSearch();
      } 
    };


  
    return (
      <>
        <section>
          <nav className="nav">
            <div className="part-1">
              <CottageIcon sx={{ fontSize: 40 }} />
              <div>
                <h2>My Unsplash</h2>
                <h4>devchallenges.io</h4>
              </div>
              <input
                onChange={handleInputChange}
                className="inp"
                placeholder="Search By Name.... "
                value={searchKey}
              />
                   <Button
                onClick={handleSearchButtonClick}
                className="btn"
                size="large"
                variant="contained"
                color="success"
              >
               Search
              </Button>
            </div>
       
            <div>
              <Button
                onClick={() => setDisplay(true)}
                className="btn"
                size="large"
                variant="contained"
                color="success"
              >
                Add Photo
              </Button>
              
            </div>
          </nav>
        </section>
      </>
    );
  };
  

  export default Nav