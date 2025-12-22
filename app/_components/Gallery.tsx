"use client";

import { Backdrop, Box, IconButton } from "@mui/material";
import Image from "next/image";
import { FC, ReactElement, RefObject, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Theme } from "@mui/material/styles";
import { MotionDiv } from "./motion";
import { AnimatePresence, useInView } from "motion/react";

const Gallery: FC<{ images: string[] }> = ({ images }: { images: string[] }): ReactElement => {
    const [imageToOpen, setImageToOpen] = useState<number>(-1);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const ref: RefObject<HTMLDivElement | null> = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        enter: (direction: "left" | "right") => {
            return {
                x: direction === "right" ? 400 : -400,
                opacity: 0,
                zIndex: 1
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: "left" | "right") => {
            return {
                zIndex: 0,
                x: direction === "right" ? -400 : 400,
                opacity: 0
            };
        }
    };

    return (
        <>
            <Backdrop
                open={imageToOpen > -1}
                onClick={() => setImageToOpen(-1)}
                sx={{ zIndex: (theme: Theme) => theme.zIndex.drawer + 1, backdropFilter: "blur(5px)" }}
                transitionDuration={500}
            >
                <Box
                    sx={{
                        padding: "2rem",
                        width: "100%",
                        height: "100%"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <IconButton>
                            <CloseIcon
                                onClick={() => setImageToOpen(-1)}
                                sx={{
                                    color: "var(--portfolio-palette-primary-contrastText)"
                                }}
                            />
                        </IconButton>
                    </Box>

                    <Box sx={{ position: "relative", width: "100%", height: "80%", marginTop: "1rem" }}>
                        <AnimatePresence initial={false} custom={direction}>
                            {imageToOpen > -1 && (
                                <MotionDiv
                                    custom={direction}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    variants={variants}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        bounce: 4,
                                        visualDuration: 0.3
                                    }}
                                    style={{
                                        position: "absolute",
                                        width: "100%",
                                        height: "100%",
                                        top: 0,
                                        filter: "drop-shadow(0 0 30px var(--portfolio-palette-background-default))"
                                    }}
                                    key={imageToOpen}
                                >
                                    <Image
                                        src={images[imageToOpen]}
                                        alt="Expanded gallery image"
                                        fill
                                        objectFit="contain"
                                    />
                                </MotionDiv>
                            )}
                        </AnimatePresence>
                    </Box>
                    <Box
                        sx={{
                            color: "var(--portfolio-palette-primary-contrastText)",
                            position: "absolute",
                            bottom: "2rem",
                            left: "0",
                            right: "0",
                            display: "flex",
                            gap: "2rem",
                            justifyContent: "center"
                        }}
                    >
                        <IconButton>
                            <ChevronLeft
                                sx={{ fontSize: "5rem" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDirection("left");
                                    setImageToOpen(imageToOpen > 0 ? imageToOpen - 1 : images.length - 1);
                                }}
                            />
                        </IconButton>

                        <IconButton>
                            <ChevronRight
                                sx={{ fontSize: "5rem" }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    setDirection("right");
                                    setImageToOpen(imageToOpen < images.length - 1 ? imageToOpen + 1 : 0);
                                }}
                            />
                        </IconButton>
                    </Box>
                </Box>
            </Backdrop>
            <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                {images?.map((imageSrc: string, index: number) => (
                    <MotionDiv
                        ref={ref}
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.2, ease: "easeIn", delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.1, ease: "easeIn" } }}
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                paddingBottom: "150%",
                                cursor: "pointer"
                            }}
                            onClick={() => setImageToOpen(index)}
                        >
                            <Image src={imageSrc} alt={`Gallery image ${index + 1}`} fill objectFit="cover" />
                        </Box>
                    </MotionDiv>
                ))}
            </Box>
        </>
    );
};

export default Gallery;
