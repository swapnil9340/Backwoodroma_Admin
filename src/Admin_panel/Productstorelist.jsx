import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'universal-cookie';
const Productstorelist = ({ title  , Data1}) => {
  const cookies = new Cookies();
  const token_data = cookies.get('Token_access')
   const [Data , SetData] =  React.useState([])


    console.log (  Data1 !==  undefined && Data1)

  return (
    <div className="list_container">
      <div className="list_heading">
        <h3 className="listCardTitle">{title}</h3>
      </div>
      <ul className="dashboardList">
           { Data1 !==  undefined &&
            Data1.map((data)=>{
            return(
              <li className="">
              <div className="dashboardListItem">
                <div className="dashboardListItemImage">
                  <div
                    className="imageCircle"
                  >
                    <img src={data.Image} className="w-[100%] h-[1005]" />
                  </div>
                </div>
                <div className="dashboardListItemtext">
                  <h3 className="list_title">{data.ProductName}</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="listunitSold">Unit {data.ProductSalesCount}</span>
                    <span className="listunitSold">${data.Price}</span>
                  </div>
                </div>
              </div>
            </li>
            )
            })
           }
        {/* <li className="">
          <div className="dashboardListItem">
            <div className="dashboardListItemImage">
              <div
                className="imageCircle"
              >
                <img src="./image/niceguy.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="dashboardListItemtext">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li>
        <li className="">
          <div className="dashboardListItem">
            <div className="dashboardListItemImage">
              <div
                className="imageCircle"
              >
                <img src="./image/niceguy.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="dashboardListItemtext">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li>
        <li className="">
          <div className="dashboardListItem">
            <div className="dashboardListItemImage">
              <div
                className="imageCircle"
              >
                <img src="./image/niceguy.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="dashboardListItemtext">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li>
        <li className="">
          <div className="dashboardListItem">
            <div className="dashboardListItemImage">
              <div
                className="imageCircle"
              >
                <img src="./image/niceguy.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="dashboardListItemtext">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li> */}

      </ul>
      <div className="viewAllBtnList ">
        {" "}
        <Link to="" className="">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Productstorelist;
