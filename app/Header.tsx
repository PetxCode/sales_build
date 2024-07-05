import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full items-center pl-10 gap-6 border-b h-[70px] text-[12px] font-semibold uppercase">
      <Link href="/">Home</Link>
      <Link href="/personal">Personal</Link>
      <Link href="/create">Create</Link>
    </div>
  );
};

export default Header;
