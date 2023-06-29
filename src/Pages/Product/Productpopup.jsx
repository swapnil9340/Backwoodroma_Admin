import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Cookies from 'universal-cookie';
import Axios from "axios"
import Strain from "./ProductComponent/Strain"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ProductBrand from "./ProductComponent/ProductBrand"
import InputAdornment from '@mui/material/InputAdornment';
import ToggleButton from './ProductComponent/ToggleButton';
import ProductGiftVocher from './ProductComponent/ProductGiftVocher';
import Labresult from './ProductComponent/Labresult';
import Flavourpopup from "../Flavour/Flavourpopup"
import Createcontext from "../../Hooks/Context/Context"
import ProductCategory from './ProductComponent/ProductCategory';
import NetWeight from './ProductComponent/NetWeight';
import Checkbox from './ProductComponent/CheckBox';
import MultiImage from "./ProductComponent/Multimage"
import { useForm,  } from "react-hook-form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderWidth: "1px",
            borderColor: 'black',
        },
    },
}));

function BootstrapDialogTitle(props) {

}
export default function ProductPopUp(props) {
 
    const { handleSubmit} = useForm();
    const { state, dispatch } = useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [open, setOpen] = React.useState(false);
    const [discount, SetDiscount] = React.useState([])
    const [Taxs, SetTaxs] = React.useState([])
    const [store, Setstore] = React.useState([])
    const [Image, SetImage] = React.useState([])

    const [Flavours, SetFlavours] = React.useState([])

    // const [subType, setSubType] = React.useState("Active");

    const [error, seterror] = React.useState({
        Product_Name: "",
        Product_Description: "",
        quantity: "",
        prices: ""

    })
    const [massage, setmassage] = React.useState({
        Product_Name: "",
        Product_Description: "",
        quantity: "",
        prices: ""

    })
    // const min = 0;


    const [Product, SetProduct] = React.useState({
        Product_Name: "",
        Product_Description: "",
        quantity: "",
        prices: "",
        discount: "",
        tax: "",

        Brand_id: "",
        Multiple_Image: "",
        Product_Video: "",
        SKU: "",
        UPC: "",
        net_weight: "",
        strain: "N",
        Sub_Category: "",
        flavour_id: "",
        THC: "",
        CBD: "",
        CBN: "",
        lab_Result: "percentage",
        Stock: "In Stock",
        Status: "Active",
        Store_id: "",
        tag: "",
        DiscountedAmount: "",
        Product_Image: "",
        Allow_tax: "",
        Allow_discount: "",
        Additional_Description: "",
        taxedAmount: "",
        Alt_Text: "",
        Link: "",
        After_Coupoun_Price: "",
        After_GiftVoucher: "",
        SubTotal: "",
        Sub_Category_id: "",
        Claimed_Coupoun: "",
        GiftVoucher: "",
    })
    const handleChange = (event) => {
        var value = event.target.value;
        if (event.target.name === "SKU") {
            if (event.target.value.length <= 2) {


                SetProduct({
                    ...Product, [event.target.name]: value
                });

            }
        }
        else if (event.target.name === "UPC") {
            if (event.target.value.length <= 3) {

                SetProduct({
                    ...Product, [event.target.name]: value
                });

            }
        }
        else if (event.target.name === "prices") {
            if (event.target.value.length <= 5) {

                SetProduct({
                    ...Product, [event.target.name]: value
                });

            }
        }
        else if (event.target.name === "quantity") {
            if (event.target.value.length <= 3) {


                SetProduct({
                    ...Product, [event.target.name]: value
                });

            }
        }

        else {
            SetProduct({
                ...Product, [event.target.name]: value
            });
        }
        setmassage("")
        seterror("")

    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };




    React.useEffect(() => {
        Axios("https://backend.sweede.net/AdminPanel/ActiveDiscount/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetDiscount(response.data.data)
            SetProduct(Product => ({ ...Product, discount: response.data.data.id }))


        })
        Axios("https://backend.sweede.net/AdminPanel/ActiveTax/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            SetTaxs(response.data.data)
            SetProduct(Product => ({ ...Product, tax: response.data.data[0]?.id }))

        })
        Axios("https://backend.sweede.net/AdminPanel/ActiveStores/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {
            try {
                Setstore(response.data.data)

                SetProduct(Product => ({ ...Product, Store_id: response.data.data[0]?.id }))
            } catch (error) {
                console.trace(error)
            }
        })



        Axios("https://backend.sweede.net/AdminPanel/Get-Flavours/", {

            headers: {
                'Authorization': `Bearer ${token_data}`
            }

        }).then(response => {

            SetFlavours(response.data)
            SetProduct(Product => ({ ...Product, flavour_id: response.data[0]?.id }))


        })


    }, [token_data, state])


    const formdata = new FormData();
    formdata.append('Product_Name', Product.Product_Name);
    formdata.append('Product_Description', Product.Product_Description);
    formdata.append('discount', Product.discount);
    formdata.append('tax', Product.tax);
    formdata.append('Claimed_Coupoun', Product.Claimed_Coupoun);
    formdata.append('GiftVoucher', Product.GiftVoucher);
    formdata.append('quantity', Product.quantity);
    formdata.append('prices', Product.prices);
    Image.forEach(image =>{
        formdata.append('Multiple_Image',image);
    })

    // formdata.append('Multiple_Image',Image);
    formdata.append('Product_Video', "");
    formdata.append('SKU', Product.SKU);
    formdata.append('UPC', Product.UPC);
    formdata.append('net_weight_id', Product.net_weight);
    formdata.append('flavour_id', Product.flavour_id);
    formdata.append('THC', Product.THC);
    formdata.append('CBD', Product.CBD);
    formdata.append('CBN', Product.CBN);
    formdata.append('lab_Result', Product.lab_Result);
    formdata.append('Stock', Product.Stock);
    formdata.append('strain', Product.strain);
    formdata.append('Sub_Category', Product.Sub_Category);
    formdata.append('Status', Product.Status);
    formdata.append('Store_id', Product.Store_id);
    formdata.append("tag", "");
    formdata.append('DiscountedAmount', "");
    formdata.append('Product_Image', "")
    formdata.append('Allow_tax', "")
    formdata.append('Allow_discount', "")
    formdata.append('Additional_Description', "")
    formdata.append('taxedAmount', "")
    formdata.append('Alt_Text', "gjhbkk")
    formdata.append('Link', "")
    formdata.append('After_Coupoun_Price', "")
    formdata.append('After_GiftVoucher', "")
    formdata.append('SubTotal', "")
    formdata.append('Sub_Category_id', Product.Sub_Category_id)
    formdata.append('Brand_id', Product.Brand_id)


    const Submit = () => {


        const config = {
            headers: { Authorization: `Bearer ${token_data}` }
        };


        Axios.post(
            'https://backend.sweede.net/AdminPanel/Add-Product/',
            formdata,
            config
        ).then(() => {
            setOpen(false);
            dispatch({ type: 'api', api: true })
        }).catch(
            function (error) {
                for (const [key, value] of Object.entries(error.response.data)) {
                    switch (key) {
                        case "Product_Name":
                            setmassage({ Product_Name: value })
                            seterror({ Product_Name: "red" })
                            break
                        case "Product_Description":
                            setmassage({ Product_Description: value })
                            seterror({ Product_Description: "red" })
                            break
                        case "quantity":
                            setmassage({ quantity: value })
                            seterror({ quantity: "red" })
                            break
                        case "prices":
                            setmassage({ prices: value })
                            seterror({ prices: "red" })
                            break
                        default:
                            return 'foo';
                    }
                }
            }
        )
    };


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                + Add Product
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "90%",
                            height: "90%",
                            maxWidth: "none",  // Set your width here
                            border: "1px solid #31B665",
                            borderRadius: "15px",

                        },
                    },
                }}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <div className='container-fluid  text-wrap'>
                        <div className='row '>
                            <div className='col-12 Add_State center border'>
                                <div className="col  ">
                                    <p className='product_title'> Product </p>
                                </div>
                            </div>
                            <div className='col-12 Add_Category_pop mt-2 ml-2 ' >
                                <div className='col-sm-7  top  gap  border p-3' >

                                    <div className='col  product_Col mt-2'>
                                        <div className='col-2   mt-2 mb-2'>
                                            <label className='prod_label'>
                                                Product Name:
                                            </label>
                                        </div>
                                        <div className='col-8 gap'>
                                            <TextField

                                                placeholder='Add Product' id="outlined-basic" name='Product_Name' variant="outlined" value={Product.Product_Name} style={{ minWidth: "72%", fontSize: 15 }}
                                                onChange={handleChange}

                                                InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                                label={massage.Product_Name}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: error.Product_Name,
                                                            height: 55,
                                                        },
                                                    },
                                                    "& label": {
                                                        fontSize: 13,
                                                        color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            color: "red",
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col product_Col mt-2 '>
                                        <div className='col-2 mt-2 mb-2'>
                                            <label className='prod_label'>
                                                Product Description:
                                            </label>
                                        </div>
                                        <div className='col-8 gap'>
                                            <TextField placeholder='Add  Product Description' id="outlined-basic" variant="outlined" name='Product_Description' value={Product.Product_Description} style={{ width: "100%", fontSize: 15 }}
                                                onChange={handleChange}
                                                InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                                label={massage.Product_Description}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: error.Product_Description,
                                                            height: 55,
                                                        },
                                                    },
                                                    "& label": {
                                                        fontSize: 13,
                                                        color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            color: "red",
                                                        }
                                                    }
                                                }}

                                            />
                                        </div>
                                    </div>
                                    <div className='col-12 background  product_main_img '>
                                        <div className='col-2  p-2'>
                                            <label className='prod_label my-2'>
                                                Product Image:
                                            </label>
                                        </div>

                                        {/* <div className='col justify product_image_Col Add_Category center'> */}

                                        <div className='col-10 my-4 '  >
                                            

                                            <MultiImage
                                            Image={Image}
                                             SetImage={SetImage}
                                            ></MultiImage>

                                        </div>
                                       
                                    </div>

                                    <div className='col-12 product_Col background py-4'>
                                        {/* <div className='col  product_Col top '> */}
                                        <div className='col-2   my-auto'>
                                            <label className='label sku_label my-2 '>
                                                SKU ?
                                            </label>
                                        </div>
                                        <div className='col-2 mt-2 mb-2'>
                                            <TextField

                                                type='number' placeholder='SKU ?' id="outlined-basic" variant="outlined" name='SKU' value={Product.SKU} style={{ minWidth: 100, fontSize: 15 }}
                                                onChange={handleChange}
                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"> </InputAdornment>,
                                                    style: { fontSize: 14 }


                                                }}


                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {

                                                            height: 55,
                                                        },
                                                    },
                                                    "& label": {
                                                        fontSize: 13,
                                                        color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            color: "red",
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                        {/* </div> */}
                                        {/* <div className='col  product_Col top'> */}
                                        <div className='col-2  my-auto'>
                                            <label className='label sku_label  my-2 '>
                                                UPC  ?
                                            </label>
                                        </div>
                                        <div className='col-2 mt-2 mb-2'>
                                            <TextField placeholder='UPC ?' id="outlined-basic" variant="outlined" name='UPC' value={Product.UPC} style={{ minWidth: 100, fontSize: 15 }}
                                                onChange={handleChange}

                                                InputProps={{
                                                    startAdornment: <InputAdornment position="start"> </InputAdornment>,
                                                    style: { fontSize: 14 }
                                                }}


                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {

                                                            height: 55,
                                                        },
                                                    },
                                                    "& label": {
                                                        fontSize: 13,
                                                        color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            color: "red",
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    <p className='product_title '>  Pricing</p>
                                    <div className='col-12 d-flex product_pop_main_col'>


                                        <div className='col-2 my-auto'>
                                            <label className='label sku_label tax_label'>
                                                prices:
                                            </label>
                                        </div>
                                        <div className='col-2  mt-2 mb-2'>
                                            <TextField placeholder='Price' id="outlined-basic" variant="outlined" name='prices' value={Product.prices} style={{ minWidth: 100, fontSize: 15 }}
                                                onChange={handleChange}
                                                InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                                label={massage.prices}
                                                sx={{
                                                    '& .MuiOutlinedInput-root': {
                                                        '& fieldset': {
                                                            borderColor: error.prices,
                                                            height: 55,
                                                        },
                                                    },
                                                    "& label": {
                                                        fontSize: 13,
                                                        color: "red",
                                                        "&.Mui-focused": {
                                                            marginLeft: 0,
                                                            color: "red",
                                                        }
                                                    }
                                                }}

                                            />
                                        </div>


                                        <div className='col-2 my-auto'>
                                            <label className='label sku_label  tax_label'>
                                                Discount:
                                            </label>
                                        </div>
                                        <div className='col-2  mt-2 mb-2'>
                                            <Select
                                                name='discount'
                                                value={Product.discount}
                                                onChange={handleChange}

                                                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 120, fontSize: 15, }}>
                                                {
                                                    discount.map((data, index) => {
                                                        return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.Discount_type}</MenuItem>)
                                                    })
                                                }

                                            </Select>
                                        </div>

                                        <div className='col-2 my-auto'>
                                            <label className='label sku_label tax_label'>
                                                Tax:
                                            </label>
                                        </div>
                                        <div className='col-2  mt-2 mb-2'>
                                            <Select
                                                name='tax'
                                                onChange={handleChange}
                                                value={Product.tax}
                                                displayEmpty

                                                inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 120, fontSize: 15 }}>
                                                <MenuItem style={{ fontSize: 15 }}>
                                                    <em>No Tax</em>
                                                </MenuItem>
                                                {
                                                    Taxs.map((data, index) => {
                                                        return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.tax_type}</MenuItem>)
                                                    })
                                                }

                                            </Select>
                                        </div>


                                    </div>
                                    <div className='col background p-4'>
                                        <div className='col-12  product_price'>
                                            <p className='product_title'> Product weight / Flavour</p>
                                        </div>
                                        <div className='col-12  product_Col top '>
                                            <NetWeight Product={Product} SetProduct={SetProduct}></NetWeight>
                                            <div className='col-2   my-auto'>
                                                <label className='label sku_label'>
                                                    Flavour Type:
                                                </label>
                                            </div>
                                            <div className='col-2 Weight_Type mt-2 mb-2'>
                                                <Select
                                                    value={Product.flavour_id}
                                                    name='flavour_id'
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    size='small'
                                                    inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 120, fontSize: 15 }}>
                                                    <MenuItem style={{ fontSize: 15 }}>
                                                        <em><Flavourpopup></Flavourpopup></em>
                                                    </MenuItem>
                                                    {
                                                        Flavours.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.flavour_Name}</MenuItem>)
                                                        })
                                                    }
                                                </Select>
                                            </div>


                                            {/* <div className='btn cat_pop_btn'  style={{marginLeft:"12px"}} >
                                                            <Flavourpopup></Flavourpopup>
                                                        </div>
                                                   
                                                */}

                                            {/* </div> */}

                                        </div>


                                    </div>
                                    <div className='col-12 product_Col background p-4'>
                                        <div className='col  product_Col top'>
                                            <div className='col-2   my-auto'>
                                                <label className='label sku_label'>
                                                    Quantity:
                                                </label>
                                            </div>
                                            <div className='col-8'>
                                                <TextField type="number" placeholder='10 gm' id="outlined-basic" variant="outlined" name='quantity' value={Product.quantity} style={{ minWidth: "50%", fontSize: 15 }}
                                                    onChange={handleChange}
                                                    InputProps={{ startAdornment: <InputAdornment position="start"> </InputAdornment>, style: { fontSize: 14 } }}
                                                    label={massage.quantity}
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            '& fieldset': {
                                                                borderColor: error.quantity,
                                                                height: 55,
                                                            },
                                                        },
                                                        "& label": {
                                                            fontSize: 13,
                                                            color: "red",
                                                            "&.Mui-focused": {
                                                                marginLeft: 0,
                                                                color: "red",
                                                            }
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-12   background p-4'>
                                        <div className='col-12 Sku   '>
                                            <p className='product_title'>
                                                Lab Result
                                            </p>
                                        </div>
                                      <form onSubmit={handleSubmit(Submit)}>
                                      <div className=' col-12 product_Col lab_res'>
                                            <div className='col-2'>
                                                <label className=''>
                                                    THC:
                                                </label>
                                                <TextField 
                                              
                                                id="outlined-basic" type="number" variant="outlined" name="THC" value={Product.THC} style={{ fontSize: 15, minWidth: 90 }}
                                              
                                                   onChange={(e) => {
                                                    const min = 0;
                                                    const max = 2;
                                                     console.log(min ,  max , e.target.value)
                                                    var value = parseInt(e.target.value);
                                          
                                                    if (value === max) value = max;
                                                    if (value === min) value = min;
                                          
                                                    SetProduct({
                                                        ...Product, [e.target.name]: value
                                                    });
                                                  }}
                                                 
                                                    />
                                            </div>
                                            <div className='col-2'>
                                                <label className='' style={{ marginLeft: "4px" }}>
                                                    CBD:
                                                </label>
                                                <TextField id="outlined-basic" variant="outlined" type="number" name='CBD' value={Product.CBD} style={{ fontSize: 15, minWidth: 90, marginLeft: "4px" }}
                                                    onChange={handleChange} />
                                            </div>
                                            <div className='col-2'>
                                                <label className='' style={{ marginLeft: "4px" }}>
                                                    CBN:
                                                </label>
                                                <TextField id="outlined-basic" variant="outlined" type="number" name='CBN' value={Product.CBN} style={{ fontSize: 15, minWidth: 90, marginLeft: "4px" }}
                                                    onChange={handleChange} />
                                            </div>
                                            <div className='col-4 mt-4'>
                                                <Labresult Product={Product} SetProduct={SetProduct} ></Labresult>
                                            </div>
                                        </div>
                                      </form>
                                    </div>

                                    <div className='col background p-4'>
                                        <div className='col-10  product_price  '>
                                            <p className='product_title'>
                                                Store Details
                                            </p>
                                        </div>

                                        <div className='col  product_Col  top  '>
                                            <div className='col-2 '>
                                                <label className='sku_label'>
                                                    Store Name:
                                                </label>
                                            </div>
                                            <div className='col-8'>
                                                <Select
                                                    value={Product.Store_id}
                                                    name="Store_id"
                                                    onChange={handleChange}
                                                    displayEmpty
                                                    size='small'
                                                    inputProps={{ 'aria-label': 'Without label' }} style={{ minWidth: 120, fontSize: 15 }}>
                                                    <MenuItem style={{ fontSize: 15 }}>
                                                        <em>Select Store Name</em>
                                                    </MenuItem>
                                                    {
                                                        store.map((data, index) => {
                                                            return (<MenuItem value={data.id} style={{ fontSize: 15 }} key={index}>{data.Store_Name}</MenuItem>)
                                                        })
                                                    }
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col  p-4'>

                                        <Checkbox Product={Product} SetProduct={SetProduct}></Checkbox>

                                    </div>

                                </div>
                                <div className='col-sm-5 top p-4' >
                                    <div className='col   Store'>
                                        <label className=''>
                                            Show in Online Store:
                                        </label>
                                        <div className='col Stack ' >
                                            <ToggleButton Product={Product} SetProduct={SetProduct} />
                                        </div>
                                    </div>
                                    <div className='col-12  top border '>
                                        <Strain Product={Product} SetProduct={SetProduct}></Strain>
                                    </div>

                                    <div className=' top'>
                                        <ProductCategory Product={Product} SetProduct={SetProduct}></ProductCategory>
                                    </div>
                                    <div className='col top'>
                                        <ProductBrand Product={Product} SetProduct={SetProduct} ></ProductBrand>
                                    </div>
                                    <div className='col top '>
                                        <ProductGiftVocher Product={Product} SetProduct={SetProduct} ></ProductGiftVocher>
                                    </div>
                                </div>


                            </div>





                            <div className='col-12 center top' >
                                <button className='btn Sub_button' autoFocus onClick={Submit} >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ color: "#31B665" }} autoFocus onClick={handleClose}>
                        Exit
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}