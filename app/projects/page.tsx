import React from "react";
import portfolio from "../portfolio.json";
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const ProjectsPage: React.FC = () => {
    const projects = portfolio.projects;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                {projects.title}
            </Typography>
            <Typography variant="subtitle1" component="h5" color="var(--portfolio-palette-primary-contrastText)">
                {projects.description}
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {projects.items?.map((project, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Card sx={{ display: "flex", flexDirection: "column" }}>
                            <Link
                                href={`projects/${project.slug}`}
                                style={{ textDecoration: "none", color: "inherit" }}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h5">{project.title}</Typography>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                                {project.year}
                                            </Typography>
                                            <Chip label={project.type} variant="outlined" size="small" />
                                        </Box>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {project.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProjectsPage;
