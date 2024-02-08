import  React,{useState , useEffect} from 'react';
import ReviewSearchBar from "./ReviewComponent/ReviewSearchBar"
import ReviewFilter from "./ReviewComponent/ReviewFilter"
import NumberOfReviews from "./ReviewComponent/NumberOfReviews"
import UserAndOwnerReview from "./ReviewComponent/UserAndOwnerReview"
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import { DataGrid } from '@mui/x-data-grid';
import Cookies from "universal-cookie";
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { SlSocialDropbox } from "react-icons/sl";
import Axios from 'axios'
import { GoStarFill } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {useLocation} from 'react-router-dom'
import Deletepopup from '../../Components/Component/Deletepopup'
import Successfullypopup from '../../Components/Component/Successfullypopup'
import useStyles from '../../Style';
import {useNavigate} from 'react-router-dom'
const Review = () => {
    const classes = useStyles()
    const location = useLocation();
    var htmlToImage = require('html-to-image');
    const [recentorder, setRecentorder] = useState([])
    const cookies = new Cookies();
    const token_data = cookies.get("Token_access");
    const [pageSize, setPageSize] = React.useState(10)
    const [deleteoptn , setdeleteoprn] = useState(false)
    const [isdelete , setsisDelete] = useState(false)
    const [sucsesopen , setsucsesopen] = useState(false)
    const [reviewid , setreviewid] = useState({})
    const navigate =  useNavigate()
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    const errorImg =(e , name)=>{
            let a = name
            a= a?.split(' ')
            let  sd = ''
            if(a.length > 1){
            sd= `${a[0][0].toUpperCase()}${a[1][0].toUpperCase()}`
                
            }else{
             sd= `${a[0][0].toUpperCase()}${a[0][1].toUpperCase()}`     
            }

         
            var node = document.getElementById(sd);
           
            htmlToImage.toPng(node)
            .then(function (dataUrl) { 
                console.log(dataUrl ,'dataUrl')
               console.log(e.target.src)
              e.target.src=dataUrl
            }).catch((error)=>{
                console.trace(error)
                
            })
            }




            useEffect(()=>{
                if(isdelete){
                    Axios.post('https://api.cannabaze.com/AdminPanel/DeleteReviews/', reviewid ,{

                    headers: {
                        'Authorization': `Bearer ${token_data}`
                    }
                    }).then((res)=>{
                        
                        Axios.post('https://api.cannabaze.com/AdminPanel/ReviewsByStore/', 
                        {"SelectTime":"Year","StartDate":"2023-02-01","EndDate":"2024-02-02","StoreId":location.state.item.id},{
                            headers: {
                            'Authorization': `Bearer ${token_data}`
                            }
                        }).then((res) => {
                            let a = res?.data?.map((item , index)=>{
                            if("ProductName" in item){
                                return {...item , mainID : index , reviewtype : {"productId":item?.id}}
                            }else{
                                return {...item , mainID : index , reviewtype : {"StoreId":item?.id} }
                            } 
                            })
                            setRecentorder( a )
                            setsucsesopen(true)
                            setTimeout(() => {
                                setsucsesopen(false)
                            }, "3000");
                        })
                    })
                }
            },[isdelete])
        
          useEffect(() => {
            Axios.post('https://api.cannabaze.com/AdminPanel/AllReviews/', 
            {"SelectTime":"Year","StartDate":"2023-02-01","EndDate":"2024-02-01"},{
              headers: {
                'Authorization': `Bearer ${token_data}`
              }
            }).then((res) => {
          
            setRecentorder(res.data)
            })
          }, [])
          const CustomFontTheme = createTheme({
          typography: {
              fontSize: 25
          },
          components: {
              MuiContainer: {
                  styleOverrides: {
                      root: {
                          fontSize: 24,
    
                      }
                  }
              },
          },
    
          });
          const columns = [
              {
                sortable: true,
                field: 'lineNo',
                headerName: 'S No.',
                flex: 0,
                editable: false,
                renderCell: (params: GridRenderCellParams<DatasetEntryEntity>) =>
                  params.api.getRowIndexRelativeToVisibleRows(params.row.id) + 1,
              },
              {
                field: 'VendorName',
                headerName: 'Name',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'left',
                flex: 1,
                renderCell: (params) => {
                    let a = params.row.username
                    a= a.split(' ')
                    let  sd = ''
                    if(a.length > 1){
                    sd= `${a[0][0].toUpperCase()}${a[1][0].toUpperCase()}`
                        
                    }else{
                     sd= `${a[0][0].toUpperCase()}${a[0][1].toUpperCase()}`     
                    }
        
                  return <div className='pendingUserProfile' onClick={()=>{navigate(`/userprofile/${params.row.user}` ,  {
                    state: params.row
                  })}}>
                    <div className='userImage'>
                        <div className="imageCircle" >
                            <div className='userImageCircle'>
                                <img src={params.row.userImage} className="w-[100%] h-[100%]" onError={(e)=>errorImg(e,params.row.username)}/>
                                
                                <div  id={sd}>
                                    <div className='namecorcle' style={{backgroundColor:getRandomColor()}}>
                                      <span>{sd}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                      <h4 className='userName'>{params.row.username}</h4>
          
                    </div>
                  </div>
                }
              },
              {
                field: 'Contact',
                headerName: 'E-mail',
                minWidth: 230,
                editable: false,
                headerAlign: 'center',
                sortable: false,
                flex: 1,
                renderCell: (params) => {
                  return <ul className='pendingvendercontent'>
                    {params?.row?.Email && <li className='content_item'> <span className='contactIcon'><MdOutlineEmail color='#6B6F7A' /></span>{params.row.Email}</li>}
                    {params?.row?.MobileNo && <li className='content_item'> <span className='contactIcon'><BsTelephone color='#6B6F7A' /></span>{params.row.MobileNo}</li>}
                  </ul>
                }
              },
              {
                field: 'rating',
                headerName: 'Rating',
                type: 'number',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
                renderCell: (params) => {
                  return <span>{ 
                            Array(params.row.rating).fill().map(()=>{
                               return <GoStarFill  size={18} color='rgba(0, 172, 79, 1)'/>
                            }) }{
                            Array(5- params.row.rating).fill().map(()=>{
                                return <GoStarFill  size={18} color='rgba(0, 172, 79, 0.41)'/>

                            })  }
                     </span>
                }
              },
              {
                field: 'comment',
                headerName: 'Reviews',
                flex: 1,
                editable: false,
                sortable: false,
                minWidth: 120,
                headerAlign: 'center',
                align: 'center',
              },
              {
                field: 'created_at',
                headerName: 'Date',
                type: 'number',
                minWidth: 120,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
                renderCell:(params)=>{
                    return `${new Date(params.row.created_at).getDate()}/${new Date(params.row.created_at).getMonth()+1}/${new Date(params.row.created_at).getFullYear()}`
                }
              },
              {
                field: 'StoreName',
                headerName: 'Store Name',
                type: 'number',
                minWidth: 120,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
               
              },
              {
                field: 'Action',
                headerName: 'Action',
                type: 'number',
                minWidth: 120,
                editable: false,
                sortable: false,
                headerAlign: 'center',
                align: 'center',
                flex: 1,
                renderCell: (params) => {
                  
                    return <span className='d-flex gap-3'> <RiDeleteBin6Line onClick={()=>{ setreviewid(params.row.reviewtype); setdeleteoprn(true)}}  color='#31B655' size={24}/>
                    <IoIosInformationCircleOutline color='#31B655' size={24}/>
                    </span>
                  }
              },
          ];
          const rows = recentorder
    return (
        <div className=' my-4 '>
        <div className='py-4 section_card'>
            <div  className='d-flex justify-content-between align-content-center px-4'> 
                <h3 className='pagetitle'><SlSocialDropbox color='#31B655' size={25}/>Reviews</h3>
                <div className='btnsgroup'>
            
                </div>
            </div>
            <div className='d-flex justify-content-end py-3 align-content-center'>
            
            </div>
            <div className='allusertable'>
                        <Box  className={classes.DataTableBoxStyle}>
                            <ThemeProvider theme={CustomFontTheme}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    getRowId={(rows) => rows.id}
                                    pageSize={pageSize}
                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                    pageSizeOptions={[ 10, 25, 50]}
                                    pagination
                                    disableRowSelectionOnClick
                                    disableColumnMenu
                                    disableColumnFilter
                                    disableColumnSelector
                                    autoHeight
                                    checkboxSelection={false}
                                    rowSelection={false}
                                    className={classes.DataTableStyle}
                                />
                            </ThemeProvider>
                        </Box>
            </div>
        </div>

        {   deleteoptn &&  <Deletepopup setdeleteoprn={setdeleteoprn} setsisDelete={setsisDelete} />}
        {   sucsesopen && <Successfullypopup setsucsesopen={setsucsesopen}/> }
        {/* <div className='view_reviewModel'> 
           <div className='viewReview_content'>
               <div className='closeBtn'>X</div>
                  <div>
                    <span>{ 
                            Array(4).fill().map(()=>{
                               return <GoStarFill  size={18} color='rgba(0, 172, 79, 1)'/>
                            }) }{
                            Array(5- 4).fill().map(()=>{
                                return <GoStarFill  size={18} color='rgba(0, 172, 79, 0.41)'/>

                            })  }
                     </span>
                  </div>
                  <h3>Review Title</h3>
                  <p> hello world</p>
           </div>
        </div> */}
    </div>
    )
}
export default Review