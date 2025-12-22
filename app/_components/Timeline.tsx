import { Box, Chip, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { FC, ReactElement } from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import CircularAvatar from "./CircularAvatar";
import HorizontalCard from "./HorizontalCard";
import { CardSize } from "../../constants/card";
import { Award, Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";
import { MotionDiv } from "./motion";

export interface TimelineItemData {
    heading: string;
    subHeading1?: string;
    subHeading2?: string;
    description?: string | string[];
    imageUrl?: string;
    awards?: Award[];
    projects?: string[];
    skills?: string[];
}

const Timeline: FC<{ timelineData: TimelineItemData[] }> = async ({ timelineData }): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return (
        <Box>
            {timelineData.map((data: TimelineItemData, index: number) => (
                <Box
                    key={index}
                    sx={{ marginTop: index != 0 ? "2rem" : 0, display: "flex", gap: "1rem", flexDirection: "row" }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <MotionDiv
                            initial={{ filter: "blur(5px)", opacity: 0 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            transition={{ duration: 0.2, ease: "easeIn" }}
                        >
                            <CircularAvatar src={data.imageUrl ?? ""} alt={data.heading} width={60} height={60} />
                        </MotionDiv>
                        {index != timelineData.length - 1 && (
                            <Box
                                sx={{
                                    marginTop: "2rem",
                                    width: "5px",
                                    height: "100%",
                                    backgroundColor: "rgb(from var(--portfolio-palette-text-secondary) r g b / 0.2)"
                                }}
                            />
                        )}
                    </Box>
                    <Box>
                        <MotionDiv
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.2, ease: "easeIn" }}
                        >
                            <Typography variant="h5">{data.heading}</Typography>
                            <Typography variant="subtitle1">{data.subHeading1}</Typography>
                            <Typography variant="subtitle2">{data.subHeading2}</Typography>
                        </MotionDiv>
                        {Array.isArray(data.description) ? (
                            <ul>
                                {data.description.map((point: string, pointIndex: number) => (
                                    <Typography variant="body1" sx={{ marginTop: "1rem" }} key={pointIndex}>
                                        <li>{point}</li>
                                    </Typography>
                                ))}
                            </ul>
                        ) : (
                            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
                                {data.description}
                            </Typography>
                        )}
                        {data?.awards && data.awards.length > 0 && (
                            <>
                                <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                                    Awards & Scholarships
                                </Typography>
                                <List sx={{ display: "flex", flexDirection: "row", gap: "0.5rem", flexWrap: "wrap" }}>
                                    {data.awards?.map((award: Award, awardIndex: number) => (
                                        <MotionDiv
                                            key={awardIndex}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.2, ease: "easeIn", delay: awardIndex * 0.1 }}
                                        >
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <MilitaryTechIcon sx={{ color: "gold" }} />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    color="var(--portfolio-palette-primary-contrastText)"
                                                    primary={award.name}
                                                    secondary={award.year}
                                                />
                                            </ListItem>
                                        </MotionDiv>
                                    ))}
                                </List>
                            </>
                        )}
                        {data?.projects && data.projects.length > 0 && (
                            <>
                                <Typography variant="h6" sx={{ marginTop: "1rem" }}>
                                    Projects
                                </Typography>
                                <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
                                    {data.projects?.map((projectSlug: string, projectIndex: number) => {
                                        const project = portfolioData.projects.items?.find(
                                            (p) => p.slug === projectSlug
                                        );

                                        if (!project) return null;

                                        return (
                                            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={projectIndex}>
                                                <HorizontalCard
                                                    heading={project.title}
                                                    subHeading1={project.year}
                                                    imageUrl={project.image}
                                                    link={`${portfolioData.projects.slug}/${project.slug}`}
                                                    size={CardSize.Small}
                                                />
                                            </Grid>
                                        );
                                    })}
                                </Grid>
                            </>
                        )}
                        <Box sx={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {data.skills?.map((skill: string, skillIndex: number) => (
                                <MotionDiv
                                    key={skillIndex}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.2, ease: "easeIn", delay: skillIndex * 0.1 }}
                                >
                                    <Chip label={skill} variant="outlined" />
                                </MotionDiv>
                            ))}
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Timeline;
