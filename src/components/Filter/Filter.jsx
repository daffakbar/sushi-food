import React from "react";

const Filter = () => {
  return (
    <div class="col-12 d-flex ms-0">
      <p class="pe-2">My Filter:</p>
      <ul class="d-flex nav-pills nav">
        <li class="nav-item ms-2">
          <a
            href="/menu"
            class="text-decoration-none px-2 rounded-pill bg-sidebar text-white filter-pick border border-2"
          >
            <i class="bi bi-star"></i> Sushi Favorite
          </a>
        </li>
        <li class="nav-item ms-2">
          <a
            href="/menu"
            class=" text-decoration-none px-2 rounded-pill text-secondary border border-2 bg-light filter-pick "
          >
            <i class="bi bi-box-seam"></i> Sushi Packages
          </a>
        </li>
        <li class="nav-item">
          <a
            href="/menu"
            class="text-decoration-none px-2 rounded-pill text-secondary border border-2 bg-light filter-pick "
          >
            <i class="bi bi-hand-thumbs-up"></i> Best Sushi
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
