import React, { useEffect,useContext } from 'react'
import Createcontext from "../../../Hooks/Context/Context"
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from "axios"
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { BsThreeDotsVertical } from 'react-icons/bs';

import Select from '@mui/material/Select';
import AddNewsCategory  from "./AddNewsCategory"
import NewsCategoryEditbox from "./EditNewsCategory"
import NewsCategoryDelete  from "./DelectnewsCategory"
export default function NewsCategory(props) {
    const { state} = useContext(Createcontext)

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


        }
    });

    const [totel, setTotal] = React.useState([])

    
    
    useEffect(() => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        axios("https://api.cannabaze.com/AdminPanel/Get-NewsCategory/", {

        headers: {
            'Authorization': `Bearer ${token_data}`
        }
    }).then(response => {

        setTotal([...response.data])

    })

    },[state])




    const columns = [
        { field: 'name', headerName: 'Name', editable: true, maxWidth: 150, minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left', },
        {
            field: 'Edit', headerName: 'Edit', type: 'button', editable: false,maxWidth: 150, minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left',
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
                           <NewsCategoryEditbox data={params.row}></NewsCategoryEditbox>
                           <NewsCategoryDelete data={params.row}></NewsCategoryDelete>
                        </Select>
                    </Box>
                </>

            )
        },

    ];

    const rows = totel

    return (
        <div className='container-fluid '>
            <div className='row'>

              
                <div className='col-10 category_main_row' >

                    <div className='col-12 Add_Category m-2 mt-5 mb-5'>
                        <div className="col"> <h2>News Category
                        </h2></div>
                        <div className="col cat_but " >   <span className='btn cat_pop_btn'>{<AddNewsCategory></AddNewsCategory>}</span> </div>
                    </div>

                    <div className='col-12'>
                        <Box sx={{
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
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar, }}
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




            </div>

        </div>


    )
}
