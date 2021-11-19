import React from "react";
import { NavLink, Redirect } from "react-router-dom";
const Sidebar = () => {
  return (
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-sidebar me-3 pt-2">
      <div class=" d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 pe-0">
        <a
          href="/"
          class=" d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none "
        >
          <span class="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul
          class=" nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item">
            <NavLink
              to="/sushi-food"
              className="px-0 text-white align-middle nav-link spacing-text"
              activeClassName="active"
            >
              <i class="fs-4 bi-house"></i>
              <span class="ms-1 d-none d-sm-inline">OVERVIEW</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/menu"
              className="px-0 text-white align-middle nav-link spacing-text"
              activeClassName="active"
            >
              <i class="fs-4 bi-journals"></i>
              <span class="ms-1 d-none d-sm-inline">MENU</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/product"
              className="px-0 text-white align-middle nav-link spacing-text"
              activeClassName="active"
            >
              <i class="fs-4 bi-table"></i>
              <span class="ms-1 d-none d-sm-inline">PRODUCTS</span>
            </NavLink>
          </li>

          {/* <li>
            <NavLink
              href="/"
              class="nav-link spacing-text px-0 text-white align-middle"
            >
              <i class="fs-4 bi-currency-dollar"></i>
              <span class="ms-1 d-none d-sm-inline">TRANSACTION</span>
            </NavLink>
          </li>
         
          <li>
            <NavLink
              href="/"
              class="nav-link spacing-text text-white px-0 align-middle"
            >
              <i class="fs-4 bi-people"></i>
              <span class="ms-1 d-none d-sm-inline">FAQ</span>
            </NavLink>
          </li> */}
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
