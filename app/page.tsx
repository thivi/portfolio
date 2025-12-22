import { Metadata } from "next";
import { Portfolio } from "../models/portfolio";
import { loadPortfolioData } from "../data/portfolio";
import { FC, ReactElement } from "react";
import { Box, IconButton, Chip, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";

const getIcon = (name: string): ReactElement => {
    switch (name.toLocaleLowerCase()) {
        case "github":
            return <GitHubIcon sx={{ color: "white" }} />;
        case "linkedin":
            return <LinkedInIcon sx={{ color: "#0a66c2" }} />;
        case "google scholar":
            return <Image src="/images/icons/scholar.png" alt="Google Scholar" height={25} width={25} />;
        case "orcid":
            return <Image src="/images/icons/orcid.png" alt="ORCiD" height={25} width={25} />;
        default:
            return <></>;
    }
};
export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolioData.home.title}`,
        description: portfolioData.home.description
    };
};

const Home: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return (
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 5, lg: 5 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-start", marginBottom: "1rem" }}>
                    <Box sx={{ width: "200px", height: "200px", position: "relative" }}>
                        <Image
                            src="/images/placeholder-profile.jpg"
                            alt="Profile Picture"
                            fill
                            objectFit="contain"
                            style={{ borderRadius: "50%" }}
                        />
                    </Box>
                </Box>
                <Typography
                    component="h1"
                    sx={{
                        color: "transparent",
                        background:
                            "linear-gradient(45deg, var(--portfolio-palette-primaryGradient-main), var(--portfolio-palette-primaryGradient-second))",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontFamily: "var(--font-heading), var(--font-noto-sans), sans-serif",
                        fontWeight: 700,
                        lineHeight: 1.0,
                        fontSize: "3rem",
                        filter: "drop-shadow(0px 0px 5px var(--portfolio-palette-primary-dark))"
                    }}
                >
                    {portfolioData.home.title}
                </Typography>
                <Box sx={{ marginTop: "1rem" }}>
                    {portfolioData.home.socials.map((social, index: number) => (
                        <IconButton
                            key={index}
                            component="a"
                            href={social.link}
                            target="_blank"
                            aria-label={social.name}
                            sx={{ marginRight: "0.5rem" }}
                        >
                            {getIcon(social.name)}
                        </IconButton>
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
                            marginTop: "0rem",
                            backdropFilter: "blur(2px)",
                            position: "relative",
                            height: "-webkit-fill-available",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
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
                        <Typography
                            sx={{
                                position: "relative",
                                top: 0,
                                left: 0,
                                padding: "30px",
                                fontFamily: "var(--font-emphasis), sans-serif",
                                textAlign: "center",
                                height: "fit-content",
                                fontSize: "1.1rem",
                                lineHeight: 1.6
                            }}
                            variant="body1"
                            color="var(--portfolio-palette-primary-contrastText)"
                        >
                            {portfolioData.home.description}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "30px"
                        }}
                    >
                        <Typography variant="h6">Research Interests</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                            {portfolioData.home.interests.map((interest: string, index: number) => (
                                <Chip key={index} label={interest} variant="outlined" />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Box
                sx={{
                    marginTop: "2rem"
                }}
            >
                <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                    {portfolioData.home.text}
                </Typography>
            </Box>
        </Grid>
    );
};

export default Home;
