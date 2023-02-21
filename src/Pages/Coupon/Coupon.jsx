import  React , {useContext} from 'react';
import Createcontext from "../../Hooks/Context/Context"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import Cookies from 'universal-cookie';
import Couponpopup from "./Couponpop"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select'; 
import { BsThreeDotsVertical } from 'react-icons/bs';
import CouponDelete from './CouponDelete';





export default function Coupon() {
    const { state} = useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("http://34.201.114.126:8000/AdminPanel/CouponViewSet/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)
      

        })
    }, [token_data, state])
    React.useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    const columns = [
        // {
        //     field: 'code_l', headerName: 'Code L', editable: true, headerClassName: 'super-app-theme--header', width: 120,
        // },
        { field: 'type', headerName: 'Type',maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header' },

        { field: 'expires', headerName: 'Expire', type: 'text',maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header',
        renderCell: (params) =>  params.row.created.slice(0,10)
    },
        {
            field: 'code', headerName: 'Code', type: 'text', maxWidth: 150, minWidth: 80, flex: 1,editable: true, headerClassName: 'super-app-theme--header',
            renderCell: (params) => <span dangerouslySetInnerHTML={{ __html: params.formattedValue }} />
        },
        // { field: 'bound', headerName: 'Bound', type: 'text', editable: true, width: 90, headerClassName: 'super-app-theme--header' },
        { field: 'Edit', headerName: 'Edit', type: 'button',maxWidth: 150, minWidth: 80, flex: 1, editable: true, headerClassName: 'super-app-theme--header',
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
                        <MenuItem > <CouponDelete data={params.row}></CouponDelete> </MenuItem>
                       
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
                    <div className='col-12 Add_Category margin_top '>
                        <div className="col hadding_al "> <h2>Coupon   
                        </h2></div>
                        <div className="col cat_but popup_A" >  <span className='btn cat_pop_btn'> <h2> <Couponpopup></Couponpopup></h2></span></div>
                    </div>

                </div>            
                        <Grid container wrap="nowrap" spacing={2}>

                            <Grid item xs>

                                <div className='col-10 gift_main_col coupan_main_col' >
                                    <Box sx={{ 
                                        height: 400,
                                    width: '100%',
                                    '& .MuiButton-root': {
                                        color: '#FFFFFF',
                                        display: "flex",
                                    },
                                    '& .MuiDataGrid-columnHeaders': {
                                        backgroundColor: '#E1FFED',
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
                                    },
                                    
                                 
                                    
                                    }}>
                                    <ThemeProvider theme={CustomFontTheme}>
                                        <div style={{ height: 500, width: '100%', }}>
                                            <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} checkboxSelection
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
                            </Grid>
                        </Grid>
            </div>
        </>
    );
}