import Link from "next/link";
import React from "react";

type ButtonProps = {
  url:string,
  text:string
}

const Button = ({ url, text }:ButtonProps) => {
  return (
    <Link
      href={url}
      className="border-none rounded-md p-4 w-max bg-[#35b953] text-[#efefef] font-semibold cursor-pointer"
    >
      {text}
    </Link>
  );
};

export default Button;
