import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
    Chip,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stepper,
    Typography
} from "@mui/material";
import { FC, ReactElement } from "react";
import portfolioData from "../portfolio.json";
import Image from "next/image";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Link from "../_components/Link";

const ExperiencePage: FC = (): ReactElement => {
    const experienceData = portfolioData.experience;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                Experience
            </Typography>
            <Typography variant="subtitle1" component="h5" color="var(--portfolio-palette-primary-contrastText)">
                {experienceData.description}
            </Typography>
            <Stepper orientation="vertical">
                {experienceData.items?.map((exp, index) => (
                    <Box key={index}>
                        <Image
                            className="institute-image"
                            src={exp.image}
                            alt={exp.institution}
                            width={40}
                            height={40}
                        />
                        <Typography variant="h6" color="var(--portfolio-palette-primary-contrastText)">
                            {exp.position}
                        </Typography>
                        <Typography variant="subtitle1" color="var(--portfolio-palette-primary-contrastText)">
                            {exp.institution}
                        </Typography>
                        <Typography variant="subtitle2" color="var(--portfolio-palette-primary-contrastText)">
                            {exp.duration}
                        </Typography>
                        <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                            {Array.isArray(exp.description) ? (
                                <ul>
                                    {exp.description.map((point, pointIndex) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                </ul>
                            ) : (
                                exp.description
                            )}
                        </Typography>
                        <Typography variant="h6" color="var(--portfolio-palette-primary-contrastText)">
                            Awards & Scholarships
                        </Typography>
                        <List sx={{ display: "flex", flexDirection: "row", gap: "10px", flexWrap: "wrap" }}>
                            {exp.awards?.map((award, awardIndex) => (
                                <ListItem key={awardIndex}>
                                    <ListItemAvatar>
                                        <MilitaryTechIcon color="action" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        color="var(--portfolio-palette-primary-contrastText)"
                                        primary={award.name}
                                        secondary={award.year}
                                    />
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="h6" color="var(--portfolio-palette-primary-contrastText)">
                            Projects
                        </Typography>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px", flexWrap: "wrap" }}>
                            {exp.projects?.map((projectSlug, projectIndex) => {
                                const project = portfolioData.projects.items?.find((p) => p.slug === projectSlug);
                                if (!project) return null;

                                return (
                                    <Card key={projectIndex} sx={{ marginBottom: "10px", maxWidth: "400px" }}>
                                        <Link
                                            href={`projects/${project.slug}`}
                                            style={{ textDecoration: "none", color: "inherit" }}
                                        >
                                            <CardActionArea sx={{ display: "flex" }}>
                                                <CardMedia
                                                    component={Image}
                                                    image={project.image}
                                                    alt={project.title}
                                                    width={60}
                                                    height={30}
                                                />
                                                <Box sx={{ padding: "10px" }}>
                                                    <Typography
                                                        variant="h6"
                                                        color="var(--portfolio-palette-primary-contrastText)"
                                                    >
                                                        {project.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="var(--portfolio-palette-primary-contrastText)"
                                                    >
                                                        {project.description}
                                                    </Typography>
                                                </Box>
                                            </CardActionArea>
                                        </Link>
                                    </Card>
                                );
                            })}
                        </Box>
                        <Box>
                            {exp.skills?.map((skill, skillIndex) => (
                                <Chip
                                    key={skillIndex}
                                    label={skill}
                                    sx={{ marginRight: "5px", marginBottom: "5px" }}
                                    variant="outlined"
                                />
                            ))}
                        </Box>
                    </Box>
                ))}
            </Stepper>
        </Box>
    );
};

export default ExperiencePage;
