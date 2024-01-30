import React from "react";
import { Link } from "react-router-dom";
const Productstorelist = ({ title, Data1 }) => {

  return (
    <div className="list_container">
      <div className="list_heading">
        <h3 className="listCardTitle">{title}</h3>
      </div>
      <ul className="dashboardList">
        {Data1 !== undefined &&
          Data1.slice(0, 4).map((data) => {
            return (
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
                    <h3 className="list_title">{data?.ProductName || data?.StoreName}</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      {data?.ProductSalesCount ?
                        <>
                          <span className="listunitSold">Unit {data?.ProductSalesCount}</span>
                          <span className="listunitSold">${data?.Price || data?.SalesPrice}</span>
                        </>
                        :     
                        <span className="listunitSold"> {data?.SalesPrice}</span>
                     }
                    </div>
                  </div>
                </div>
              </li>
            )
          })
        }
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
