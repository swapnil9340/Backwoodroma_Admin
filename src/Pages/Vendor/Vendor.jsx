import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { BsThreeDotsVertical } from 'react-icons/bs';
import {Select , MenuItem} from '@mui/material';
import axios from "axios"

import { TiEdit } from "react-icons/ti";
import Cookies from 'universal-cookie';
import Createcontext from "../../Hooks/Context/Context"
import { useSnackbar } from 'notistack';
import UserDelete from './DeleteVendor';
import StatusBarCard from '../../Admin_panel/StatusBarCard'
import Areagraph from '../../Admin_panel/Areagraph'
import TotalSales from '../../Admin_panel/TotalSales'
import Productstorelist from '../../Admin_panel/Productstorelist'
import { FaRegEyeSlash } from "react-icons/fa";
import '../../style.css'
import '../../Admin_panel/dashboard.css'
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
const Vendor = () => {
    const { state, dispatch } = React.useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
  
    const cookies = new Cookies();
    const [pageSize, setPageSize] = React.useState(5)
    const token_data = cookies.get('Token_access')
   
  
    const columns = [
        // {
        //     field: 'id', headerName: 'ID', maxWidth: 90, flex: 1, minWidth: 90,
        // },
        {
            field: 'ProductImage',
            headerName: 'Product Image',
             minWidth: 120, flex: 1,sortable:false,
            "@media(max-width:540px)": {
                maxWidth: 90, minWidth: 40, flex: 1,
            },
            editable: false,
            renderCell: (params) => {
                return <div className='padmingbtn'>
                      <img src={params.row.ProductImage} alt=''/>
                </div>
            }
        },
        {
            field: 'ProductName',
            headerName: 'Product Name',
             minWidth: 120, flex: 1,sortable:false,
            editable: false,
        },
        {
            field: 'Category',
            headerName: 'Store Type', minWidth: 120, flex: 1,sortable:false,
            editable: false,
        },
        {
            field: 'Price',
            headerName: 'Store Name',
            type: 'number', minWidth: 120, flex: 1,sortable:false,
            editable: false,
            headerAlign: 'left', align: "left",
            valueFormatter: ({ value }) => {return `$ ${value}`}
        },
        {
            field: 'Quantity',
            headerName: 'Quantity', sortable: false, minWidth: 120, flex: 1,
            valueFormatter: ({ value }) => {return `${value} Qty`}
        },
        {
            field: 'Stock',
            headerName: 'Status',
            editable: false,
            sortable: false, minWidth: 120, flex: 1, headerAlign: 'center', align: "center",
          
        },
        {
            field: 'Edit',
            headerName: 'Edit',
            editable: false,
            sortable: false, minWidth: 120, flex: 1,
            headerAlign: 'center', align: "center",
            renderCell: (params) => {
                return (
                <React.Fragment>
                    {    state.Roles.DeleteVendor    &&
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
                            }} IconComponent={BsThreeDotsVertical} labelId="">
                          
                           <MenuItem>  <UserDelete data={params.row}></UserDelete></MenuItem>
                           <MenuItem> <TiEdit /> Edit </MenuItem>
                           <MenuItem> <FaRegEyeSlash /> View</MenuItem>
                            
                            </Select>
                        </Box>
                    }
                </React.Fragment>
                )
            }

        },

    ];
     const rows = [
        {
            Id:1,
            ProductName:'HOT MINTS HYBRID',
            ProductImage:'https://i.ibb.co/C2Bx9CN/image-29.png',
            Category:"EDIBLES",
            Price:140.00,
            Quantity:100,
            Stock:"In Stock",
        },
        {
            Id:2,
            ProductName:'HOT MINTS HYBRID',
            ProductImage:'https://i.ibb.co/C2Bx9CN/image-29.png',
            Category:"EDIBLES",
            Price:120.00,
            Quantity:40,
            Stock:"In Stock",
        }
     ]
    return (
        <div className='venderSection'>
            <div className="row">
                    <div className='col-12'>
                        <StatusBarCard/>
                    </div>
                    <div className='col-12'>
                        <dvi className='storelistcardWrapper'>
                          <div className='storelistcard'>
                            <div className='storeType'> <span>Store</span> <span>Delivery</span></div>
                            <h4 className='storelistcardName'>Vijay Nagar Store</h4>
                            <p className='storelistcardDesc'>Brainstorming brings team members' diverse experience into play.</p>
                          </div>
                          <div className='storelistcard'>
                            <div className='storeType'> <span>Store</span> <span>Delivery</span></div>
                            <h4 className='storelistcardName'>Good Weed NYC</h4>
                            <p className='storelistcardDesc'>Brainstorming brings team members' diverse experience into play.</p>
                          </div>
                          <div className='storelistcard'>
                            <div className='storeType'> <span>Store</span> <span>Delivery</span></div>
                            <h4 className='storelistcardName'> Ujjain</h4>
                            <p className='storelistcardDesc'>Brainstorming brings team members' diverse experience into play.</p>
                          </div>
                        </dvi>
                    </div>
                    <div className='col-12'>
                        <div className='venderHeroDiv'>
                            <div className='venderHeroDiv_card'>
                                <Areagraph/>
                            </div>
                            <div className='venderHeroDiv_card'>
                                <TotalSales/>
                            </div>
                            <div className='venderHeroDiv_card'>
                                <div className='coupon_card'>
                                    <h3 className='graphtitle'>Coupen Code</h3>
                                    <h4 className='coupen_total'>$ 90,000</h4>
                                    <div className='colorLine'>
                                        {
                                            [...Array(7)].map((e, i) => <span className="coupencolorBox" style={{backgroundColor:`${"#" + Math.floor(Math.random() * 16777215).toString(16)}`}} key={i}></span>)
                                        }
                                    </div>
                                    <div className='store_coupen_list'>
                                        <div className='locationList'>
                                            <div className='locationListItem'>
                                                <span className='locationName'> <span className='colorCircle' style={{backgroundColor:'#FF7F50'}}></span> New York</span>
                                                <span className='locationAmount'>$ 6,806</span>
                                            </div>
                                            <div className='locationListItem'>
                                                <span className='locationName'> <span className='colorCircle' style={{backgroundColor:'green'}}></span> New York</span>
                                                <span className='locationAmount'> $ 6,806</span>
                                            </div>
                                            <div className='locationListItem'>
                                                <span className='locationName'> <span className='colorCircle' style={{backgroundColor:'#00F0FF'}}></span> Phoenix</span>
                                                <span className='locationAmount'>$ 2000</span>
                                            </div>
                                            <div className='locationListItem'>
                                                <span className='locationName'> <span className='colorCircle' style={{backgroundColor:'#CCCCFF'}}></span> Chicago </span>
                                                <span className='locationAmount'>$ 1600</span>
                                            </div>
                                            <div className='locationListItem'>
                                                <span className='locationName'> <span className='colorCircle' style={{backgroundColor:'#40E0D0'}}></span> Philadelphia </span>
                                                <span className='locationAmount'>$ 806</span>
                                            </div>
                                            <div className='locationListItem'>
                                                <span className='locationName'> <span className='colorCircle' style={{backgroundColor:'red'}}></span> Los Angeles </span>
                                                <span className='locationAmount'>$ 566</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='venderHeroDiv_card'>
                                <Productstorelist title={"Top Sale Product"}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-4 mt-4 bg-white">
                        <Box
                            sx={{
                                width: '100%',
                                
                                '& .MuiDataGrid-columnHeaders': {
                                    backgroundColor: '#F9FAFC',
                                    color:'#5A5A5A'
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
                                    autoHeight
                                    initialState={{
                                        pagination: {
                                            paginationModel: {
                                                pageSize: 5,
                                            },
                                        },
                                    }}
                                    getRowId={(row) => row.Id}
                                    pageSize={pageSize}
                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                    rowsPerPageOptions={[5, 10, 20]}
                                    pagination
                                    disableRowSelectionOnClick
                                    disableColumnMenu
                                    disableColumnFilter
                                    disableColumnSelector
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
    )
}
export default Vendor