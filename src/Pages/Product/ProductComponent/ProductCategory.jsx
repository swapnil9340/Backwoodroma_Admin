import React from 'react'
import { Select, MenuItem } from '@mui/material';
import axios from "axios"
import Cookies from 'universal-cookie';

export default function ProductCategory({ Product, SetProduct }) {

    const [Category, SetCategory] = React.useState([])

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
    }, [SetProduct, token_data, Product.Sub_Category_id])


    function myFunction(e) {
        console.log(e.target.value)
        // var checkBox = document.getElementById("myCheck");
        // var text = document.getElementById("text");
        // if (checkBox.checked == true){
        //   text.style.display = "block";
        // } else {
        //    text.style.display = "none";
        // }
    }
    var show = true;
  
    function myFunction(data) {
console.log(data)
        var checkBoxes = 
            document.getElementById(data);

        if (show) {
            checkBoxes.style.display = "block";
            show = false;
        } else {
            checkBoxes.style.display = "none";
            show = true;
        }
 console.log(data)
    }




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
                        <div className='col' >
                            <div className="Product_category">
                                {
                                    Category.map((data, index) => {
                                        return (

                                            <>
                                              <div>
                                                  <input value={data.id} type="checkbox" id="myCheck" onClick={myFunction(data.name)} key={data.id} />
                                                <label htmlFor="myCheck">{data.name}</label>

                                              </div>
                                                <div id="JDF">
                                                    <label for="first">
                                                        <input type="checkbox" id="first" />
                                                        checkBox1
                                                    </label>

                                                </div>
                                                {/* <p id="text" style={{display:"none"}}>Checkbox is CHECKED!</p> */}

                                            </>
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
