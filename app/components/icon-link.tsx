import React from "react";
import type { IconType } from "react-icons";

export const IconLink = ({
  Icon,
  href,
  label,
}: {
  Icon: IconType;
  href: string;
  label: string;
}) => {
  return (
    <a
      href={href}
      className="text-slate-500 text-xs uppercase font-bold text-center"
    >
      <Icon className="inline-block text-2xl" />
      <span className="block mt-2">{label}</span>
    </a>
  );
};
