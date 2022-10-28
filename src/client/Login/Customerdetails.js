import React from "react";
import data from "../../data.json";

const Customerdetails = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Customer ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Current Amount</th>
          <th>Active</th>
          <th>Action</th>
        </tr>
        {data.map((item, key) => {
          return (
            <tr>
              <td>{item.custId}</td>
              <td>{item.custName}</td>
              <td>{item.email}</td>
              <td>{item.currBalance}</td>
              <td>{item.active ? "active" : "inactive"}</td>
              <td>
                <button>{"Transfer Money"} </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Customerdetails;
