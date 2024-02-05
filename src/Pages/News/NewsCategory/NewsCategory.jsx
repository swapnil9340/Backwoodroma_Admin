import React, { useEffect,useContext } from 'react'
import Createcontext from "../../../Hooks/Context/Context"
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axios from "axios"
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import { BsThreeDotsVertical } from 'react-icons/bs';
import useStyles from '../../../Style';
import Select from '@mui/material/Select';
import AddNewsCategory  from "./AddNewsCategory"
import NewsCategoryEditbox from "./EditNewsCategory"
import NewsCategoryDelete  from "./DelectnewsCategory"
export default function NewsCategory(props) {
const classes = useStyles()
    const { state} = useContext(Createcontext)
    const [pageSize, setPageSize] = React.useState(10)
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


        }
    });
    
    const [totel, setTotal] = React.useState([])  
    useEffect(() => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')

        axios("https://api.cannabaze.com/AdminPanel/Get-NewsCategory/", {

        headers: {
            'Authorization': `Bearer ${token_data}`
        }
    }).then(response => {

        setTotal([...response.data])

    })

    },[state])
    const columns = [
        { field: 'name', headerName: 'Name', editable: true, maxWidth: 150, minWidth: 110,sortable:false, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left', },
        {
            field: 'Edit', headerName: 'Edit', type: 'button', editable: false,maxWidth: 150,sortable:false, minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header', headerAlign: 'left',
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
                           <NewsCategoryEditbox data={params.row}></NewsCategoryEditbox>
                           <NewsCategoryDelete data={params.row}></NewsCategoryDelete>
                        </Select>
                    </Box>
                </>

            )
        },

    ];
    const rows = totel

    return (
            <div className='row'>
                    <div className='col-12 Add_Category m-2 mt-5 mb-5'>
                        <div className="col"> <h2>News Category
                        </h2></div>
                        <div className="col" >   <span>{<AddNewsCategory></AddNewsCategory>}</span> </div>
                    </div>
                    <div className='col-12'>
                        <Box className={classes.DataTableBoxStyle}>
                            <ThemeProvider theme={CustomFontTheme}>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid rows={rows} columns={columns} 
                                     disableColumnMenu
                                     disableColumnFilter
                                     disableColumnSelector
                                     className={classes.DataTableStyle}
                                     pageSize={pageSize}
                                     onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                     rowsPerPageOptions={[ 10, 20]}
                                     pagination
                                    />
                                </div>
                            </ThemeProvider>
                        </Box>
                    </div>
            </div>
    )
}
