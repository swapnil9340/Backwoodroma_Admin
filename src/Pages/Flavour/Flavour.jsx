import React , {useContext}from 'react'
import Createcontext from "../../Hooks/Context/Context"
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import FlavorPopUp from "./Flavourpopup"
import Box from '@mui/material/Box';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FlavoursEdit from './FlavourEdit';
import FlavourDelete from './FlavourDelete';
export default function State() {
    const { state} = useContext(Createcontext)
    const CustomFontTheme = createTheme({
        typography: {
            fontSize: 25,
            colors : "#31B665"
        },
        components: {
            MuiContainer: {
                colors : "green",
                styleOverrides: {
                    root: {
                       
                        fontSize: 24
                    }
                }
            }
        }
    });

    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("https://sweede.app/AdminPanel/Get-Flavours/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)
        })
    }, [token_data ,state])


    const columns = [
        {
            field: 'FlavoursImage', headerName: 'Flavours Image',maxWidth: 150, minWidth: 80, flex: 1, type: 'text', editable: true,
            renderCell: (params) => <img src={"http://backend.sweede.net/" + params.value} alt="flavoursImage" width="35" height="30" />,
            headerClassName: 'super-app-theme--header'
        },
        { field: 'flavour_Name', headerName: 'flavour Name',maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header' },
        { field: 'Price', headerName: 'Price',maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header' },
        { field: 'Edit', headerName: 'Edit', type: 'button',maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header',
        renderCell: (params) => (
            <>
                <Box 
                 sx={{
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderWidth: "1px",
                            borderColor: 'black',
                        },
                    },
                   '& . MuiDataGrid-root .MuiDataGrid-cell:focus' : {
                        outline: "none"
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
                        <FlavoursEdit data={params.row} ></FlavoursEdit>
                         <FlavourDelete data={params.row}></FlavourDelete>  
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
               
                <div className='col-10 flavour_main_col ' >

                    <div className='col-12 Add_Category m-2'>
                        <div className="col"> <h2> Flavour
                        </h2></div>
                        <div className="col cat_but" >  <span className='btn cat_pop_btn '> <h2> <FlavorPopUp></FlavorPopUp> </h2></span></div>
                    </div>

                    <div className='col-12' >
                    <Box  sx={{
                            height: 400,
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#E1FFED',
                            },
                             // check
                             ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within":{
                                outline:"none"
                              },

                            '& .MuiButton-root': {
                                color: '#FFFFFF',
                                display: "flex",
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
                            <div style={{ height: "100%", width: '100%', }}>
                            
                                <DataGrid rows={rows} columns={columns}  components={{ Toolbar: GridToolbar }}  checkboxSelection
                                 sx={{
                                    ".MuiDataGrid-toolbarContainer":{
                                      backgroundColor:"#31B665"
                                    },
                                    "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                                        outline: "none"
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                        outline: "none ",

                                    },
                                    
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
                                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                        visibility: "hidden"
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                                        backgroundColor: "#FFFFFF"
                                    },
                                   
                                 }}
                                />
                            </div>
                        </ThemeProvider>
                        </Box>
                    </div>
                </div>




            </div>

        </div>


    )
}
