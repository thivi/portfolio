import React from "react";
import portfolio from "../portfolio.json";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Link from "next/link";

const BlogsPage: React.FC = () => {
    const blogs = portfolio.blogs;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                {blogs.title}
            </Typography>
            <Typography variant="subtitle1" component="h5" color="var(--portfolio-palette-primary-contrastText)">
                {blogs.description}
            </Typography>
            <Typography
                variant="h6"
                component="h6"
                color="var(--portfolio-palette-primary-contrastText)"
                sx={{ marginTop: "10px" }}
            >
                I have been blogging on cricket and tech on these sites.
            </Typography>
            <Box sx={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {blogs.blogs?.map((blog, blogIndex) => (
                    <Card key={blogIndex} sx={{ marginBottom: "10px", maxWidth: "400px" }}>
                        <Link href={blog?.link} style={{ textDecoration: "none", color: "inherit" }}>
                            <CardActionArea sx={{ display: "flex" }}>
                                <CardMedia
                                    component={Image}
                                    image={blog.image}
                                    alt={blog.name}
                                    width={60}
                                    height={30}
                                />
                                <Box sx={{ padding: "10px" }}>
                                    <Typography variant="h6" color="var(--portfolio-palette-primary-contrastText)">
                                        {blog.name}
                                    </Typography>
                                    <Typography variant="body2" color="var(--portfolio-palette-primary-contrastText)">
                                        {blog.description}
                                    </Typography>
                                </Box>
                            </CardActionArea>
                        </Link>
                    </Card>
                ))}
            </Box>
            <Typography variant="h4" component="h4" color="var(--portfolio-palette-primary-contrastText)" sx={ { marginTop: "20px" } }>
                Articles I contributed to other sites
            </Typography>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {blogs.articles?.map((blog, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <Card sx={{ display: "flex", flexDirection: "column" }}>
                            <Link href={blog.link} style={{ textDecoration: "none", color: "inherit" }}>
                                <CardActionArea>
                                    <CardMedia
                                        sx={{
                                            width: "100%",
                                            height: "200px",
                                            position: "relative",
                                            overflow: "hidden"
                                        }}
                                    >
                                        <Image src={blog.image} alt={blog.title} fill style={{ objectFit: "cover" }} />
                                    </CardMedia>
                                    <CardContent>
                                        <Typography variant="h5">{blog.title}</Typography>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {blog.date}
                                        </Typography>
                                        <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
                                            {blog.excerpt}
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

export default BlogsPage;
