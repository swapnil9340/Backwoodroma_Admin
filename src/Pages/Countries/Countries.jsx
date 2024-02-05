import React, { useContext } from 'react'
import Cookies from 'universal-cookie';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import CountriesPopup from "./CountriesPopUp"
import axios from "axios";
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSnackbar } from 'notistack';
import { AiFillEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import CountryEdit from "./CountryEdit"
import Createcontext from "../../Hooks/Context/Context"
import DeleteCountry from "../Countries/DeleteCountry"
import Tooltip from '@mui/material/Tooltip';
import useStyles from '../../Style';
export default function Countries() {
    const { state, dispatch } = useContext(Createcontext)
    const { enqueueSnackbar } = useSnackbar();
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
    const classes = useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = React.useState([])
    React.useEffect(() => {
        axios("https://api.cannabaze.com/AdminPanel/Get-Country", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            setTotal(response.data)

        })
    }, [token_data, state])

    const Submit = (params) => {
        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };
        const data = {
            "id": params.row.id,
            "CountryName": params.row.CountryName.toUpperCase(),
            "Status": params.row.Status === "Active" ? "Hide" : "Active"
        }
        axios.post(
            `https://api.cannabaze.com/AdminPanel/update-Country/${params.row.id}`,
            data,
            config
        ).then(() => {

            dispatch({ type: 'api', api: true })
            enqueueSnackbar('Edit Countries success !', { variant: 'success' });
        }).catch(
            function (error) {
                return Promise.reject(error)
            }
        )
    };


    const columns = [
        { field: 'CountryName', headerName: 'Country', maxWidth: 150, minWidth: 110, flex: 1, editable: false,sortable:false, headerClassName: 'super-app-theme--header' },
        {
            field: 'Status', headerName: 'Status', maxWidth: 150, minWidth: 110, flex: 1, type: 'number', editable: false, sortable:false,headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center",
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
                            ><AiFillEye autoFocus /> </p>
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
                        ><AiOutlineEyeInvisible autoFocus /></p>
                    </Tooltip>

                )
            }
        },
        {
            field: 'Edit', headerName: 'Edit', type: 'button', maxWidth: 150, minWidth: 110, flex: 1,sortable:false, editable: true, headerClassName: 'super-app-theme--header', headerAlign: 'center', align: "center",
            renderCell: (params) => (
                <>
                    <Box
                        sx={{

                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: '#E1FFED',
                            },






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
                            <CountryEdit data={params.row} ></CountryEdit>
                            <DeleteCountry data={params.row}></DeleteCountry>
                        </Select>
                    </Box>
                </>

            )

        },


    ];

    const rows = totel
    return (
     
            <div className='row'>


             

                    <div className='col-12 Add_Category'>
                        <div className="col m-4"> <h2>  Countries </h2></div>
                        <div className="col  m-4" >  <span> <h2><CountriesPopup></CountriesPopup></h2></span></div>
                    </div>
                    <div className='col-12' >

                        <Box className={classes.DataTableBoxStyle}>
                            <ThemeProvider theme={CustomFontTheme}>
                                <div style={{ height: 400, width: '100%', }}>
                                    <DataGrid rows={rows} columns={columns} 
                                     disableColumnMenu
                                     disableColumnFilter
                                     disableColumnSelector
                                     className={classes.DataTableStyle}
                                    />
                                </div>
                            </ThemeProvider>
                        </Box>

                    </div>
                </div>



    )
}
