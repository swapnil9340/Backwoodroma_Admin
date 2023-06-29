import React , {useContext} from 'react'
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Discountpopup from "./Discountpopup"
import axios from "axios";
import Createcontext from "../../Hooks/Context/Context"
import Box from '@mui/material/Box';
import { useSnackbar } from 'notistack';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BsThreeDotsVertical } from 'react-icons/bs';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DiscountEdit from "./DiscountEdit"
import DiscountDelete from "./DiscountDelete"
import Tooltip from '@mui/material/Tooltip';

export default function State() {
    const { enqueueSnackbar } = useSnackbar();
    const { state , dispatch} = useContext(Createcontext)
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

    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("https://sweede.app/AdminPanel/register/Get-Discount/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)

        })
    }, [token_data,state])
    const Submit = (params) => {


        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };

        const data = {
            "id": params.row.id,
            "Discount_value" : params.row.Discount_value,
            "Discount_type": params.row.Discount_type,
            "Status": params.row.Status === "Active" ? "Hide" : "Active"
        }
        axios.post(
            `https://sweede.app/AdminPanel/register/update-Discount/${params.row.id}`,
            data,
            config
        ).then(() => {
           
            dispatch({ type: 'api', api: true })
            enqueueSnackbar('Edit Discount success !', { variant: 'success' });
        
        })
    };

    const columns = [
        { field: 'Discount_value', headerName: 'Discount value',maxWidth: 150, minWidth: 70, flex: 1, editable: false, headerClassName: 'super-app-theme--header' },
        { field: 'Discount_type', headerName: 'Discount type', maxWidth: 150, minWidth: 70, flex: 1, editable: false, headerClassName: 'super-app-theme--header' },
        { field: 'Status', headerName: 'Status', type: 'text', editable: false, maxWidth: 150, minWidth: 70, flex: 1, headerClassName: 'super-app-theme--header',
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
        { field: 'Edit', headerName: 'Edit', type: 'button',maxWidth: 150, minWidth: 70, flex: 1, editable: false, headerClassName: 'super-app-theme--header',
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
                        <DiscountEdit data={params.row} ></DiscountEdit>
                         <DiscountDelete data={params.row}></DiscountDelete>  
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

               
                <div className='col-10 discount_main_row mt-2' >

                    <div className='col-12 Add_Category'>
                        <div className="col"> <h2> Discount
                        </h2></div>
                        <div className="col cat_but" >  <span className='btn cat_pop_btn'> <h2>  <Discountpopup></Discountpopup> </h2></span></div>
                    </div>

                    <div className='col-12' >
                        <Box sx={{
                            height: 400,
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#E1FFED',
                            },
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
                                <div style={{ height: 400, width: '100%', }}>
                                    <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} checkboxSelection 
                                      sx={{
                                        "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                           outline: "none ",
                                        },
                                        "&.MuiDataGrid-root .MuiDataGrid-columnSeparator": {
                                            visibility: "hidden"
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
                                        ".MuiDataGrid-toolbarContainer":{
                                            backgroundColor:"#31B665"     
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
