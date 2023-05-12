import * as React from "react"
import axios from "axios"
import Cookies from 'universal-cookie';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function ProductBrand({ Product, SetProduct }) {

    const [Brand, SetBrand] = React.useState([])
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')

    React.useEffect(() => {
        axios("http://backend.sweede.net/AdminPanel/ActiveBrand/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }
   
        }).then(response => {
            SetBrand(response.data.data)
            if(Product.Brand_id==="")
            SetProduct(Product => ({ ...Product, Brand_id: response.data.data[0].id }))

        })



    },[SetProduct,token_data,Product.Brand_id])

    const handleChange = (event) => {
        const value = event.target.value;
        SetProduct({
            ...Product, [event.target.name]: value
        });



    };

    return (
        <div>
            <div className='col background p-4'>
                <div className='col-10   '>
                    <label className='product_title'>
                        Brand
                    </label>
                    <div className='col justify  Add_Category center'>
                        <div className='col-2' >
                            <Select
                                name='Brand_id'
                                onChange={handleChange}
                                value={Product.Brand_id}
                                displayEmpty
                                size="small"
                                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 120, fontSize: 15, }}>
                                <MenuItem style={{ fontSize: 15 }}>
                                    <em>No Tax</em>
                                </MenuItem>
                                {
                                    Brand.map((data, index) => {
                                        return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.name}</MenuItem>)
                                    })
                                }

                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}