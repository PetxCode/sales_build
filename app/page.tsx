import { URL } from "@/utils/constant";
import React from "react";

const page = async () => {
  const file = await fetch(`${URL}/api/items`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["items"],
    },
  });

  const data = await file.json();

  return (
    <div>
      <div>
        {data.data.map((props: any) => {
          return (
            <div key={props._id}>
              {props?.name}: ₦{props.price.toLocaleString()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
