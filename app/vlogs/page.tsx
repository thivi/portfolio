import React from "react";
import portfolio from "../portfolio.json";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const VlogsPage: React.FC = () => {
    const vlogs = portfolio.vlogs;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                {vlogs.title}
            </Typography>
            <Typography variant="subtitle1" component="h5" color="var(--portfolio-palette-primary-contrastText)">
                {vlogs.description}
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {vlogs.items?.map((vlog, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Card sx={{ display: "flex", flexDirection: "column" }}>
                            <Link href={vlog.link} style={{ textDecoration: "none", color: "inherit" }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}
                                    >
                                        <Image src={vlog.image} alt={vlog.title} fill style={{ objectFit: "cover" }} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h5">{vlog.title}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {vlog.date}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {vlog.excerpt}
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

export default VlogsPage;
