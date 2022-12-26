import React from "react";
import desu from "./assets/images/desu-2.png";
import rGlogo from "./assets/images/rgob.png";

export const Header = (props) => {
    const imageSize='8%';
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex:'5',
      }}
    >
      {}
      <img src={desu} height={imageSize}  width={imageSize} alt="desu" />
      <h1 style={{fontSize:'1.5rem', fontWeight:'800'}}>Gyelpozhing Water Management System</h1>
      <img src={rGlogo} height={imageSize} width={imageSize} alt="rGlogo" />
    </div>
  );
};

export const TankLevel=(props)=>{

return(
    <div>

    </div>
);
}