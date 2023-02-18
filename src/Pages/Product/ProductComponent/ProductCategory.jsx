import React from 'react'
import { Select , MenuItem } from '@mui/material';
import axios from "axios"
import Cookies from 'universal-cookie';

export default function ProductCategory({ Product, SetProduct }) {
  
    const [Category ,  SetCategory] = React.useState([])
    
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    React.useEffect(() => {
        axios("http://34.201.114.126:8000/AdminPanel/ActiveCategory/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetCategory(response.data.data)
            // console.log(response.data.data[0].name)
           
            // if (Product.Sub_Category_id === "")
            // SetProduct(Product => ({ ...Product, Sub_Category_id: response.data[0].id }))
        })
    },[SetProduct,token_data,Product.Sub_Category_id])

    const handleChange = (event) => {
        const value = event.target.value;
        SetProduct({
            ...Product, [event.target.name]: value
        });
    };

  return (
    <div>
    <div className='col background'>
        <div className='col-10  center '>
            <label className=' '>
              Category
            </label>
            <div className='col justify  Add_Category center'>
                <div className='col-2' >
                    {
                        Category.map((data,index)=>{

                            return(
                                <Select
                            name='Sub_Category_id'
                            onChange={handleChange}
                            value={data.name}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 190, fontSize: 15, background: "#AAAAAA" }}>
                           {/* {
                                Category.map((data, index) => {
                                    return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.name}</MenuItem>)
                                })
                            } 
     */}
                        </Select>

                            )




                            
                        })
                    }
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
