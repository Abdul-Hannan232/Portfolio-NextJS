import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Layout className={"py-8 flex items-center justify-between"}>
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <div className="flex items-center">
          Developed with{" "}
          <span className="px-1 text-2xl text-green-600">&#9825;</span> by
          &nbsp;
          <Link
            href={"http://mayonity.com"}
            target="_blank"
            className="font-bold text-green-500"
          >
            Abdul Hannan
          </Link>
        </div>
        <span>Say Hello</span>
      </Layout>
    </footer>
  );
};

export default Footer;
