"use client";

import { Backdrop, Box, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";
import { FC, ReactElement, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { Theme } from "@mui/material/styles";

const Gallery: FC<{ images: string[] }> = ({ images }: { images: string[] }): ReactElement => {
    const [imageToOpen, setImageToOpen] = useState<number>(-1);

    return (
        <Box>
            <Backdrop
                open={imageToOpen > -1}
                onClick={() => setImageToOpen(-1)}
                sx={{ zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }}
            >
                <Box
                    sx={{
                        margin: "2rem",
                        width: "100%",
                        height: "100vh"
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "20px",
                            right: "40px",
                            cursor: "pointer"
                        }}
                    >
                        <CancelIcon
                            onClick={() => setImageToOpen(-1)}
                            sx={{
                                color: "var(--portfolio-palette-primary-contrastText)"
                            }}
                        />
                    </Box>
                    <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                        {imageToOpen > -1 && (
                            <Image
                                src={images[imageToOpen]}
                                alt="Expanded gallery image"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        )}
                    </Box>
                    <Box
                        sx={{
                            color: "var(--portfolio-palette-primary-contrastText)",
                            position: "absolute",
                            bottom: "2rem",
                            left: "0",
                            right: "0",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <ChevronLeft
                            sx={{ fontSize: "4em", cursor: "pointer" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setImageToOpen(imageToOpen > 0 ? imageToOpen - 1 : images.length - 1);
                            }}
                        />
                        <ChevronRight
                            sx={{ fontSize: "4em", cursor: "pointer" }}
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                setImageToOpen(imageToOpen < images.length - 1 ? imageToOpen + 1 : 0);
                            }}
                        />
                    </Box>
                </Box>
            </Backdrop>
            <ImageList variant="masonry" cols={3} gap={8}>
                {images?.map((imageSrc: string, index: number) => (
                    <ImageListItem
                        key={index}
                        sx={{ position: "relative", width: "100%",height: "100%", paddingBottom: "150%", cursor: "pointer" }}
                        onClick={() => setImageToOpen(index)}
                    >
                        <Image src={imageSrc} alt={`Gallery image ${index + 1}`} fill style={{ objectFit: "cover" }} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default Gallery;
