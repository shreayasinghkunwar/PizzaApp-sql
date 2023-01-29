import React from "react";

const Contactus = () => {
  return (
    <>
      <div className="view-container mt-5">
        <div calss="row" style={{ width: "45%", margin: "auto" }}>
          <div class="col-12 md-12 col-lg-12">
            <table class="table">
              <thead>
                <tr>
                  <th
                    colspan="3"
                    scope="cols"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#ffe710",
                      fontSize: "20px",
                    }}
                  >
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <i class="bi bi-telephone-fill"></i>
                  </td>
                  <td>Phone</td>
                  <td>9841450010</td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-envelope-at-fill"></i>
                  </td>
                  <td>Email</td>
                  <td>pizzamania@gmail.com</td>
                </tr>
                <tr>
                  <td>
                    <i class="bi bi-geo-alt-fill"></i>
                  </td>
                  <td>Location</td>
                  <td>Imadol, Kathmand</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
