"use client";

import { Box, Grid, Skeleton, useMediaQuery } from "@mui/material";
import { FC, ReactElement } from "react";
import { TABLET_BREAKPOINT } from "../constants/ui";

const Loading: FC = (): ReactElement => {
    const large: boolean = useMediaQuery(`(min-width:${TABLET_BREAKPOINT}px)`);

    return (
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5, lg: 5 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", marginBottom: "1rem" }}>
                    <Box sx={{ width: "200px", height: "200px", position: "relative" }}>
                        <Skeleton variant="circular" width={200} height={200} />
                    </Box>
                </Box>
                <Box>
                    <Skeleton variant="text" height="4rem" />
                    <Skeleton variant="text" height="4rem" />
                </Box>
                <Box sx={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {Array.from({ length: 4 }, (_, index) => (
                        <Skeleton key={index} variant="circular" width={40} height={40} />
                    ))}
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7, lg: 7 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "-webkit-fill-available"
                    }}
                >
                    <Box
                        sx={{
                            marginTop: large ? "0rem" : "2rem",
                            backdropFilter: "blur(2px)",
                            position: "relative",
                            height: "-webkit-fill-available",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            padding: "2rem",
                            "::before": {
                                content: '""',
                                background:
                                    "linear-gradient(225deg, var(--portfolio-palette-primaryGradient-main), var(--portfolio-palette-primaryGradient-second))",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "100%",
                                width: "100%",
                                display: "block",
                                borderRadius: "3em",
                                border: "1px solid var(--portfolio-palette-primaryGradient-second)",
                                opacity: 0.1
                            }
                        }}
                    >
                        <Skeleton variant="text" height="2rem" />
                        <Skeleton variant="text" height="2rem" />
                        <Skeleton variant="text" height="2rem" />
                        <Skeleton variant="text" height="2rem" />
                        <Skeleton variant="text" height="2rem" width="75%" />
                    </Box>
                    <Box
                        sx={{
                            marginTop: "30px"
                        }}
                    >
                        <Skeleton variant="text" width="40%" height="3rem" />
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                            {Array.from({ length: 4 }, (_, index) => (
                                <Skeleton key={index} variant="rectangular" width={100} height={30} sx={{borderRadius: "3rem"}} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Box
                sx={{
                    marginTop: "2rem",
                    width: "100%"
                }}
            >
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="100%" height="2rem" />
                <Skeleton variant="text" width="75%" height="2rem" />
            </Box>
        </Grid>
    );
};

export default Loading;
