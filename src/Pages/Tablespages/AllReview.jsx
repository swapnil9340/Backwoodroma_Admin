import  React,{useState , useEffect} from 'react';
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
const AllReview = () => {
    const location = useLocation();
    const [recentorder, setRecentorder] = useState([])
    const cookies = new Cookies();
    const token_data = cookies.get("Token_access");
    const [pageSize, setPageSize] = React.useState(10)
   const [deleteoptn , setdeleteoprn] = useState(false)
   const [isdelete , setsisDelete] = useState(false)
   const [sucsesopen , setsucsesopen] = useState(false)
   const [reviewid , setreviewid] = useState({})
   
   
   
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
                 let a = res.data?.map((item , index)=>{
                   if("ProductName" in item){
                       return {...item , mainID : index , reviewtype : {"productId":item.id}}
                   }else{
                       return {...item , mainID : index , reviewtype : {"StoreId":item.id} }
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
            Axios.post('https://api.cannabaze.com/AdminPanel/ReviewsByStore/', 
            {"SelectTime":"Year","StartDate":"2023-02-01","EndDate":"2024-02-02","StoreId":location.state.item.id},{
              headers: {
                'Authorization': `Bearer ${token_data}`
              }
            }).then((res) => {
              let a = res.data?.map((item , index)=>{
                if("ProductName" in item){
                    return {...item , mainID : index , reviewtype : {"productId":item.id}}
                }else{
                    return {...item , mainID : index , reviewtype : {"StoreId":item.id} }
                } 
            })
              setRecentorder( a )
            })
          }, [location.state.item])
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
                field: 'reviewNo',
                headerName: 'No.',
                minWidth: 150,
                editable: false,
                sortable: false,
                headerAlign: 'left',
                valueGetter: (params) =>
                  `#${params.row.mainID}`,
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
                  return <div className='pendingUserProfile'>
                    <div className='userImage'>
                    <div className="imageCircle" >
                        <div className='userImageCircle'>
                            <img src={params.row.userImage} className="w-[100%] h-[100%]" />
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
                <h3 className='pagetitle'><SlSocialDropbox color='#31B655' size={25}/>Popular store </h3>
                <div className='btnsgroup'>
            
                </div>
            </div>
            <div className='d-flex justify-content-end py-3 align-content-center'>
            
            </div>
            <div className='allusertable'>
                        <Box sx={{
                        
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#F9FAFC',
                                color:'#5A5A5A',
                            
                            },
                            '& .MuiButton-root': {
                                color: "#FFFFFF",
                                display: "flex",
                            
                            },
                                // check
                            "& .MuiDataGrid-root":{
                            border:'none',
                            },
                        
                                "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":{
                                outline:"none"
                                },

                            "@media(max-width:767px)": {
                                '& .MuiButton-root': {
                                    display: "contents",
                                    width: "150px",
                                    margin: "2px",
                                    fontSize: "14px"
                                },

                            },
                            "@media(max-width:546px)": {
                                '& .MuiButton-root': {
                                    display: "contents",
                                    width: "150px",
                                    fontSize: "9px"
                                },

                            },

                            "@media(min-width:768px)": {
                                '& .MuiButton-root': {
                                    width: "110px",
                                    margin: "2px",
                                    fontSize: "14px"
                                },

                                "&.MuiDataGrid-root .MuiDataGrid-columnHeaderDraggableContainer": {
                                    width: "120px"
                                }
                            }
                        }}>
                            <ThemeProvider theme={CustomFontTheme}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    getRowId={(rows) => rows.mainID}
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
                                    sx={{
                                        "& .MuiDataGrid-columnHeader":{
                                            justifyContent:'center',
                                        },
                                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                        outline: "none",
                                    },
                                    "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                                        outline: "none"
                                    },
                                    "&.MuiDataGrid-root  .MuiDataGrid-cell:focus": {
                                        outline: "none",

                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                                        backgroundColor: "#FFFFFF"
                                    },
                                    "& .MuiDataGrid-columnHeaderTitle":{
                                        fontSize:'12px',
                                    },
                                    '& .MuiDataGrid-cellContent':{
                                        fontSize:'12px',
                                        color:'#000',
                                        fontWeight:'500',
                                    },
                                    width: '100%',
                                    "@media(max-width:768px)": {
                                        ".MuiDataGrid-toolbarContainer": {
                                            gap: "10px",

                                        }
                                    },
                                    "@media(max-width:546px)": {
                                        ".MuiDataGrid-toolbarContainer": {
                                            gap: "5px",

                                        }
                                    },
                                    ".MuiDataGrid-toolbarContainer": {
                                        flexDirection: "block",

                                        backgroundColor: "#31B665",
                                        width: {
                                            xs: "100%",
                                            sm: "100%",
                                            md: "100%",
                                            lg: "100%",
                                            xl: "100%"

                                        },
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                        visibility: "hidden"
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-columnHeaderDraggableContainer": {
                                        width: "120px"
                                    }

                                        }}
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

export default AllReview