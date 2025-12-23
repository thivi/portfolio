"use client";

import * as MuiIcons from "@mui/icons-material";
import { SvgIconOwnProps } from "@mui/material";
import { FC } from "react";

const SkillIcon: FC<{ icon: keyof typeof MuiIcons } & SvgIconOwnProps> = ({ icon, ...props }) => {
    const Icon = MuiIcons[ icon ];

    return <Icon {...props} />;
};

export type SkillIconType = keyof typeof MuiIcons;
export default SkillIcon;
