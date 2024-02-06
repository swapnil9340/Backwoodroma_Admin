import React, { useContext } from 'react'
import {SectionCard} from '../../molecules/SectionCard/Index'
import {Counterbox} from '../../molecules/Counterbox/Index'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Box from '@mui/material/Box';
import Createcontext from "../../Hooks/Context/Context"
import Eelete from "../Category/Delete";
import {  AiOutlineEyeInvisible } from 'react-icons/ai';
import { LuEye } from "react-icons/lu";
import Tooltip from '@mui/material/Tooltip';
import useStyles from '../../Style';
const UserProfile = () => {
    const classes= useStyles()
    const { state, dispatch } = useContext(Createcontext)
    const { typecounter, Settypecounter } = React.useState(false)
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
        },

    });
    const columns = [
        { field: 'name', headerName: 'Name', editable: false,  minWidth: 150,  headerClassName: 'super-app-theme--header', headerAlign: 'left', sortable:false },
        {
            field: 'categoryImages', headerName: 'categoryImages', minWidth: 220,type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => (
               <div className='categoryTableImg'><img src={params?.row?.categoryImages} alt={"category image"} /></div>
            )
        },
        {
            field: 'Status', headerName: 'Status', type: 'number',minWidth: 150,sortable:false, editable: false, headerClassName: 'super-app-theme--header', headerAlign: 'left', align:"left",
            renderCell: (params) => {
                if (params.formattedValue === "Active") {
                    return (
                        <Tooltip title="Active" enterDelay={300} leaveDelay={200} arrow placement="right-start">
                            <p
                                style={{ color: "#31B665 ", fontSize: 24, cursor: "pointer" }}
                                variant="contained"
                                color="primary"
                            >
                                <LuEye />
                            </p>
                        </Tooltip>
                    )
                }
                return (
                    <Tooltip title="Hide" enterDelay={300} leaveDelay={200} arrow placement="right-start">

                        <p
                            style={{ color: "red ", fontSize: 24, cursor: "pointer" }}
                            variant="contained"
                            color="primary"
                            
                        ><AiOutlineEyeInvisible /></p>
                    </Tooltip>

                )
            }
        },
        {
            field: 'Edit', headerName: 'Edit',minWidth: 150, type: 'button', editable: false, sortable:false, headerClassName: 'super-app-theme--header', headerAlign: 'rigth',align:"rigth",
            renderCell: (params) => (
                <>
                  { ( state.Roles.EditCategory || state.Roles.DeleteCategory) &&
                      
                    <Box
                        sx={{
                            "&.MuiBox-root":{
                               display:'flex',
                               justifyContent:'center',
                               alignItems:'center',
                               gap:'10px'
                            },
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
                        
                          { state.Roles.DeleteCategory && <Eelete data={params.row}></Eelete> }
                       

                     
                    </Box>
                  }  
                </>

            )
        },

    ];
    const rows = []
    console.log(typecounter)
  return (
    <div className='UserProfile'>
        <div className='UserProfileWrapper'>
            <div className='userDiscription'>
             
                  <div className='p-4'>
                    <div className='userCircle'>
                        <img src='https://i.ibb.co/DQ0Mc1Z/Ellipse-492.png' />
                    </div>
                    <h2 className='userName'>Harsh Jain</h2>
                    <div className='contact_info'>
                        <Counterbox padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'>harsh.jain121@gmail.com</Counterbox>
                        <Counterbox padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'>+91-8085789121</Counterbox>
                        <Counterbox padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'>DOB - 18-02-2000</Counterbox>
                        <Counterbox padding="3px 5px" color='rgba(81, 176, 157, 1)' size='14px' height='1.5' fontweight='500'>ID - CAJPJAU21M</Counterbox>
                    </div>
                    <div className='UsertotalcardWrapper'>
                        <SectionCard className='Usertotalcard'> 
                              <h4 className='UsertotalcardTitle'>Total Order</h4>
                            <Counterbox padding="8px 5px" color='rgba(0, 172, 79, 1)' size='28' height='42' fontweight='500'> hello wrold </Counterbox>
                        </SectionCard>
                        <SectionCard className='Usertotalcard'>
                             <h4 className='UsertotalcardTitle'>Total Reviews</h4>
                            <Counterbox padding="8px 12px" color='rgba(0, 172, 79, 1)' size='28' height='42' fontweight='500'> alskdjfhg </Counterbox>
                        </SectionCard>
                    </div>
                  </div>
              
            </div>
       
            <div className='userTable'>
                <SectionCard>
                   <div>
                      <div className='counterType'>
                        <span className={!typecounter ? 'selectedItem' : 'notselected'} onClick={()=>{Settypecounter(!typecounter)}}>Order Details</span>
                        <span className={typecounter ? 'selectedItem' : 'notselected'} onClick={()=>{Settypecounter(!typecounter)}}>Reviews</span>
                      </div>
                      <div>
                            <Box className={classes.DataTableBoxStyle}>
                                <ThemeProvider theme={CustomFontTheme}>
                                    <div style={{ width: '100%' }}>
                                    <DataGrid    rows={rows}
                                                    columns={columns} 
                                                    pageSize={pageSize}
                                                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                                                    rowsPerPageOptions={[ 10, 20]}
                                                    pagination
                                                    disableColumnMenu
                                                    disableColumnFilter
                                                    disableColumnSelector
                                                    className={classes.DataTableStyle}
                                                    autoHeight
                                        />
                                    </div>
                                </ThemeProvider>
                            </Box>
                      </div>
                   </div>

                </SectionCard>
            </div>
        </div>
    </div>
  )
}

export default UserProfile