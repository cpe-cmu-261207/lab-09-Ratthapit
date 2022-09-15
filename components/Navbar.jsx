import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div style={{ maxWidth: "600px" }} className="mx-auto">
      <br />
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/Experience">
          <a>Experience</a>
        </Link>
        <Link href="/Contact">
          <a>Contact</a>
        </Link>
        <Link href="/Lab07">
          <a>Lab-07</a>
        </Link>
      </div>
      <hr />
    </div>
  );
}
