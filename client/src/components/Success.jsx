import React from "react";

function Success({ success }) {
  return (
    <div class="alert alert-success" role="alert">
      {success}
    </div>
  );
}

export default Success;
