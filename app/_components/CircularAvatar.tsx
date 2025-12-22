"use client";

import { styled } from "@mui/material";
import Image from "next/image";
import { ComponentProps, FC } from "react";


const CircularAvatar: FC<ComponentProps<typeof Image>> = styled(Image)({
    borderRadius: "50%"
})

export default CircularAvatar;
