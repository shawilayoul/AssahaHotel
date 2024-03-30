import React, { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

const Cabins = () => {
  const cabins = useQuery({
    queryKey: ["cabin"],
    queryFn: getCabins,
  });

  return (
    <div>
      <div>
        <h3>All Cabins</h3>
        <p>Filter/Sort</p>
      </div>
      <div>
        <ul>
          <li>Cabin</li>
          <li>Capacity</li>
          <li>Price</li>
          <li>Discount</li>
        </ul>
      </div>
      <ul>
        {cabins.data?.map(({image,name,maxCapacity,regularPrice,discount,description}) => {
          return (
            <div>
              <img style={{ width: "100px" }} src={image} alt="" />
               <h3>{name}</h3>
               <h3>{maxCapacity}</h3>
               <h3>{regularPrice}</h3>
               <h3>{discount}</h3>
               <h3>{description}</h3>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Cabins;
