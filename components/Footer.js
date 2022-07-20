import React from "react";

export default function Footer() {
  return (
    <div
      id="bottom"
      className="w-full bg-blue-400 p-4 flex flex-col justify-evenly md:flex-row"
    >
      <p>
        Made by<a href="https://twitter.com/8koi2"> Hachikoi</a>
      </p>
      <p>
        Code found in
        <a href="https://github.com/Hachikoi-the-creator/De-App"> Github</a>
      </p>
      <p>
        Part of R2W3
        <a href="https://docs.alchemy.com/alchemy/road-to-web3/welcome-to-the-road-to-web3">
          {" "}
          Alchemy
        </a>
      </p>
    </div>
  );
}
