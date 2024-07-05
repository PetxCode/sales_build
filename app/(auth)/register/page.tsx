import { URL } from "@/utils/constant";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

const page = async ({ params }: any) => {
  const createAccount = async (data: FormData) => {
    "use server";
    const companyName = data.get("name") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    await fetch(`${URL}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name: companyName, email, password }),
    }).then(() => {
      redirect("/signin");
    });
  };

  //   const file = await fetch(URL);
  //   const data = await file.json();

  //   const getData = async () => {
  //    return await fetch(URL).then((res) => {
  //       return res.json();
  //     });
  //   };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="border rounded-md w-[500px] min-h-[300px] p-4 ">
        <div>Register Screen for </div>

        <div className="my-10">
          <hr />
        </div>

        <form action={createAccount}>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Display Name"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold text-[12px]">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="border outline-none h-[45px] rounded-md pl-2"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-8 h-[55px] flex items-center justify-center text-white bg-neutral-800 rounded-md"
          >
            Register
          </button>
        </form>

        <div className="text-[12px] my-4 text-center  ">
          Already have an Account{" "}
          <Link href="/signin" className="italic font-semibold ">
            Sign in Here
          </Link>
        </div>

        <div className="my-3">
          <hr />
        </div>

        <div>
          <p className="text-[12px] font-bold">
            Register through your Social Account
          </p>

          <div className="flex items-center gap-2">
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-red-600 hover:bg-red-500 duration-300  rounded-md text-[35px]">
              <FaGoogle />
            </button>
            <button className="w-full mt-2 h-[55px] flex items-center justify-center text-white bg-neutral-800 hover:bg-neutral-900 rounded-md text-[35px]">
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
