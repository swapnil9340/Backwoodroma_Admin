import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import axios from "axios";
import Cookies from 'universal-cookie';
import Newspop from "./NewsPopup"
import NewsEdit from "./EditNews"
import Select from '@mui/material/Select';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Createcontext from "../../Hooks/Context/Context"
import DeleteNews from "./DeleteNews"
import useStyles from '../../Style';
import { SlSocialDropbox } from "react-icons/sl";
import {SectionCard} from '../../molecules/SectionCard/Index'

export default function News() {
    const { state } = useContext(Createcontext)
    const classes = useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [pageSize, setPageSize] = React.useState(10)

    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("https://api.cannabaze.com/AdminPanel/Get-News/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)


        })
    }, [token_data, state])

    const columns = [
       
        { field: 'Title', headerName: 'Post Title', editable: false, headerClassName: 'super-app-theme--header',  minWidth: 150,sortable:false, flex: 1},
        {
            field: 'created', headerName: 'Publish Date', editable: false, minWidth: 80, flex: 1,sortable:false, headerClassName: 'super-app-theme--header',
            renderCell: (params) => params.row.created.slice(0, 10)
        },
        { field: 'Status', headerName: 'Views', editable: false,  minWidth: 80, flex: 1,sortable:false, headerClassName: 'super-app-theme--header'},
        {
            field: 'Edit', headerName: 'Edit', editable: false, minWidth: 80, flex: 1,sortable:false, headerClassName: 'super-app-theme--header',
            renderCell: (params) => (
                <>
                { (state.Roles.EditBlogs || state.Roles.DeleteBlogs ) &&
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
                            {state.Roles.EditBlogs &&<NewsEdit data={params?.row}></NewsEdit>}
                           {state.Roles.DeleteBlogs && <DeleteNews data={params?.row}></DeleteNews>}
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
       
                <SectionCard>
                        <div className='d-flex justify-content-between align-items-center w-100 p-4'>
                            <h2 className='pagetitle'> <SlSocialDropbox color='#31B655' size={25}/> Latest News
                            </h2>
                           {state?.Roles?.AddBlogs && <span> <h2> <Newspop></Newspop></h2></span> }
                        </div>
                        <div className='col-12' >
                            <Box className={classes.DataTableBoxStyle} >
                                <ThemeProvider theme={CustomFontTheme}>
                                 
                                        <DataGrid rows={rows} columns={columns} checkboxSelection
                                            disableColumnMenu
                                            disableColumnFilter
                                            disableColumnSelector
                                            className={classes.DataTableStyle}
                                            pageSize={pageSize}
                                            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                            rowsPerPageOptions={[ 10, 20]}
                                            pagination
                                            autoHeight
                                        />
                                   
                                </ThemeProvider>
                            </Box>
                        </div>
                </SectionCard>
         
    );
}