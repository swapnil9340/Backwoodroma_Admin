
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
    const [Data, SetData] = useState({})
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
    function convert(str) {
        var date = new Date(str),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }


    function CalculateDays(date1) {
        if (date1 === "first") {
            const datefirst = new Date(state.CustomeStartDate)
            const datesecond = new Date(state.CustomeEndDate)
            const diffTime = Math.abs(datesecond - datefirst);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            var StartEndDate = new Date(state.CustomeEndDate);
            StartEndDate.setDate(StartEndDate.getDate() - diffDays - 1);
            var EndStartDate = new Date(state.CustomeStartDate);
            EndStartDate.setDate(EndStartDate.getDate() - diffDays - 1);
            return convert(EndStartDate.toString())
        }
        else {
            const datefirst = new Date(state.CustomeStartDate)
            const datesecond = new Date(state.CustomeEndDate)
            const diffTime = Math.abs(datesecond - datefirst);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            var StartEndDate = new Date(state.CustomeEndDate);
            StartEndDate.setDate(StartEndDate.getDate() - diffDays - 1);
            var EndStartDate = new Date(state.CustomeStartDate);
            EndStartDate.setDate(EndStartDate.getDate() - diffDays - 1);
            // console.log(convert(StartEndDate.toString()), )
            return convert(StartEndDate.toString())
        }



    }
    React.useEffect(() => {
        if (state.datesSelect === "Customics") {
            if (state.CustomeStartDate !== "" && state.CustomeEndDate !== "") {
                SetData({
                    "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
                    "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeStartDate,
                    "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeEndDate,
                    "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
                    "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('Second')
                })
            }
        }
        else {
            SetData({
                "SelectTime": state.datesSelect === "Year" ? "ThisYear" : state.datesSelect === "Months" ? 'ThisMonth' : state.datesSelect === "Today" ? 'Today' : state.datesSelect === "week" ? "week" : state.datesSelect === "Customics" && "costume",
                "StartDate": state.datesSelect === "Year" ? `${date.getFullYear()}-01-01` : state.datesSelect === "Months" ? monthStartDate : state.datesSelect === "week" ? StartDateWeek : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeStartDate,
                "EndDate": state.datesSelect === "Year" ? TodayDate : state.datesSelect === "Months" ? monthlastDate : state.datesSelect === "week" ? TodayDate : state.datesSelect === "Today" ? TodayDate : state.datesSelect === "Customics" && state.CustomeEndDate,
                "LastStartDate": state.datesSelect === "Year" ? `${lastYear}-01-01` : state.datesSelect === "Months" ? lastmonthStartDate : state.datesSelect === "week" ? GetpreviousWeekDate(7, 1) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('first'),  //yesterday.toISOString().split('T')[0]
                "EndStartDate": state.datesSelect === "Year" ? `${lastYear}-12-31` : state.datesSelect === "Months" ? lastmonthLastDate : state.datesSelect === "week" ? GetpreviousWeekDate(0, 0) : state.datesSelect === "Today" ? yesterday.toISOString().split('T')[0] : state.datesSelect === "Customics" && CalculateDays('Second')
            })
        }
    }, [state.datesSelect, state.CustomeStartDate, state.CustomeEndDate])

    // const datedata = 

    useEffect(() => {
        axios.post("https://api.cannabaze.com/AdminPanel/TotalStore/",
            Data,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                setTotal(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/VendorCard/",
            Data,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                setVendor(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/TotalSalesCard/",
            Data,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetTotalSale(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/TotalOrderCard/",
            Data,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                console.log(response.data[0])
                Setorder(response.data[0])
            })
        axios.post("https://api.cannabaze.com/AdminPanel/ProductDashBoardCard/",
            Data,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetProduct(response.data[0])

            })
        axios.post("https://api.cannabaze.com/AdminPanel/CustomerDashBoardCard/",
            Data,
            {
                headers: {
                    'Authorization': `Bearer ${token_data}`
                }
            }).then(response => {
                SetCustomer(response.data[0])
            })

    }, [Data])

    console.log(Data, "ppppppppppppdafs", state)
    console.log(isNaN(Math.abs(Totalorder?.percentage) ? 0 : 2))
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
                                    {totel?.Growth ? <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                    }
                                    <span style={{ color: totel?.Growth ? "#00AC4F" : "#D0004B" }}>{isNaN(Math?.abs(totel?.percentage)) ? 0 : Math?.abs(totel?.percentage)}%</span>
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
                                    {Vendor?.Growth ? <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                    }
                                    <span style={{ color: Vendor?.Growth ? "#00AC4F" : "#D0004B" }}>{isNaN(Math?.abs(Vendor?.percentage) ? 0:Math?.abs(Vendor?.percentage))}%</span>
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
                                    {TotalSale?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                    :<span><MdArrowDownward size={18} color="#D0004B" /></span>
                                    }
                                    <span style={{ color:TotalSale?.Growth  ?"#00AC4F"  :"#D0004B" }}>{isNaN(Math.abs(TotalSale?.percentage))? 0 :Math.abs(TotalSale?.percentage)}%</span>
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
                                    {Totalorder?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    <span style={{ color: Totalorder?.Growth ? "#00AC4F" : "#D0004B" }}> {isNaN(Math.abs(Totalorder?.percentage)) ?0 : Math.abs(Totalorder?.percentage) }% </span>
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
                                    <span style={{ color: Product?.Growth ? "#00AC4F" : "#D0004B" }}>{isNaN(Math?.abs(Product?.percentage)) ? 0 : Math?.abs(Product?.percentage)}%</span>
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
                                    {Customer?.Growth ? <span>< IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        : <span><MdArrowDownward size={18} color="#D0004B" /></span>}
                                    {/* <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span> */}
                                    <span style={{ color: Customer?.Growth ? "#00AC4F" : '#D0004B' }}>{isNaN(Math.abs(Customer?.percentage)) ? 0 : Math.abs(Customer?.percentage) }% </span>
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
