import React from 'react'
// import { Select, MenuItem } from '@mui/material';
import axios from "axios"
import Cookies from 'universal-cookie';
// import { CheckBox } from '@mui/icons-material';

export default function ProductCategory({ Product, SetProduct }) {

    const [Category, SetCategory] = React.useState([])
    const [selectedValue, setSelectedValue] = React.useState(0);
    const [SubCategory, SetSubCatgory] = React.useState([])
    const [SubCagetoryselected, setSubCagetoryselected] = React.useState(0);

    const handleCheckboxChange = (event) => {
      
        setSelectedValue(parseInt(event.target.value));
        axios(`https://sweede.app/AdminPanel/register/FilterbyCategory/${event.target.value}`, {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {

            SetSubCatgory(response.data.data)
            // console.log(response.data.data[0].name)

            // if (Product.Sub_Category_id === "")
            // SetProduct(Product => ({ ...Product, Sub_Category_id: response.data[0].id }))
        })

    }

    const handleSubCategory = (event) =>{
 
        setSubCagetoryselected(parseInt(event.target.value));
        SetProduct({
                    ...Product, [event.target.name]: event.target.value
                });
    }



    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    React.useEffect(() => {
        axios("https://sweede.app/AdminPanel/register/ActiveCategory/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetCategory(response.data.data)
            // console.log(response.data.data[0].name)

            // if (Product.Sub_Category_id === "")
            // SetProduct(Product => ({ ...Product, Sub_Category_id: response.data[0].id }))
        })
    }, [SetProduct, token_data, Product.Sub_Category_id])





    // const handleChange = (event) => {
    //     const value = event.target.value;
    //     SetProduct({
    //         ...Product, [event.target.name]: value
    //     });
    // };

    return (
        <div>
            <div className='col background'>
                <div className='col-12  center '>
                    <label className='product_category'>
                        Category
                    </label>
                    <div className='col justify  Add_Category center'>
                        <div className='col-6' >
                            <div className="Product_Checkbox  ">

                                {
                                    Category.map((data, index) => {
                                        return (
                                            <div className='col-12 center'   key={index}>

                                                <div className='form-group-checkboxdev' key={index.id} >

                                                    <input
                                                    className='checkbox'
                                                        type="checkbox"
                                                        value={data.id}
                                                        checked={selectedValue === parseInt(data.id)}
                                                        onChange={handleCheckboxChange}
                                                    />

                                                    <span> {data.name} </span>
                                                </div>
                                                   
                                                {
                                                    selectedValue === data.id ?


                                                        SubCategory.map((data, index) => {
                                                            return (

                                                                <div className='col-8    Product_subCategory' key={index}>
                                                                   
                                                                    <input 
                                                                    name='Sub_Category_id'
                                                                        type="checkbox"
                                                                        value={data.id}
                                                                        checked={SubCagetoryselected === parseInt(data.id)}
                                                                        onChange={handleSubCategory}
                                                                    />
                                                                    <span>{data.name}</span>
                                                                </div>

                                                            )
                                                        })


                                                        : null
                                                }


<hr></hr>
                                            </div>
                                            
                                            
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

