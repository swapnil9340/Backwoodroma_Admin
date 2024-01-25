import React, { useEffect, useContext } from 'react'
import Createcontext from "../../Hooks/Context/Context"
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Categorypopup from './Categorypopup';
import axios from "axios"
import { FaEdit } from "react-icons/fa";
import { useSnackbar } from 'notistack';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Select from '@mui/material/Select';
import CategoryEditbox from "./CategoryEdit"
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImDropbox } from "react-icons/im";

import Eelete from "../Category/Delete";
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { LuEye } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip';
export default function Category(props) {
    const { state, dispatch } = useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
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
    const [totel, setTotal] = React.useState([])
    const cookies = new Cookies();
    const [pageSize, setPageSize] = React.useState(5)
    const token_data = cookies.get('Token_access')
    useEffect(() => {

        axios("https://api.cannabaze.com/AdminPanel/Get-Category/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }
        }).then(response => {

            setTotal([...response.data])
        })

    }, [state, token_data])

    function SubmitEditData(params) {
        const form = {

            "name": params.row.name,
            "Status": params.row.Status === "Active" ? "Hide" : "Active"
        }
        axios.post(`https://api.cannabaze.com/AdminPanel/update-Category/${params.row.id}`, form, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            if (response) {
                dispatch({ type: 'api', api: true })
                enqueueSnackbar('Edit Category Status success  !', { variant: 'success' });

            }
        }).catch(
            function (error) {
                return Promise.reject(error)
            }
        )
    }
    const columns = [
        { field: 'name', headerName: 'Name', editable: false,  minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left', sortable:false },
        {
            field: 'categoryImages', headerName: 'categoryImages', minWidth: 180,type: 'button', editable: false, sortable:false,flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => (
               <div className='categoryTableImg'><img src={params?.row?.categoryImages} alt={"category image"} /></div>
            )
        },
        {
            field: 'Status', headerName: 'Status', type: 'number',minWidth: 110,sortable:false, editable: false,flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
            renderCell: (params) => {
                if (params.formattedValue === "Active") {
                    return (
                        <Tooltip title="Active" enterDelay={300} leaveDelay={200} arrow placement="right-start">
                            <p
                                style={{ color: "#31B665 ", fontSize: 25, cursor: "pointer" }}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    state.Roles.EditCategory &&  SubmitEditData(params);
                                }}
                            >
                                <LuEye />
                            </p>
                        </Tooltip>
                    )
                }
                return (
                    <Tooltip title="Hide" enterDelay={300} leaveDelay={200} arrow placement="right-start">

                        <p
                            style={{ color: "red ", fontSize: 25, cursor: "pointer" }}
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                state.Roles.EditCategory && SubmitEditData(params);
                            }}
                        ><AiOutlineEyeInvisible /></p>
                    </Tooltip>

                )
            }
        },
        {
            field: 'Edit', headerName: 'Edit',minWidth: 110, type: 'button', editable: false, sortable:false,flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => (
                <>
                  { ( state.Roles.EditCategory || state.Roles.DeleteCategory) &&
                      
                    <Box
                        sx={{
                            "&.MuiBox-root":{
                               display:'flex',
                               justifyContent:'center',
                               alignItems:'center',
                               gap:'10px'
                            },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderWidth: "1px",
                                    borderColor: 'black',
                                },
                            },
                            '& . MuiDataGrid-root .MuiDataGrid-cell:focus': {
                                outline: "#e0e0e0"
                            }
                        }}
                    >
                        
                          { state.Roles.EditCategory && <CategoryEditbox data={params.row} ></CategoryEditbox>}
                          { state.Roles.DeleteCategory && <Eelete data={params.row}></Eelete> }
                       

                     
                    </Box>
                  }  
                </>

            )
        },

    ];
    const rows = totel
    return (
            <div className='row bg-white'>
              
                    <div className='col-12 Add_Category  mt-5 mb-5 d-flex justify-content-between align-items-center'>
                        <h2 className='d-flex gap-2 align-items-center'> <ImDropbox color='#31B655' size={25}/>Category</h2>
                       { state.Roles.AddCategory && <span>{<Categorypopup></Categorypopup>}</span>}
                    </div>
                    <div className='col-12'>
                        <Box sx={{
                            height: 400,
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#F9FAFC',
                                color:'#5A5A5A',
                            },
                            '& .MuiButton-root': {
                                color: "#FFFFFF",
                                display: "flex",
                                width: "200px"
                            },
                             // check
                             ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":{
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
                                <div style={{ width: '100%' }}>
                                    <DataGrid rows={rows} columns={columns} 
                                                autoHeight
                                                pageSize={pageSize}
                                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                                rowsPerPageOptions={[5, 10, 20]}
                                                pagination
                                                disableColumnMenu
                                                disableColumnFilter
                                                disableColumnSelector
                      
                                        sx={{
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
                                            height: 400,
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
                                </div>
                            </ThemeProvider>
                        </Box>
                    </div>
            
            </div>
    )
}
