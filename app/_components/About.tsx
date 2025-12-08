"use client";

import { useContext } from "react";
import { DataContext } from "../data";
import { Box, Chip, Typography } from "@mui/material";

const About: React.FC = (): React.ReactElement => {
    const portfolioData = useContext(DataContext);

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    justifyContent: "flex-end"
                }}
            >
                <Box>
                    <Typography variant="h2" component="h1" color="var(--portfolio-palette-primary-contrastText)">
                        {portfolioData.home.title}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginRight: "30px",
                        "::before": {
                            content: '""',
                            background:
                                "linear-gradient(225deg, var(--portfolio-palette-primary-main), var(--portfolio-palette-secondary-main))",
                            position: "relative",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%",
                            display: "block",
                            transform: "skew(-10deg)"
                        }
                    }}
                >
                    <Typography
                        sx={{
                            position: "relative",
                            top: "-100%",
                            left: 0,
                            padding: "30px"
                        }}
                        variant="body1"
                        color="var(--portfolio-palette-primary-contrastText)"
                    >
                        {portfolioData.home.description}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                marginTop: "30px",
            } }>
                <Typography variant="h6" color="var(--portfolio-palette-primary-contrastText)">
                    Research Interests:
                </Typography>
                {portfolioData.home.interests.map((interest: string, index: number) => (
                    <Chip
                        key={index}
                        label={interest}
                        sx={{
                            margin: "5px"
                        }}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    marginTop: "50px"
                }}
            >
                <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                    {portfolioData.home.text}
                </Typography>
            </Box>
        </>
    );
};

export default About;
