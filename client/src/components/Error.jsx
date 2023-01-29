import React from "react";

function Error({ error }) {
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
}

export default Error;
