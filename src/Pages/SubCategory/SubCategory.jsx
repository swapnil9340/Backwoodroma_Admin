import React, { useContext } from 'react'
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import PopUp from './PopUp';
import axios from "axios";
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSnackbar } from 'notistack';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import SubCategoryEdit from "./SubCategoryEdit"
import Createcontext from "../../Hooks/Context/Context"
import SubCategoryDelete from './SubCategoryDelete';
import Tooltip from '@mui/material/Tooltip';

export default function SubCategory() {
    const { enqueueSnackbar } = useSnackbar();
    const { state, dispatch } = useContext(Createcontext)
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
        axios("http://34.201.114.126:8000/AdminPanel/Get-SubCategory/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)

        })
    }, [state])
    const Submit = (params) => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };

        const data = {
            "id": params.row.id,
            "name": params.row.name.toUpperCase(),
            "category_id": params.row.Category_id,
            "Status": params.row.Status === "Active" ? "Hide" : "Active"
        }
        axios.post(
            `http://34.201.114.126:8000/AdminPanel/update-SubCategory/${data.id}`,
            data,
            config
        ).then(() => {

            dispatch({ type: 'api', api: true })
            enqueueSnackbar('Edit Sub-Category  success !', { variant: 'success' });
        }).catch(
            function (error) {
                return Promise.reject(error)
            }
        )
    };
    const columns = [
        { field: 'name', headerName: 'Name', maxWidth: 150, minWidth: 90, flex: 1, editable: true, headerClassName: 'super-app-theme--header' },
        { field: 'category_name', headerName: 'category',maxWidth: 150, minWidth: 90, flex:1,type: 'text', editable: true,  headerClassName: 'super-app-theme--header',headerAlign: 'left' },
        {
            field: 'Status', headerName: 'Status', type: 'action',maxWidth: 150, minWidth: 80,flex: 1, editable: false,  headerClassName: 'super-app-theme--header', headerAlign: 'center', align:"center",

            renderCell: (params) => {

                if (params.formattedValue === "Active") {
                    return (
                        <Tooltip title="Active" enterDelay={300} leaveDelay={200} arrow placement="right-start">

                            <p
                                style={{ color: "#31B665 ", fontSize: 25, cursor: "pointer" }}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    Submit(params);
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
                                Submit(params);
                            }}
                        ><AiOutlineEyeInvisible /></p>
                    </Tooltip>
                )
            }
        },
        {
            field: 'Edit', headerName: 'Edit', type: 'button',maxWidth: 150, minWidth: 90,flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'center', cellClassName: 'Edit',align:"center",
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
                        <Select sx={{
                            boxShadow: '', '.MuiOutlinedInput-notchedOutline': { border: "0px" }, "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                            "&:hover": {
                                ".MuiSelect-icon": {
                                    color: "#31B665"
                                }
                            },
                        }} IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label">
                            <MenuItem ><SubCategoryEdit data={params.row} ></SubCategoryEdit></MenuItem>
                            <MenuItem  > <SubCategoryDelete data={params.row}></SubCategoryDelete></MenuItem>
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

              
                <div className='col-10 sub_category_main_row'>

                    <div className='col-12 Add_Category mb-4 mt-4 m-2'>
                        <div className="col"> <h2>  SubCategory
                        </h2></div>
                        <div className="col cat_but" >  <span className='btn cat_pop_btn'> <h2><PopUp></PopUp></h2></span></div>
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
                                },
                                "&.MuiDataGrid-root .MuiDataGrid-columnHeader":{
                                    width:"50px"
                                }
                            }
                        }}>
                            <ThemeProvider theme={CustomFontTheme}>
                                <div style={{ height: 400, width: '100%', }}>
                                    <DataGrid rows={rows} columns={columns}

                                        components={{ Toolbar: GridToolbar }}
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
