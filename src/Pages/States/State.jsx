import React, { useContext } from 'react'
import Cookies from 'universal-cookie';
import Createcontext from "../../Hooks/Context/Context"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import StatePopUp from "./Statespopup"
import axios from "axios";
import Box from '@mui/material/Box';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import StateEdit from "./StateEdit"
import StateDelete from './StatesDelete';
import Tooltip from '@mui/material/Tooltip';



export default function State() {
    const { state, dispatch } = useContext(Createcontext)
    const CustomFontTheme = createTheme({
        typography: {
            fontSize: 25,
            colors: "#31B665"
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {

                        fontSize: 24
                    }
                }
            }
        }
    });
    const [totel, setTotal] = React.useState([])

    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    React.useEffect(() => {
        axios("https://sweede.app/AdminPanel/register/Get-States/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal([...response.data])

        })
    }, [state, token_data])
    function SubmitEditData(params) {

        const form = {
            "id": params.row.id,
            "Country_id": params.row.Country_id,
            "StateName": params.row.StateName,
            " country_name": params.row.CountryName,
            "Status": params.row.Status === "Active" ? "Hide" : "Active"
        }
        axios.post(`https://sweede.app/AdminPanel/register/update-States/${params.row.id}`, form, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            if (response) {
                dispatch({ type: 'api', api: true })


            }
        }).catch(
            function (error) {
                return Promise.reject(error)
            }
        )
    }


    const columns = [
        { field: 'StateName', headerName: 'States',maxWidth: 150, minWidth: 90, flex: 1, editable: false, headerClassName: 'super-app-theme--header' },
        { field: 'country_name', headerName: 'Country', maxWidth: 150, minWidth: 90, flex: 1,editable: false, headerClassName: 'super-app-theme--header' },
        {
            field: 'Status', headerName: 'Status',maxWidth: 150, minWidth: 90, flex: 1, editable: false, width: 300, headerClassName: 'super-app-theme--header',
            renderCell: (params) => {

                if (params.formattedValue === "Active") {
                    return (
                        <Tooltip title="Active" enterDelay={300} leaveDelay={200} arrow placement="right-start">

                        <p
                            style={{ color: "#31B665 ", fontSize: 25, cursor: "pointer" }}
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                SubmitEditData(params);
                            }}
                        ><AiFillEye /> </p>
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
                            SubmitEditData(params);
                        }}
                    ><AiOutlineEyeInvisible /></p>
                    </Tooltip>

                )
            }
        },
        {
            field: 'Edit', headerName: 'Edit',maxWidth: 150, minWidth: 80, flex: 1, editable: false, headerClassName: 'super-app-theme--header',headerAlign: 'center', align:"center",
            renderCell: (params) => (
                <>
                    <Box
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderWidth: "1px",
                                    borderColor: 'red',
                                },
                            },
                            '& . MuiDataGrid-root .MuiDataGrid-cell:focus': {
                                outline: "solid #0f1010 1px"
                            }
                        }}
                    >
                        <Select 
                        sx={{
                            boxShadow: '', '.MuiOutlinedInput-notchedOutline': { border: "0px" },
                            "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                            "&:hover": {
                                ".MuiSelect-icon": {
                                    color: "#31B665"
                                }
                            },
                        }}
                        IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label">
                            <StateEdit data={params.row} ></StateEdit>
                            <StateDelete data={params.row} ></StateDelete>
                        </Select>
                    </Box>
                </>

            )
        },
    ];

    const rows = totel
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-10  state_main_row'>

                    <div className='col-12 Add_Category my-2'>
                        <div className="col"> <h2> States
                        </h2></div>
                        <div className="col cat_but" >  <span className='btn cat_pop_btn'> <h2><StatePopUp></StatePopUp></h2></span></div>
                    </div>

                    <div className='col-12' >
                        <Box
                            sx={{

                                height: 400,
                                width: '100%',
                               
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: '#E1FFED',
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
    

                            }}
                        >

                            <ThemeProvider theme={CustomFontTheme}>
                                <div style={{ height: 400, width: '100%', }}>
                                    <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} 
                                         sx={{
                                           
                                            "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                                                outline: "none"
                                            },
                                            "&.MuiDataGrid-root  .MuiDataGrid-cell:focus": {
                                                outline: "none",
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                               outline: "none",
                                            },
                                           
                                            '& .MuiButton-root': {
                                                // color: "#FFFFFF",
                                            
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
        
                                         }}                                    />
                                </div>
                            </ThemeProvider>
                        </Box>
                    </div>
                </div>




            </div>

        </div>


    )
}