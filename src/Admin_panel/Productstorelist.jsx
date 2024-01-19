import React from "react";
import { Link } from "react-router-dom";
const Productstorelist = ({title}) => {
  return (
    <div className="list_container">
      <div className="list_heading">
        <h3 className="listCardTitle">{title}</h3>
      </div>
      <ul className="dashboardList">
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
