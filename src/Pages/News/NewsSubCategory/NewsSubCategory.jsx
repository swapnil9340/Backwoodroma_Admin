import React , {useContext} from 'react'
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import axios from "axios";
import { BsThreeDotsVertical } from 'react-icons/bs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import NewsSubCategoryEdit from "./EditSubCategory"
import Createcontext from "../../../Hooks/Context/Context"
import DeleteSubCategory from "./DeleteSubCategory"
import AddNewsCategory from "./AddSubCategory"
export default function NewsSubCategory() {
    const { state} = useContext(Createcontext)
    const CustomFontTheme = createTheme({
        typography: {
            fontSize: 25
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
    React.useEffect(() => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')
        axios("http://52.3.255.128:8000/AdminPanel/Get-NewsSubCategory", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data.data)

        })
    }, [state])
    
    const columns = [
        { field: 'name', headerName: 'Name', maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header',headerAlign: 'left', align:"", },
        { field: 'category_name', headerName: 'News Category', type: 'text', editable: true, maxWidth: 150, minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header',headerAlign: 'left', align:"left", },
        {
            field: 'Edit', headerName: 'Edit', type: 'button', headerClassName: 'super-app-theme--header', cellClassName: 'Edit',maxWidth: 150, minWidth: 110, flex: 1,headerAlign: 'center', align:"center",
            renderCell: (params) => (
                <>
                    <Box >
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
                            <MenuItem ><NewsSubCategoryEdit data={params.row} ></NewsSubCategoryEdit></MenuItem>
                            <MenuItem  > <DeleteSubCategory data={params.row}></DeleteSubCategory> </MenuItem>
                        </Select>
                    </Box>
                </>

            )


        }
    ]

        const rows = totel
return (
    <div className='container-fluid'>
        <div className='row'>

          
            <div className='col-10 category_main_row'>

                <div className='col-12 Add_Category m-2 mt-5 mb-5'>
                    <div className="col"> <h2>News Sub Category
                    </h2></div>
                    <div className="col cat_but" >  <span className='btn cat_pop_btn'> <h2> <AddNewsCategory></AddNewsCategory></h2></span></div>
                </div>

                <div className='col-12' >
                    <Box sx={{
                    height: 400,
                    width: '100%',
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: '#E1FFED',
                    },
                    '& .MuiButton-root': {
                        color: '#FFFFFF',
                        display: "flex",
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
                            <div style={{ height: 400, width: '100%', }}>
                                <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }}
                                sx={{
                                    ".MuiDataGrid-toolbarContainer": {
                                        flexDirection: "block",

                                        backgroundColor: "#31B665",
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                        visibility: "hidden"
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
