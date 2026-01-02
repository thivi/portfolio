"use client";

import { motion } from "motion/react";
import { FC, PropsWithChildren, ReactElement } from "react";
import { TRANSITION_DURATION } from "../../constants/ui";

export const Template: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ ease: "easeIn", duration: TRANSITION_DURATION}}
        >
            {children}
        </motion.div>
    );
}

export default Template;
