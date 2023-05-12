import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import Cookies from 'universal-cookie';
import Storepopup from "./Storepopup"
import { BsThreeDotsVertical } from 'react-icons/bs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import StoreEdit from './StoreEdit';
import StoreView from "./StoreView"
import StoreDelete from "./StoreDelete"
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Createcontext from '../../Hooks/Context/Context';
import { useSnackbar } from 'notistack';
import Tooltip from '@mui/material/Tooltip';



// const StyledPaper = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     maxWidth: "65%",
//     color: theme.palette.text.primary,
// }));



export default function Store() {
    const { enqueueSnackbar } = useSnackbar();
    const { state, dispatch } = useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("http://backend.sweede.net/AdminPanel/Get-Stores/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)

        })
    }, [token_data, state])


    const Submit = (params) => {
        const formdata = new FormData();
        formdata.append('Store_Name', params.row.Store_Name);
        formdata.append('Store_Type', params.row.Store_Type);
        formdata.append('LicenceNo', params.row.LicenceNo);
        formdata.append('Store_Address', params.row.Store_Address);
        formdata.append('Stores_Website', params.row.Stores_Website);
        formdata.append('Stores_MobileNo', params.row.Stores_MobileNo);
        formdata.append('Status', params.row.Status === "Active" ? "Hide" : "Active");
        formdata.append('city_id', params.row.city_id)


        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };


        axios.post(
            `http://backend.sweede.net/AdminPanel/update-Stores/${params.row.id}`,
            formdata,
            config
        ).then(() => {
            dispatch({ type: 'api', api: true })
            enqueueSnackbar('Edit Store Status  success !', { variant: 'success' });
        })
    };

    const columns = [
        // {
        //     field: 'Store_Image', headerName: 'Store Image', editable: true, headerClassName: 'super-app-theme--header', width: 110,
        //     renderCell: (params) => <img src={"http://backend.sweede.net/" + params.value} alt="flavoursImage" width="35" height="30" />,
        // },
        { field: 'Store_Name', headerName: 'Name', editable: true,maxWidth: 150, minWidth: 60, flex: 1, headerClassName: 'super-app-theme--header' },
        { field: 'Store_Type', headerName: 'Store Type', editable: true,maxWidth: 150, minWidth: 60, flex: 1, headerClassName: 'super-app-theme--header' },
        // { field: 'Store_Address', headerName: 'Store Address', editable: true, headerClassName: 'super-app-theme--header', width: 150 },
        // {
        //     field: 'Stores_Description', headerName: 'Stores Description', editable: true, width: 180, headerClassName: 'super-app-theme--header',
        //     renderCell: (params) => <span dangerouslySetInnerHTML={{ __html: params.formattedValue }} />
        // },
        // { field: 'Stores_Website', headerName: 'Stores Website', editable: true, width: 130, headerClassName: 'super-app-theme--header' },
        { field: 'Stores_MobileNo', headerName: 'MobileNo', editable: true, maxWidth: 150, minWidth: 60, flex: 1, headerClassName: 'super-app-theme--header' },
        {
            field: 'Status', headerName: 'Status', editable: true, maxWidth: 150, minWidth: 60, flex: 1, headerClassName: 'super-app-theme--header',

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
            field: 'Edit', headerName: 'Edit', editable: true,maxWidth: 150, minWidth: 80, flex: 1, headerClassName: 'super-app-theme--header',
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
                         <StoreEdit data={params.row}></StoreEdit>
                            <StoreDelete data={params.row} ></StoreDelete>
                           <StoreView></StoreView>
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
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-10  category_main_row' >
                        

                        <div className='col-12 Add_Category margin_top m-2 mt-5 mb-5'>
                            <div className="col"> <h2>Store
                            </h2></div>
                            <div className="col cat_but popup_A" >  <span className='btn cat_pop_btn'> <h2><Storepopup></Storepopup> </h2></span></div>
                        </div>


                        <Box sx={{
                            height: 400,
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#E1FFED',
                            },
                            ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                outline: "none"
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

                            <div className='col-12' >
                                <Box>
                                <ThemeProvider theme={CustomFontTheme}>
                                    <div style={{ height: 500, width: '100%', }}>
                                        <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} checkboxSelection
                                        sx={{
                                            ".MuiDataGrid-toolbarContainer": {
                                                backgroundColor: "#31B665"
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                                outline: "none ",
                                            },
                                            "@media(max-width:768px)": {
                                                ".MuiDataGrid-toolbarContainer": {
                                                    gap: "10px",

                                                }
                                            },
                                            "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                                visibility: "hidden"
                                            },
                                            "@media(max-width:546px)": {
                                                ".MuiDataGrid-toolbarContainer": {
                                                    gap: "5px",

                                                }
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

                        </Box>
                    </div>
                </div>
            </div>

        </>
    );
}