import React, { useContext } from 'react';
import Createcontext from "../../Hooks/Context/Context"
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import Cookies from 'universal-cookie';
import DeleteGift from './GiftVoucherDelete'
import GiftVoucherpopup from './GiftVoucherpopup';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { BsThreeDotsVertical } from 'react-icons/bs';
export default function Gift_Voucher() {
    const { state } = useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("http://52.3.255.128:8000/AdminPanel/GiftVoucherViewSet/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)

        })
    }, [token_data, state])
    React.useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    const columns = [

        {
            field: 'code', headerName: 'Code', type: 'text', editable: true, maxWidth: 150, minWidth: 80, flex: 1, headerClassName: 'super-app-theme--header',
            renderCell: (params) => <span dangerouslySetInnerHTML={{ __html: params.formattedValue }} />
        },
        { field: 'type', headerName: 'Type', editable: true, maxWidth: 150, minWidth: 80, flex: 1, headerClassName: 'super-app-theme--header', width: 120 },

        { field: 'expires', headerName: 'Expire', type: 'text', editable: true, maxWidth: 150, minWidth: 80, flex: 1, headerClassName: 'super-app-theme--header', width: 150 },

        {
            field: 'Edit', headerName: 'Edit', type: 'button', editable: true, maxWidth: 150, minWidth: 80, flex: 1, headerClassName: 'super-app-theme--header',
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
                            <MenuItem > <DeleteGift data={params.row}></DeleteGift> </MenuItem>

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
                <div className='row mt-4'>
                    <div className='col-10  category_main_row' >

                        <div className='col-12 Add_Category margin_top '>
                            <div className="col"> <h2>Gift Voucher
                            </h2></div>
                            <div className="col cat_but popup_A" >  <span className='btn cat_pop_btn'> <h2> <GiftVoucherpopup></GiftVoucherpopup></h2></span></div>
                        </div>


                        <Box sx={{
                            height: 400,
                            width: '100%',
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#E1FFED',
                            },
                            '& .MuiButton-root': {
                                color: '#000000',
                                display: "flex",
                            },
                            '& .MuiButton-startIcon': {
                                color: '#000000',
                                // display: "flex",

                            },
                        }}>


                            <div className='col-12' >
                                <Box sx={{
                                    height: 400,
                                    width: '100%',
                                    '& .MuiButton-root': {
                                        color: '#FFFFFF',
                                        display: "flex",
                                    },
                                    // check
                                    ".MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within": {
                                        outline: "none"
                                    },

                                    ".MuiButton-startIcon": {
                                        color: '#FFFFFF',
                                    },
                                    "@media(max-width:427px)": {
                                        '& .MuiButton-root': {
                                            display: "contents",
                                            width: "150px",
                                            fontSize: "9px"
                                        },
                                        ".MuiButton-startIcon": {
                                            color: '#FFFFFF',
                                            fontSize: "9px"
                                        },

                                    },
                                    '& .MuiDataGrid-columnHeaders': {
                                        backgroundColor: '#E1FFED',
                                    },
                                }}>
                                    <ThemeProvider theme={CustomFontTheme}>
                                        <div style={{ height: 500, width: '100%', }}>
                                            <DataGrid rows={rows} columns={columns} components={{ Toolbar: GridToolbar }} checkboxSelection
                                                sx={{
                                                    ".MuiDataGrid-toolbarContainer": {
                                                        backgroundColor: "#31B665"
                                                    },
                                                    "@media(max-width:527px)": {
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
                                                    "&.MuiDataGrid-root  .MuiDataGrid-columnHeader:focus": {
                                                        outline: "none"
                                                    },
                                                    "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
                                                        outline: "none ",

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