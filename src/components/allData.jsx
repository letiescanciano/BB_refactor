import React from "react";
import { UserContext } from "./UserContext";

export default function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <>
      <h5>All Data in Store</h5>
      {JSON.stringify(ctx)}

      <br />
    </>
  );
}
