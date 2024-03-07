import React, { useContext ,useEffect ,useState } from 'react';
import Searchbar from '../Component/Searchbar';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from "react-router-dom";
import Createcontext from "../../Hooks/Context/Context"
import { IoIosMenu } from "react-icons/io"
import { HiExclamationCircle } from "react-icons/hi";
import axios from 'axios'
import { FaBell } from "react-icons/fa";
import Filtermain from './Filtermain'
import Sidebar from './Sidebar';
// import UserEditProfile from '../../Pages/UserProfile/UserEditProfile';
function Navbar({ sidebaropen, setsidebaropen }) {
  const [searchtext, setSearchtext] = useState('')
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [navBg, setNavBg] = useState(false);
  const { dispatch } = useContext(Createcontext)
  const [userdata, setuserdata] = useState('Admin');
  const islogin = useContext(Createcontext)
  const cookies = new Cookies();
  const navigate = useNavigate()
  const token_data = cookies.get('Token_access')
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);

   }
  function logout() {

    dispatch({ type: 'Login', login: false })
    cookies.remove("Token_access")
    navigate("/login")
    // })




  }
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
  React.useEffect(()=>{
    axios.get(`https://api.cannabaze.com/AdminPanel/UserProfileAdminSideBar/`,{
      headers: {
        'Authorization': `Bearer ${token_data}`
      }
    }).then((res)=>{
      setuserdata(res.data)
    })
  },[])


  return (

    <>
      {
        islogin.state.login === true &&
        <nav
          id="main-navbar" className="navbar navbar-expand-lg navbar-light sticky-top" style={{ height: '75px',   padding: 0, backgroundColor: navBg ?'#fff' : null} }>
          <div className="container-fluid " >

            <div className="col-12   Add_Category d-flex justify-content-between align-items-center ">
              <div className="">

                {
                  windowSize[0] <= 1024
                    ?
                    <div >
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='menu_logo' onClick={()=>{setsidebaropen(true)}} > <IoIosMenu></IoIosMenu></span>
                      </button>
                    </div>
                    :
                    <div className='display'>
                        <h3 className='navbarTitle'>Hello {userdata?.UserName} 👋🏼,</h3>
                    </div>
                }
              </div>
              <div className="searchBar_and_icons">

                <Searchbar color={"#fff"} searchtext={searchtext} setSearchtext={setSearchtext}></Searchbar>
                <Filtermain/>
                <ol className='navbarOredrListStyle'>
                  <li className='NvaListStyle'>
                    <span className=" con  messagebox">
                     <span className='position-relative'> <span className='redDot'></span>
                          <FaBell></FaBell></span>
                    </span>
                  </li>
                  <li className='NvaListStyle'>
                    <span className="  messagebox">
                      <HiExclamationCircle></HiExclamationCircle>
                    </span>
                  </li>
                </ol>
              </div>
            
            </div>
          </div>
        </nav>
      }
    </>

  );
}

export default Navbar;