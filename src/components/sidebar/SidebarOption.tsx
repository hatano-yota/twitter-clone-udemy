import React from "react";
import "./SidebarOption.css";
import { SvgIconProps } from "@mui/material";

type Props = {
  text: string;
  Icon: React.FunctionComponent<SvgIconProps>;
  active?: boolean;
};

const SidebarOption = ({ text, Icon, active }: Props) => {
  console.log(active);
  return (
    <div className={`sidebarOption ${active && "sidebarOption_active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarOption;
