import React from "react";

// Error message 
function Error({ error }) {
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
}

export default Error;
