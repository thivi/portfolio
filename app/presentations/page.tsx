import React from "react";
import portfolio from "../portfolio.json";
import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const TalksPage: React.FC = () => {
    const talks = portfolio.presentations;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                {talks.title}
            </Typography>
            <Typography variant="subtitle1" component="h5" color="var(--portfolio-palette-primary-contrastText)">
                {talks.description}
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {talks.items?.map((talk) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={talk.slug}>
                        <Card sx={{ display: "flex", flexDirection: "column" }}>
                            <Link href={`/${talks.slug}/${talk.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}
                                    >
                                        <Image src={talk.image} alt={talk.title} fill style={{ objectFit: "cover" }} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h6">{talk.title}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {talk.event}
                                        </Typography>
                                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                            <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                                {talk.date}
                                            </Typography>
                                            <Chip label={talk.type} variant="outlined" size="small" />
                                        </Box>
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

export default TalksPage;
