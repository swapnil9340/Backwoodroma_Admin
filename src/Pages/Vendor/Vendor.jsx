import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Tooltip from '@mui/material/Tooltip';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import axios from "axios"
import Cookies from 'universal-cookie';
import Createcontext from "../../Hooks/Context/Context"
import { useSnackbar } from 'notistack';
import UserDelete from './DeleteVendor';


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





// const rows = 

const Vendor = () => {
    const { state, dispatch } = React.useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
    const [totel, setTotal] = React.useState([])
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    React.useEffect(() => {

        axios("http://52.3.255.128:8000/AdminPanel/GetAllUsers/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }
        }).then(response => {

            setTotal([...response.data.data])
        })

    }, [state, token_data])

    const columns = [
        // {
        //     field: 'id', headerName: 'ID', maxWidth: 90, flex: 1, minWidth: 90,
        // },
        {
            field: 'username',
            headerName: 'Name',
            maxWidth: 150, minWidth: 120, flex: 1,
            "@media(max-width:540px)": {
                maxWidth: 90, minWidth: 40, flex: 1,

            },
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email/Phone',
            maxWidth: 150, minWidth: 120, flex: 1,
            editable: true,
        },
        {
            field: 'storeType',
            headerName: 'Store Type',

            maxWidth: 150, minWidth: 120, flex: 1,
            editable: true,
        },
        {
            field: 'storeName',
            headerName: 'Store Name',
            type: 'number',
            maxWidth: 150, minWidth: 120, flex: 1,
            editable: true,
            headerAlign: 'left', align: "left",
        },
        {
            field: 'registerDate',
            headerName: 'Register Date',

            sortable: false,
            maxWidth: 150, minWidth: 120, flex: 1,

        },
        {
            field: 'status',
            headerName: 'Status',
            editable: true,
            sortable: false,
            maxWidth: 150, minWidth: 120, flex: 1, headerAlign: 'center', align: "center",
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
                            >
                                <AiFillEye />
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
                                SubmitEditData(params);
                            }}
                        ><AiOutlineEyeInvisible /></p>
                    </Tooltip>

                )
            }

        },
        {
            field: 'Edit',
            headerName: 'Edit',
            editable: true,
            sortable: false,
            maxWidth: 150, minWidth: 120, flex: 1,
            headerAlign: 'center', align: "center",
            renderCell: () => {
                return (
                    <Box
                        sx={{
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
                        <Select sx={{
                            boxShadow: '', '.MuiOutlinedInput-notchedOutline': { border: "0px" },
                            "&.Mui-focused .MuiSelect-icon": { color: "#31B665" },
                            "&:hover": {
                                ".MuiSelect-icon": {
                                    color: "#31B665"
                                }
                            },
                        }} IconComponent={BsThreeDotsVertical} labelId="demo-simple-select-error-label">
                            <MenuItem ><UserDelete></UserDelete></MenuItem>
                          
                        </Select>
                    </Box>
                )
            }

        },

    ];
     const rows = totel

     function SubmitEditData(params) {
        const form = {

            "name": params.row.name,
            "status": params.row.status === "Active" ? "Hide" : "Active"
        }
        axios.post(`http://52.3.255.128:8000/AdminPanel/UpdateProfileForVendor/${params.row.id}`, form, {

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
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 category_main_row">
                        <div className="col-12 d-flex  Add_Category  mt-5 mb-5">
                            <div className="col">
                                <h2>Vendor</h2>

                            </div>
                           

                        </div>
                        <div className="col-12 mb-4 mt-4">
                            <Box
                                sx={{
                                  width: '100%', height: 400,
                                  
                                    '& .MuiDataGrid-columnHeaders': {
                                        backgroundColor: '#E1FFED',
                                    },
                                    '& .MuiButton-root': {
                                        color: "#FFFFFF",
                                        display: "flex",
                                        width: "200px"
                                    },
                                    // check
                                    ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                        outline: "none"
                                    },

                                }}
                            >
                                <ThemeProvider theme={CustomFontTheme}>

                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        initialState={{
                                            pagination: {
                                                paginationModel: {
                                                    pageSize: 5,
                                                },
                                            },
                                        }}
                                        pageSizeOptions={[5]}
                                       
                                        disableRowSelectionOnClick
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
                                            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                                visibility: "hidden"
                                            },
                                            " &.MuiDataGrid-root .MuiDataGrid-cellContent": {
                                                fontSize: "14px"
                                            }

                                        }}
                                    />
                                </ThemeProvider>
                            </Box>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}
export default Vendor