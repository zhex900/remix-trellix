import { Link } from "@remix-run/react";
import { LoginIcon, LogoutIcon } from "~/icons/icons";
import React from "react";
import { IconLink } from "./icon-link";
import { SiTailwindcss, SiGithub, SiRemix } from "react-icons/si";

export const TopNav = ({ userId }: { userId: string | null }) => (
  <div className="bg-slate-900 border-b border-slate-800 flex items-center justify-between py-4 px-8 box-border">
    <Link to="/home" className="block leading-3 w-1/3">
      <div className="font-black text-2xl text-white">Trellix</div>
      <div className="text-slate-500">learn web dev</div>
    </Link>
    <div className="flex items-center gap-6">
      <IconLink
        href="https://github.com/zhex900/remix-trellix"
        label="Source"
        Icon={SiGithub}
      />
      <IconLink
        href="https://remix.run/docs/en/main"
        Icon={SiRemix}
        label="Remix Docs"
      />
      <IconLink
        href="https://tailwindcss.com/docs"
        Icon={SiTailwindcss}
        label="Tailwind CSS"
      />
    </div>
    <div className="w-1/3 flex justify-end">
      {userId ? (
        <form method="post" action="/logout">
          <button className="block text-center">
            <LogoutIcon />
            <br />
            <span className="text-slate-500 text-xs uppercase font-bold">
              Log out
            </span>
          </button>
        </form>
      ) : (
        <Link to="/login" className="block text-center">
          <LoginIcon />
          <br />
          <span className="text-slate-500 text-xs uppercase font-bold">
            Log in
          </span>
        </Link>
      )}
    </div>
  </div>
);
