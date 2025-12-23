import { Metadata } from "next";
import { Portfolio, Skill } from "../models/portfolio";
import { loadPortfolioData } from "../data/portfolio";
import { FC, ReactElement } from "react";
import { Box, IconButton, Chip, Typography, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";
import { MotionInView, MotionDiv, MotionH1, MotionSpan } from "./_components/Motion";
import SkillIcon, { SkillIconType } from "./_components/SkillIcon";

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
        case "e-mail":
            return <EmailIcon sx={{ color: "white" }} />;
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
                    <MotionDiv
                        initial={{ filter: "blur(10px)", opacity: 0 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <Box sx={{ width: "200px", height: "200px", position: "relative" }}>
                            <Image
                                src="/images/placeholder-profile.jpg"
                                alt="Profile Picture"
                                fill
                                objectFit="contain"
                                style={{ borderRadius: "50%" }}
                            />
                        </Box>
                    </MotionDiv>
                </Box>

                <Typography
                    component={MotionH1}
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
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    {portfolioData.home.title.split("").map((char: string, index: number) => (
                        <MotionSpan
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.05, ease: "easeOut" }}
                        >
                            {char}
                        </MotionSpan>
                    ))}
                </Typography>

                <Box sx={{ marginTop: "1rem", display: "flex", flexDirection: "row", gap: "0.5rem" }}>
                    {portfolioData.home.socials.map((social, index: number) => (
                        <MotionDiv
                            key={index}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2, delay: index * 0.2, ease: "easeOut" }}
                        >
                            <IconButton component="a" href={social.link} target="_blank" aria-label={social.name}>
                                {getIcon(social.name)}
                            </IconButton>
                        </MotionDiv>
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
                                opacity: 0.1,
                                zIndex: -1
                            }
                        }}
                    >
                        <MotionDiv
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
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
                                {portfolioData.home.salutation}<br/>
                                {portfolioData.home.description}
                            </Typography>
                        </MotionDiv>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "30px"
                        }}
                    >
                        <Typography variant="h6">Topics of Interest</Typography>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
                            {portfolioData.home.interests.map((interest: string, index: number) => (
                                <MotionDiv
                                    key={index}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.2, delay: index * 0.2, ease: "easeOut" }}
                                >
                                    <Chip label={interest} variant="outlined" />
                                </MotionDiv>
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
                <MotionDiv
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                >
                    <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                        {portfolioData.home.intro}
                    </Typography>
                    <Box sx={{ marginTop: "2rem" }}>
                        <Typography variant="h2">My Skill Stack</Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                                gap: "2rem",
                                marginTop: "1rem"
                            }}
                        >
                            {portfolioData.home.skills.map((skill: Skill, index: number) => (
                                <MotionInView
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ ease: "easeIn", duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Box
                                        sx={{
                                            padding: "1.5rem",
                                            textAlign: "center",
                                            borderRadius: "3rem",
                                            backdropFilter: "blur(2px)",
                                            height: "100%",
                                            "&::before": {
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
                                                opacity: 0.1,
                                                zIndex: -1
                                            }
                                        }}
                                    >
                                        <SkillIcon
                                            icon={skill.icon as SkillIconType}
                                            sx={{
                                                fontSize: "3rem",
                                                color: "var(--portfolio-palette-primary-contrastText)"
                                            }}
                                        />
                                        <Typography variant="h6" sx={{ marginTop: "0.5rem" }}>
                                            {skill.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
                                            {skill.description}
                                        </Typography>
                                    </Box>
                                </MotionInView>
                            ))}
                        </Box>
                    </Box>
                </MotionDiv>
            </Box>
        </Grid>
    );
};

export default Home;
