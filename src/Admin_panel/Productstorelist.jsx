import React from "react";
import { Link } from "react-router-dom";
const Productstorelist = (data) => {
  return (
    <div className="list_container">
      <div className="list_heading h-[10%]">
        <h3 className="text-center	">Top Products</h3>
      </div>
      <ul className="h-[80%] p-0 overflow-y-auto no-scrollbar  divide-slate-200">
        <li className="divide-slate-300">
          <div className="flex justify-between">
            <div className="w-[25%]">
              <div
                className="w-[40px] h-[40px] rounded-full overflow-hidden"
              >
                <img src="./image/niceguy.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="w-[70%]">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li>
        <li className="pt-4 divide-slate-300">
          <div className="flex justify-between">
            <div className="w-[25%]">
              <div
                className="w-[40px] h-[40px] rounded-full overflow-hidden"
              >
                <img src="./image/spankey.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="w-[70%]">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li>
        <li className="pt-4 divide-slate-300">
          <div className="flex justify-between">
            <div className="w-[25%]">
              <div
                className="w-[40px] h-[40px] rounded-full overflow-hidden"
              >
                <img src="./image/leedx.png" className="w-[100%] h-[1005]" />
              </div>
            </div>
            <div className="w-[70%]">
              <h3 className="list_title">YOLO GUMMIES: PEACH</h3>
              <div className="d-flex justify-content-between align-items-center">
                <span className="listunitSold">Unite 2000</span>
                <span className="listunitSold">$10,000.0</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="viewAllBtnList h-[10%] text-center	">
        {" "}
        <Link to="" className="">
          View All
        </Link>
      </div>
    </div>
  );
};

export default Productstorelist;
