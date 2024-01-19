
import React, { useEffect, useState } from "react";
import axios from "axios"
import Cookies from 'universal-cookie';
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowRoundUp } from "react-icons/io";
import { MdArrowDownward } from "react-icons/md";
import { SlSocialDropbox } from "react-icons/sl";
import { RiGroupLine } from "react-icons/ri";
export default function StatusBarCard() {
    const cookies = new Cookies();
    const token_data = cookies.get('Token_access')
    const [totel, setTotal] = useState([])
    useEffect(() => {
        axios("https://api.cannabaze.com/AdminPanel/Get-TotalCount/", {
            headers: {
                'Authorization': `Bearer ${token_data}`
            }
        }).then(response => {
            setTotal(response.data.Data)  
      
        })
    }, [token_data])

    return (

        <div className='row row-cols-sm-6 row-cols-md-6 mt-3'>
            <div className='col top' >

                <div className='row backg'>
                    <div className='col-12  d-flex '>
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
                                    <p className="Card_Total" >{500}+</p>
                                    <p className="card_hadding" >
                                        <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        <span style={{ color: "#00AC4F" }}>37.8% </span>
                                        <span style={{ color: "black" }}>this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
             
                </div>

            </div>
            <div className='col top' >

                <div className='row backg'>
                    <div className='col-12  d-flex '>
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
                                    <p className='card_hadding'>{'Vedore'}</p>
                                    <p className="Card_Total" >{200}</p>
                                    <p className="card_hadding" >
                                        <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        <span style={{ color: "#00AC4F" }}>2%</span>
                                        <span style={{ color: "black" }}> this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 cardn_number card_hadding'>
    {/* <span style={{ color: "#FE5722" }} >{data.total}</span> */}
                    {/* </div>
<div className='col-12'>
    {/* <div className="">
    <div className={"progress " + data.title.replaceAll(' ','') } >
        <div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="1"></div>
    </div>
    </div> */}
                    {/* </div>
<div className='col-12 con'>
    {/* <span className='card_persent_font'>4.6%</span> <span className='Today_card_status'>Today</span> */}
                    {/* </div> */}
                </div>

            </div>
            <div className='col top' >

                <div className='row backg'>
                    <div className='col-12  d-flex '>
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
                                    <p className="Card_Total" >₹{'89k'}</p>
                                    <p className="card_hadding" >
                                        <span><MdArrowDownward size={18} color="#D0004B" /></span>
                                        <span style={{ color: "#D0004B" }}> 2%</span>
                                        <span style={{ color: "black" }}> this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 cardn_number card_hadding'>
{/* <span style={{ color: "#FE5722" }} >{data.total}</span> */}
                    {/* </div>
<div className='col-12'>
{/* <div className="">
<div className={"progress " + data.title.replaceAll(' ','') } >
<div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="1"></div>
</div>
</div> */}
                    {/* </div>
<div className='col-12 con'>
{/* <span className='card_persent_font'>4.6%</span> <span className='Today_card_status'>Today</span> */}
                    {/* </div> */}
                </div>

            </div>
            <div className='col top' >

                <div className='row backg'>
                    <div className='col-12  d-flex '>
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
                                    <p className="Card_Total" >{1200}+</p>
                                    <p className="card_hadding" >
                                        <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        <span style={{ color: "#00AC4F" }}> 11% </span>
                                        <span style={{ color: "black" }}> this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 cardn_number card_hadding'>
{/* <span style={{ color: "#FE5722" }} >{data.total}</span> */}
                    {/* </div>
<div className='col-12'>
{/* <div className="">
<div className={"progress " + data.title.replaceAll(' ','') } >
<div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="1"></div>
</div>
</div> */}
                    {/* </div>
<div className='col-12 con'>
{/* <span className='card_persent_font'>4.6%</span> <span className='Today_card_status'>Today</span> */}
                    {/* </div> */}
                </div>

            </div>
            <div className='col top' >

                <div className='row backg'>
                    <div className='col-12  d-flex '>
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
                                    <p className="Card_Total" >{100}+</p>
                                    <p className="card_hadding" >
                                        <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        <span style={{ color: "#00AC4F" }}>  37.8% </span>
                                        <span style={{ color: "black" }}>this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 cardn_number card_hadding'>
{/* <span style={{ color: "#FE5722" }} >{data.total}</span> */}
                    {/* </div>
<div className='col-12'>
{/* <div className="">
<div className={"progress " + data.title.replaceAll(' ','') } >
<div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="1"></div>
</div>
</div> */}
                    {/* </div>
<div className='col-12 con'>
{/* <span className='card_persent_font'>4.6%</span> <span className='Today_card_status'>Today</span> */}
                    {/* </div> */}
                </div>

            </div>
            <div className='col top' >

                <div className='row backg'>
                    <div className='col-12  d-flex '>
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
                                    <p className="Card_Total" >{500}K</p>
                                    <p className="card_hadding" >
                                        <span><IoIosArrowRoundUp size={18} color="#00AC4F" /></span>
                                        <span style={{ color: "#00AC4F" }}>11% </span>
                                        <span style={{ color: "black" }}> this month</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 cardn_number card_hadding'>
{/* <span style={{ color: "#FE5722" }} >{data.total}</span> */}
                    {/* </div>
<div className='col-12'>
{/* <div className="">
<div className={"progress " + data.title.replaceAll(' ','') } >
<div className="progress-bar " role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="1"></div>
</div>
</div> */}
                    {/* </div>
<div className='col-12 con'>
{/* <span className='card_persent_font'>4.6%</span> <span className='Today_card_status'>Today</span> */}
                    {/* </div> */}
                </div>

            </div>
        </div>


    )
}
