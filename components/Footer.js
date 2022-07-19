import React from "react";

export default function Footer() {
  return (
    <div
      id="bottom"
      className="w-full bg-blue-400 p-4 flex flex-col justify-evenly md:flex-row"
    >
      <p>
        Made by <a href="#">Hachikoi</a>
      </p>
      <p>
        Code found in <a href="#">Github</a>
      </p>
      <p>
        Part of R2W3 <a href="#">Alchemy</a>
      </p>
    </div>
  );
}
