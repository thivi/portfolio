"use client";

import { motion } from "motion/react";
import { FC, PropsWithChildren, ReactElement } from "react";

export const Template: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return (
        <motion.div
            initial={{ filter: "blur(10px)"}}
            animate={{ filter: "blur(0px)"}}
            transition={{ ease: "easeIn", duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}

export default Template;
