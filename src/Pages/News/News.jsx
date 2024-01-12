import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import Cookies from 'universal-cookie';
import Newspop from "./NewsPopup"
import NewsEdit from "./EditNews"
import Select from '@mui/material/Select';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Createcontext from "../../Hooks/Context/Context"
import DeleteNews from "./DeleteNews"



export default function News() {
    const { state } = useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("https://api.cannabaze.com/AdminPanel/Get-News/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)


        })
    }, [token_data, state])

    const columns = [
       
        { field: 'Title', headerName: 'Post Title', editable: false, headerClassName: 'super-app-theme--header',  minWidth: 150,sortable:false, flex: 1,sortable:false },
        {
            field: 'created', headerName: 'Publish Date', editable: false, minWidth: 80, flex: 1,sortable:false, headerClassName: 'super-app-theme--header',sortable:false,
            renderCell: (params) => params.row.created.slice(0, 10)
        },
        { field: 'Status', headerName: 'Views', editable: false,  minWidth: 80, flex: 1,sortable:false, headerClassName: 'super-app-theme--header',sortable:false },
        {
            field: 'Edit', headerName: 'Edit', editable: false, minWidth: 80, flex: 1,sortable:false, headerClassName: 'super-app-theme--header',sortable:false,
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
                            <NewsEdit data={params?.row}></NewsEdit>
                            <DeleteNews data={params?.row}></DeleteNews>
                        </Select>
                    </Box>
                </>

            )
        },

    ];

    const rows = totel;

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
    return (
       
                <div className='row'>
                    

                        <div className='col-12 Add_Category margin_top  m-2 mt-5 mb-5'>
                            <div className="col"> <h2>Latest News
                            </h2></div>
                            <div className="col  popup_A" >  <span> <h2> <Newspop></Newspop></h2></span></div>
                        </div>
                        <div className='col-12' >
                            <Box
                                sx={{
                                    height: 400,
                                    width: '100%',
                                    '& .MuiButton-root': {
                                        color: '#FFFFFF',
                                        display: "flex",
                                    },
                                    '& .MuiDataGrid-columnHeaders': {
                                        backgroundColor: '#E1FFED',
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
                                    },
                                    ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                        outline: "none"
                                    },

                                }}
                            >
                                <ThemeProvider theme={CustomFontTheme}>
                                    <div style={{ height: 500, width: '100%', }}>
                                        <DataGrid rows={rows} columns={columns} checkboxSelection
                                            disableColumnMenu
                                            disableColumnFilter
                                            disableColumnSelector
                                            sx={{

                                                ".MuiDataGrid-toolbarContainer": {
                                                    backgroundColor: "#31B665"
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
                                                "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                                                    outline: "none"
                                                },
                                                "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                                    outline: "none ",

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
         
    );
}