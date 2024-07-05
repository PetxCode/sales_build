import { URL } from "@/utils/constant";
import { getServerSession } from "next-auth";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const page = async () => {
  const session: any = await getServerSession(options);

  const url = `${URL}/api/items/${session?.user?.id}`;

  const file = await fetch(url, {
    method: "GET",
    cache: "no-cache",
  });

  const data = await file.json();

  return (
    <div>
      <div>
        {data.data.items.map((props: any) => {
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
