import cloudinary from "@/utils/cloudinary";
import { URL } from "@/utils/constant";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { resolve } from "path";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { MdPhotoAlbum } from "react-icons/md";
import { options } from "../api/auth/[...nextauth]/options";
import { revalidateTag } from "next/cache";

const page = async () => {
  const session: any = await getServerSession(options);

  const url = `${URL}/api/items/${session?.user?.id}`;

  console.log(url);

  const createIteams = async (data: FormData) => {
    "use server";
    const name = data.get("name") as string;
    const price = data.get("price") as string;
    const image = data.get("image") as File;

    const file = await image.arrayBuffer();
    const buffer = new Uint8Array(file);

    const dataComp: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, res) => {
          if (err) {
            return reject(err);
          } else {
            const result = resolve(res);

            return result;
          }
        })
        .end(buffer);
    });

    // console.log("sec URL: ", dataComp);

    // await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     name,
    //     price: parseInt(price),
    //     image: "secure_url",
    //     imageID: "public_id",
    //   }),
    // });

    revalidateTag("items");
  };
  return (
    <div className="flex w-full h-[calc(85vh-70px)] justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Sign in Screen</div>

        <div className="my-10">
          <hr />
        </div>

        <form action={createIteams}>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col mb-4">
              <label className="font-semibold text-[12px]">Price</label>
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="border outline-none h-[45px] rounded-md pl-2"
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="image"
                className="font-semibold text-[12px] cursor-pointer"
              >
                <MdPhotoAlbum size={50} />
              </label>
              <input
                id="image"
                type="file"
                name="image"
                placeholder="Price"
                className="hidden"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md"
          >
            Create Item
          </button>
        </form>

        <div className="my-3">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default page;
