
import React, { useEffect, useState } from "react";
import axios from "axios"
import Createcontext from "../Hooks/Context/Context"
import Cookies from 'universal-cookie';
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdArrowDownward } from "react-icons/md";
import { SlSocialDropbox } from "react-icons/sl";
import { RiGroupLine } from "react-icons/ri";
export default function StatusBarCard() {
    const { state, dispatch } = React.useContext(Createcontext)
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    let date = new Date()
    const TodayDate = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate()
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    const SecondLastStartDate = currentYear - 2;
    const [totel, setTotal] = useState()
    const [Vendor, setVendor] = useState()
    const [TotalSale, SetTotalSale] = useState()
    const [Totalorder, Setorder] = useState()
    const [Product, SetProduct] = useState()
    const [Customer, SetCustomer] = useState()
    console.log(state.datesSelect)
    useEffect(() => {


        axios.post("https://api.cannabaze.com/AdminPanel/TotalStore/",
            {
                "SelectTime": "ThisYear",
                "StartDate": '2024-01-01',
                "EndDate": TodayDate,
                "LastStartDate": `${lastYear}-01-01`,
                "EndStartDate": `${lastYear}-12-01`,
                "SecondLastStartDate": `${SecondLastStartDate}-01-01`,
                "SecondLastEndDate": `${SecondLastStartDate}-12-01`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                setTotal(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/VendorCard/",
            {
                "SelectTime": "ThisYear",
                "StartDate": '2024-01-01',
                "EndDate": TodayDate,
                "LastStartDate": `${lastYear}-01-01`,
                "EndStartDate": `${lastYear}-12-01`,
                "SecondLastStartDate": `${SecondLastStartDate}-01-01`,
                "SecondLastEndDate": `${SecondLastStartDate}-12-01`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                setVendor(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/TotalSalesCard/",
            {
                "SelectTime": "ThisYear",
                "StartDate": '2024-01-01',
                "EndDate": TodayDate,
                "LastStartDate": `${lastYear}-01-01`,
                "EndStartDate": `${lastYear}-12-01`,
                "SecondLastStartDate": `${SecondLastStartDate}-01-01`,
                "SecondLastEndDate": `${SecondLastStartDate}-12-01`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetTotalSale(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/TotalOrderCard/",
            {
                "SelectTime": "ThisYear",
                "StartDate": '2024-01-01',
                "EndDate": TodayDate,
                "LastStartDate": `${lastYear}-01-01`,
                "EndStartDate": `${lastYear}-12-01`,
                "SecondLastStartDate": `${SecondLastStartDate}-01-01`,
                "SecondLastEndDate": `${SecondLastStartDate}-12-01`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                Setorder(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/ProductDashBoardCard/",
            {
                "SelectTime": "ThisYear",
                "StartDate": '2024-01-01',
                "EndDate": TodayDate,
                "LastStartDate": `${lastYear}-01-01`,
                "EndStartDate": `${lastYear}-12-01`,
                "SecondLastStartDate": `${SecondLastStartDate}-01-01`,
                "SecondLastEndDate": `${SecondLastStartDate}-12-01`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetProduct(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/CustomerDashBoardCard/",
            {
                "SelectTime": "ThisYear",
                "StartDate": '2024-01-01',
                "EndDate": TodayDate,
                "LastStartDate": `${lastYear}-01-01`,
                "EndStartDate": `${lastYear}-12-01`,
                "SecondLastStartDate": `${SecondLastStartDate}-01-01`,
                "SecondLastEndDate": `${SecondLastStartDate}-12-01`
            },
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetCustomer(response.data[0])

            })

    }, [token_data])
    return (

        <div className='dashboardTopCardWrapper'>
            <div className=' dashboardTopCard top' >


                <div className='col-12  d-flex align-items-center '>
                    <div className='col-6 Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <BsHandbag size={40} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Total Store'}</p>
                                <p className="Card_Total" >{totel?.TotalStore}</p>
                                <p className="card_hadding" >
                                    {totel?.Growth ? <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                        : <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>}
                                    <span style={{ color: !totel?.Growth ? "#00AC4F" : "#D0004B" }}>{totel?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex align-items-center '>
                    <div className='col-6 Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <HiOutlineUserGroup size={40} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "marginTop": '10px' }}>
                                <p className='card_hadding'>{'Vendor'}</p>
                                <p className="Card_Total" >{Vendor?.TotalStore}</p>
                                <p className="card_hadding" >
                                    {Vendor?.Growth ? <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                        : <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>}
                                    <span style={{ color: !Vendor?.Growth ? "#00AC4F" : "#D0004B" }}>{Vendor?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' dashboardTopCard top' >


                <div className='col-12  d-flex align-items-center '>
                    <div className='col-6 Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <img src="image/money-recive.png"></img>

                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Sales'}</p>
                                <p className="Card_Total" >${TotalSale?.TotalSales}</p>
                                <p className="card_hadding" >
                                    {TotalSale?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    {/* <span><MdArrowDownward size={18} color="#D0004B" /></span> */}
                                    <span style={{ color: TotalSale?.Growth ? "#00AC4F" : "#D0004B" }}>{TotalSale?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex align-items-center '>
                    <div className='col-6 Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <BsHandbag size={40} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Order'}</p>
                                <p className="Card_Total" >{Totalorder?.TotalOrder}</p>
                                <p className="card_hadding" >
                                    {!Totalorder?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    <span style={{ color: !Totalorder?.Growth ? "#00AC4F" : "#D0004B" }}> {Totalorder?.percentage}% </span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex align-items-center '>
                    <div className='col-6 Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <SlSocialDropbox size={40} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Product'}</p>
                                <p className="Card_Total" >{Product?.Totalproduct}</p>
                                <p className="card_hadding" >
                                    {!Product?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    <span style={{ color: !Product?.Growth ? "#00AC4F" : "#D0004B" }}>{Product?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' dashboardTopCard top' >


                <div className='col-12  d-flex align-items-center '>
                    <div className='col-6 Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <RiGroupLine size={40} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Customer'}</p>
                                <p className="Card_Total" >{Customer?.TotalCustomer}</p>
                                <p className="card_hadding" >
                                    {!Customer?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    {/* <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span> */}
                                    <span style={{ color: !Customer?.Growth ? "#00AC4F" : '#D0004B' }}>{Customer?.percentage}% </span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


    )
}
