import React, { useEffect, useState } from "react";

import "../../assets/styles/styles.css";
import { Card, Filter, Sorted, Sidebar } from "../../components/index";
import service from "../../utils/service";
import { load1 } from "../../assets/img/index";

const MenuPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const GetDataSushi = async () => {
      try {
        const res = await service.get("/food");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    GetDataSushi();
  }, []);
  const countData = products.length;
  console.log(countData);
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
        <div class="col py-3">
          <div class="container">
            <div class="row">
              {/* <!-- Filter --> */}
              <Filter />
              {/* <!-- Meals Sorted --> */}
              <Sorted count={countData} />
            </div>
            <div class="row mt-3">
              {countData === 0 ? (
                <div className=" d-flex justify-content-center">
                  <div>
                    <img src={load1} alt="" width="350px" />
                    <h3>
                      <center> Loading ...</center>
                    </h3>
                  </div>
                </div>
              ) : (
                products.map((item) => {
                  return <Card data={item} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
