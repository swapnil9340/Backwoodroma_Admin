import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import useStyles from '../../Style';
import { ThemeProvider , Box ,createTheme } from "@mui/material";
import { SlSocialDropbox } from "react-icons/sl";
import {useLocation} from 'react-router-dom'
import ReactApexChart from 'react-apexcharts';
import { FaArrowTrendDown , FaArrowTrendUp  } from "react-icons/fa6";
import Cookies from 'universal-cookie';
import {Counterbox} from '../../molecules/Counterbox/Index'
import axios from 'axios';
const TopLocation = () => {
    const location = useLocation()
    const classes= useStyles()
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [locationdata, setlocationdat]= React.useState([])
    const [topdata, settopdata]= React.useState({})
    const [locationgrapgdata, setlocationgrapgdata]= React.useState([])
    const [locationgrapglabel, setlocationgrapglabel]= React.useState([])
    const columns = [
   
      { field: 'ProductImage', headerName: 'Product Image', minWidth: 120, 
            renderCell:(params)=>{
                return <span className='image_circle_tsp'><img src={params.row.Image}/></span> 
            }
      },
      {
        field: 'ProductName',
        headerName: 'Product Name',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "left",
        align: "left",
      },
      {
        field: 'category',
        headerName: 'Category',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
      },
      {
        field: 'ProductPrice',
        headerName: 'Price',
        minWidth: 120,
        editable: false,
        sortable:false,
        flex:1,
        headerAlign: "center",
        align: "center",
        valueFormatter: ({ value }) => `$${value}` 
      },
      {
        field: 'ProductSalesCount',
        headerName: 'Sale Unite',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
        valueFormatter: ({ value }) => `${value} Qty` 
      },
      {
          field: 'Price',
          headerName: 'Total Sale Price',
          sortable:false,
          minWidth: 80,
          editable: false,
          flex:1,
          headerAlign: "center",
          align: "center",
          valueFormatter: ({ value }) => `$${value}` 
      },
      {
        field: 'StoreName',
        headerName: 'Store Name',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
    },
    {
        field: 'Stock',
        headerName: 'Status',
        sortable:false,
        minWidth: 80,
        editable: false,
        flex:1,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => {
            if (params.row.Stock === "IN Stock" ) {
              return <span className='statusactive'>In Stock</span>
            }else{
              return <span className='statusinactive'>Out Of stock</span>
            }
        },
    },
  
    ];
    const rows = location?.state
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
    useEffect((items)=>{
      axios.post('https://api.cannabaze.com/AdminPanel/PopularLocationGraphPage/',
      {"SelectTime":"Year","StartDate":"2024-01-07","EndDate":"2024-02-06","LastStartDate":"2023-02-07","EndStartDate":"2024-01-07"},
      {
        headers: {
          'Authorization': `Bearer ${token_data}`
        }
      }
      ).then((res)=>{
       
          let b= []
          let c= []
          let a = res.data.map((item , index)=>{
          
            return {
              ...item, id : index+1
            }
          })
    
         let lastdata =  a.pop()
         
         settopdata(lastdata)
       setlocationdat(a)
       setlocationgrapgdata(b)
       setlocationgrapglabel(c)
       a.forEach((item , index)=>{
        c.push(item.State)
        b.push(item.TotalSale)
    
      })
      })



    },[])
    const locationchart = {

      series: locationgrapgdata,
      options: {
        colors: ["#1E40AF", "#1D4ED8", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
        labels: locationgrapglabel ,
        chart: {
          type: 'polarArea',
        },
        stroke: {
          colors: ['#fff']
        },
        legend: {
          show: false,
          position: 'bottom'
        },
        fill: {
          opacity: 1
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              show: false,
              position: 'bottom'
            }
          }
        }]
      },
    };

  return (
    <div className=' my-4 '>
        <div className='py-4 section_card'>
            <div  className='d-flex gap-4 align-content-center px-4'> 
                <h3 className='pagetitle'><SlSocialDropbox color='#31B655' size={25}/> Popular Location </h3>
                <div>
                <Counterbox bgcolor={topdata.Growth ? 'rgba(81, 176, 157, 0.15)' : 'rgb(255 0 0 / 15%)' }  padding="3px 5px" color={topdata.Growth ? 'rgba(0, 172, 79, 1)' : 'rgb(255 0 0 / 90%)'} size='24px' height='1.2' fontweight='700' >
                {!topdata.Growth ? <FaArrowTrendDown /> : <FaArrowTrendUp /> }   {topdata.AllSale}
                </Counterbox>
                </div>
            </div>
            <div className='col-12'>
              <div className='alllocationlist'>  
                <div className='locationContent'>
                    <div className='locationList'>
                      <div className='locationListHeader'>
                        <span>No.</span>
                        <span>Location</span>
                        <span>Amount</span>
                      </div>

                      {
                        locationdata.map((item , index)=>{
                         return <div className='locationListItem' key={index}>
                          <span className='locationName'>{index + 1}</span>
                          <span className='locationName'>  {item.State}</span>
                          <span className='locationName'>{item.TotalSale}</span>
                          </div>
                        })
                      } 
                    </div>
                    <div className='locationGrapharea'>
                      <ReactApexChart options={locationchart.options} series={locationchart.series} type="polarArea" />
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default TopLocation