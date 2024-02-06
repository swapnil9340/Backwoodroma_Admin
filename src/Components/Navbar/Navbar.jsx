import React, { useContext ,useEffect ,useState } from 'react';
import Searchbar from '../Component/Searchbar';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from "react-router-dom";
import Createcontext from "../../Hooks/Context/Context"
import { IoIosMenu } from "react-icons/io"
import { HiExclamationCircle } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import Filtermain from './Filtermain'
function Navbar() {
  const [searchtext, setSearchtext] = useState('')
  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [navBg, setNavBg] = useState(false);
  const { dispatch } = useContext(Createcontext)
  const islogin = useContext(Createcontext)
  const cookies = new Cookies();
  const navigate = useNavigate()

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
  //jquery for toggle sub menus
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
                  windowSize[0] <= 991
                    ?
                    <div >
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className='menu_logo' > <IoIosMenu></IoIosMenu></span>
                      </button>
                    </div>
                    :
                    <div className='display'>
                        <h3 className='navbarTitle'>Hello Admin 👋🏼,</h3>
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