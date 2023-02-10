import React from "react";


//Contact us page 
// Displaying company's phone number and address
const Contactus = () => {
  return (
    <>
      <div className="view-container mt-5" >
        <div class="row" style={{ margin: "auto", marginTop: "10rem", width: "80%" }}>
          {/** Banner of the pizza mania  */}
          <div class="col-4 col-md-4 col-sm-4 col-lg-4">
            <img src={"https://img.restaurantguru.com/r395-Camion-PIZZA-MANIA-advertisement.jpg"}
              style={{ width: "100%", height: "300px", borderRadius: "7rem" }} />
          </div>

          {/** Displaying contact details */}
          <div class="col-8 col-md-8 col-sm-8 col-lg-8 ">
            <table class="table" style={{ width: "80%", margin: "auto", marginTop: "5rem" }}>
              <thead>
                <tr>
                  <th
                    colspan="3"
                    scope="cols"
                    style={{
                      textAlign: "center",
                      backgroundColor: "rgb(211 202 122 / 60%)",
                      fontSize: "20px",
                    }}
                  >
                    Contact Detailsss
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
