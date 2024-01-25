
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
    const [totel, setTotal] = useState()
    const [Vendor, setVendor] = useState()
    const [TotalSale, SetTotalSale] = useState()
    const [Totalorder, Setorder] = useState()
    const [Product, SetProduct] = useState()
    const [Customer, SetCustomer] = useState()

    //  Months//////////////////
    let date = new Date()
    const TodayDate = date.getFullYear() + "-" + date.getMonth() + 1 + "-" + date.getDate()
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;
    const monthStartDate = new Date(date.getFullYear(), date.getMonth(), 2).toISOString().split('T')[0]
    const monthlastDate = TodayDate
    const lastmonthStartDate = new Date(date.getFullYear(), date.getMonth() - 1, 2).toISOString().split('T')[0]
    const firstDayOfCurrentMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastmonthLastDate = new Date(firstDayOfCurrentMonth - 1).toISOString().split('T')[0]
    // End /////////////////
    //    Week Calculate //////////////////////// 
    const WeekCalculate = date.getDate() - date.getDay() + (date.getDay() === 0 ? - 6 : 1);
    const StartDateWeek = new Date(date.setDate(WeekCalculate)).toISOString().split('T')[0]
    // const previous =  new Date(date.setDate(date.getDate() - 1)).toISOString().split('T')[0]
    function GetpreviousWeekDate(d, j) {
        //   const today = new Date();
        const dayOfWeek = date.getDay();  // 0 (Sunday) to 6 (Saturday)
        const diff = dayOfWeek + d - j;
        const startOfPreviousWeek = new Date(date);
        startOfPreviousWeek.setDate(date.getDate() - diff);
        return startOfPreviousWeek.toISOString().split('T')[0];
    }

    let yesterday = new Date(TodayDate)
    yesterday.setDate(yesterday.getDate() - 1)



    const datedata = {
        "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
        "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : "",
        "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : "",
        "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : "",  //yesterday.toISOString().split('T')[0]
        "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : ""
    }
//    const k =  state?.CustomeEndDate &&  new Date(state?.CustomeEndDate)
//     console.log( state?.CustomeEndDate.toLocaleDateString("en-US").toISOString().split('T')[0])


    useEffect(() => {


        axios.post("https://api.cannabaze.com/AdminPanel/TotalStore/",
            datedata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                setTotal(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/VendorCard/",
            datedata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                setVendor(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/TotalSalesCard/",
            datedata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetTotalSale(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/TotalOrderCard/",
            datedata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                console.log(response.data[0])
                Setorder(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/ProductDashBoardCard/",
            datedata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetProduct(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/CustomerDashBoardCard/",
            datedata,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetCustomer(response.data[0])
            })

    }, [token_data, state.datesSelect])


    return (

        <div className='dashboardTopCardWrapper'>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex justify-content-center gap-4 '>
                    <div className=' Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <BsHandbag size={32} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Total Store'}</p>
                                <p className="Card_Total" >{totel?.TotalStore}</p>
                                <p className="card_hadding" >
                                    {!totel?.Growth ? <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                        : <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>}
                                    <span style={{ color: totel?.Growth ? "#00AC4F" : "#D0004B" }}>{totel?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex justify-content-center gap-4 '>
                    <div className=' Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <HiOutlineUserGroup size={32} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "marginTop": '10px' }}>
                                <p className='card_hadding'>{'Vendor'}</p>
                                <p className="Card_Total" >{Vendor?.TotalStore}</p>
                                <p className="card_hadding" >
                                    {!Vendor?.Growth ? <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                        : <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>}
                                    <span style={{ color: Vendor?.Growth ? "#00AC4F" : "#D0004B" }}>{Vendor?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex justify-content-center gap-4 '>
                    <div className=' Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <img src="image/money-recive.png"></img>

                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Sales'}</p>
                                <p className="Card_Total" >${TotalSale?.totalsale}</p>
                                <p className="card_hadding" >
                                    {!TotalSale?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    {/* <span><MdArrowDownward size={18} color="#D0004B" /></span> */}
                                    <span style={{ color: !TotalSale?.Growth ? "#00AC4F" : "#D0004B" }}>{TotalSale?.percentage}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className=' dashboardTopCard top' >
                <div className='col-12  d-flex justify-content-center gap-4 '>
                    <div className=' Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <BsHandbag size={32} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Order'}</p>
                                <p className="Card_Total" >{Totalorder?.Totalorder}</p>
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
                <div className='col-12  d-flex justify-content-center gap-4 '>
                    <div className=' Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <SlSocialDropbox size={32} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className=' '>
                        <div className="Card_center_dashboard cardbox d-flex" >
                            <div className="" style={{ "margin-top": '10px' }}>
                                <p className='card_hadding'>{'Product'}</p>
                                <p className="Card_Total" >{Product?.Totalproduct}</p>
                                <p className="card_hadding" >
                                    {Product?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    <span style={{ color: Product?.Growth ? "#00AC4F" : "#D0004B" }}>{Math?.abs(Product?.percentage)}%</span>
                                    <span style={{ color: "black" }}> this year</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' dashboardTopCard top' >


                <div className='col-12  d-flex justify-content-center gap-4 '>
                    <div className=' Card_center_dashboard  '>
                        <div className="cardbox ">
                            <div className="group Card_center_dashboard ">

                                <RiGroupLine size={32} color="#00AC4F" />

                            </div>
                        </div>
                    </div>
                    <div className=' '>
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
