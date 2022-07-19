import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */}
      <div id="top"></div>
      <nav
        className="flex list-none p-3 fixed top-0 w-full bg-[#60a5fac0] z-10"
        id="top"
      >
        <li className="py-1 px-2 ml-10 font-medium ">
          <Link href="/">Home</Link>
        </li>
        <div className="flex ml-auto">
          <li className="px-2 w-10">
            <a href="#top">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </li>
          <li className="px-2 w-10">
            <a href="#bottom">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </li>
        </div>
      </nav>
    </>
  );
}
