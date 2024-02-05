import React , {useContext} from 'react'
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import axios from "axios";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Select from '@mui/material/Select';
import NewsSubCategoryEdit from "./EditSubCategory"
import Createcontext from "../../../Hooks/Context/Context"
import DeleteSubCategory from "./DeleteSubCategory"
import AddNewsCategory from "./AddSubCategory"
import useStyles from '../../../Style'
export default function NewsSubCategory() {
    const classes = useStyles()
    const { state} = useContext(Createcontext)
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
    const [pageSize, setPageSize] = React.useState(10)

    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        const cookies = new Cookies();
        const token_data = cookies.get('Token_access')
        axios("https://api.cannabaze.com/AdminPanel/Get-NewsSubCategory", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data.data)

        })
    }, [state])
    
    const columns = [
        { field: 'name', headerName: 'Name', maxWidth: 150, minWidth: 80, flex: 1,sortable:false, editable: true, headerClassName: 'super-app-theme--header',headerAlign: 'left', align:"", },
        { field: 'category_name', headerName: 'News Category', type: 'text',sortable:false, editable: true, maxWidth: 150, minWidth: 110, flex: 1, headerClassName: 'super-app-theme--header',headerAlign: 'left', align:"left", },
        {
            field: 'Edit', headerName: 'Edit', type: 'button',sortable:false, headerClassName: 'super-app-theme--header', cellClassName: 'Edit',maxWidth: 150, minWidth: 110, flex: 1,headerAlign: 'center', align:"center",
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
                           <NewsSubCategoryEdit data={params.row} ></NewsSubCategoryEdit>
                       <DeleteSubCategory data={params.row}></DeleteSubCategory> 
                        </Select>
                    </Box>
                </>

            )


        }
    ]

    const rows = totel
return (
   
        <div className='row'>

          
      

                <div className='col-12 Add_Category m-2 mt-5 mb-5'>
                    <div className="col"> <h2>News Sub Category</h2></div>
                    <div className="col " >  <span> <h2> <AddNewsCategory></AddNewsCategory></h2></span></div>
                </div>

                <div className='col-12' >
                    <Box className={classes.DataTableBoxStyle} >
                        <ThemeProvider theme={CustomFontTheme}>
                            <div style={{ height: 400, width: '100%', }}>
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
