import React, { useContext } from 'react'
import Createcontext from "../../Hooks/Context/Context"
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import Cookies from 'universal-cookie';
import Brandpopup from './Brandpopup';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Select from '@mui/material/Select';
import BrandEdit from "./BrandEdit"
import BrandDelete from "./BrandDelete"
import Tooltip from '@mui/material/Tooltip';

export default function Brand() {
    const cookies = new Cookies();
    const { state, dispatch } = useContext(Createcontext)
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    const [pageSize, setPageSize] = React.useState(5)


    React.useEffect(() => {
        axios("https://api.cannabaze.com/AdminPanel/Get-Brand/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)

        })



    }, [token_data, state])



    const Submit = (params) => {
        if(state.Roles.EditBrand ){const formdata = new FormData();
        formdata.append('Brand_description', params.row.Brand_description);
        formdata.append('Link', params.row.Link);
        formdata.append("Status", params.row.Status === "Active" ? "Hide" : "Active");
        formdata.append('name', params.row.name);


        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        axios.post(
            `https://api.cannabaze.com/AdminPanel/update-Brand/${params.row.id}`,
            formdata,
            config
        ).then(() => {


            dispatch({ type: 'api', api: true })
        })}
    };




    const columns = [
        {
            field: 'Brand_Logo', headerName: 'Logo', editable: true, headerClassName: 'super-app-theme--header', minWidth: 80, flex: 1,sortable:false,
            renderCell: (params) => <img src={params?.row?.Brand_Logo} alt="flavoursImage" width="35" height="30" />,
        },
        { field: 'name', headerName: 'Name', editable: true, headerClassName: 'super-app-theme--header', minWidth: 80, flex: 1,sortable:false, },
        {
            field: 'Status', headerName: 'Status', editable: false, minWidth: 80, flex: 1, headerClassName: 'super-app-theme--header',sortable:false,
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
            field: 'Edit', headerName: 'Edit', type: 'button', minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header',sortable:false,
            renderCell: (params) => (

                <>
                    { 
                        (state.Roles.EditBrand ||  state.Roles.DeleteBrand ) && 
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
                                { state.Roles.EditBrand  && <BrandEdit data={params.row} ></BrandEdit>}
                                { state.Roles.DeleteBrand && <BrandDelete data={params.row} ></BrandDelete> }
                            </Select>
                        </Box>
                    }
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
        <div className='section_card mt-4'>
            <div className='col-12 Add_Category  margin_top m-2 mt-5 mb-5'>
                <div className="col"> <h2>Brand  </h2></div>
                { state.Roles.AddBrand  && <div className="col  popup_A" ><span> <h2> <Brandpopup></Brandpopup> </h2></span></div>}
            </div>
            <div className='col-12 '>

                <Box sx={{
                    '& .MuiButton-root': {
                        color: '#FFFFFF',
                        display: "flex",
                    },
                    ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                        outline: "none"
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
                        <div style={{  width: '100%', }}>
                            <DataGrid rows={rows} columns={columns}  checkboxSelection  autoHeight
                                pageSize={pageSize}
                                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                rowsPerPageOptions={[5, 10, 20]}
                                pagination
                                disableColumnMenu
                                disableColumnFilter
                                disableColumnSelector
                                sx={{
                                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                        outline: "none ",
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-row:hover": {
                                        backgroundColor: "#FFFFFF"
                                    },
                                    ".MuiDataGrid-toolbarContainer": {
                                        backgroundColor: "#31B665"
                                    },
                                    "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                        visibility: "hidden"
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
    );
}