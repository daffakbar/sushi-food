import React from "react";

function Sorted({ count }) {
  return (
    <div class="col-12 d-flex justify-content-between">
      <span>
        <b>{count} </b>Sushi found
      </span>
      <div class="d-flex">
        <label for="">Sorted by: </label>
        <select
          class="ms-1 rounded rounded-3 rounded-pill"
          aria-label="Default select example"
        >
          <option selected>Recomsssended</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
}

export default Sorted;
