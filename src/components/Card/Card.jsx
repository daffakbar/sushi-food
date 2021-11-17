import React from "react";

const Card = ({ data }) => {
  return (
    <div class="col-3 mb-3" key={data.id}>
      <div class="card bg-white">
        <div class="d-flex justify-content-between mx-2 my-2">
          <span class="rounded-pill text-white bg-dark px-1 py-1">
            <i class="bi bi-star-fill text-warning fs-6"></i>
            4.5
          </span>
          <button class="rounded-circle btn-love py-1 px-2">
            <i class="bi bi-heart"></i>
          </button>
        </div>
        <img src={data.imgURL} alt="" class="card-img img-fluid px-3" />
        <div class="card-body p-2">
          <span class="card-title fs-5 me-1 fw-bold">{data.name}</span>
          <span class="rounded-pill bg-green-light text-black-50 px-2 py-1">
            {data.idCategories.nameCategories}
          </span>
          {/* <span class="rounded-pill bg-green-light text-black-50 px-2 py-1">
            2 pcs
          </span> */}
          <p class="card-text">$4.99</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
