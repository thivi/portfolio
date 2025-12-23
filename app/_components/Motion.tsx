"use client";

import { HTMLMotionProps, motion, useInView } from "motion/react";
import { FC, PropsWithChildren, ReactElement, RefObject, useRef } from "react";

export const MotionDiv = motion.div;
export const MotionH1 = motion.h1;
export const MotionSpan = motion.span;

export const MotionInView: FC<PropsWithChildren<HTMLMotionProps<"div">>> = ({
    children,
    initial,
    animate,
    transition
}): ReactElement => {
    const ref: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
    const isInView: boolean = useInView(ref, { once: true });

    return (
        <MotionDiv ref={ref} initial={initial} animate={isInView ? animate : {}} transition={transition}>
            {children}
        </MotionDiv>
    );
};
