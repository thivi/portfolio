import React from "react";
import portfolio from "../portfolio.json";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const CertificationsPage: React.FC = () => {
    const certifications = portfolio.certifications;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                {certifications.title}
            </Typography>
            <Typography variant="subtitle1" component="h5" color="var(--portfolio-palette-primary-contrastText)">
                {certifications.description}
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {certifications.items?.map((certification, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Card sx={{ display: "flex", flexDirection: "column" }}>
                            <Link href={certification.credentialURL} style={{ textDecoration: "none", color: "inherit" }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}
                                    >
                                        <Image src={certification.image} alt={certification.name} fill style={{ objectFit: "cover" }} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h5">{certification.name}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {certification.issuer} ({certification.credentialID})
                                        </Typography>
                                        <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                                            {certification.date}
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

export default CertificationsPage;
