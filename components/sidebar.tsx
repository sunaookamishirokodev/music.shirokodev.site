import Link from "next/link";
import Login from "./login";
import Logo from "./icon/logo";
import Logout from "./logout";

const isUser = true;

export default function Sidebar({ ...props }) {
  return (
    <div {...props}>
      <div className="flex justify-between px-2">
        <Logo />
        <div className="flex">{/* login */}</div>
      </div>
      <div className="mt-10 pl-2">Tools:</div>
      <ul className="mt-2">
        {[
          { tag: "Favourite", redir: "/favourite" },
          { tag: "Listen today", redir: "/today" },
        ].map((item, index) => {
          return (
            <li className="py-2 pl-2 rounded-r-2xl cursor-pointer hover:bg-zinc-300 hover:text-black" key={index}>
              <Link href={item.redir}>{item.tag}</Link>
            </li>
          );
        })}
        <li className="py-2 pl-2 rounded-r-2xl cursor-pointer hover:bg-zinc-300 hover:text-black">
          <div>Language Song</div>
        </li>
      </ul>
    </div>
  );
}
