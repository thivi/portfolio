import { FC, ReactElement } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListPage from "../_components/ListPage";
import VerticalCard from "../_components/VerticalCard";
import HorizontalCard from "../_components/HorizontalCard";
import { Metadata } from "next";
import { Blogs, Portfolio, BlogItem, Article } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolioData.blogs.title} | ${portfolioData.home.title}`,
        description: portfolioData.blogs.description
    };
}

const BlogsPage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const blogs: Blogs = portfolioData.blogs;

    return (
        <ListPage heading={blogs.title} subHeading={blogs.description}>
            <Typography variant="h2" sx={{ marginBottom: "1rem" }}>
                Personal Blogs
            </Typography>
            <Grid container spacing={4}>
                {blogs.blogs?.map((blog: BlogItem, blogIndex: number) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={blogIndex}>
                        <HorizontalCard
                            heading={blog.name}
                            link={blog.link}
                            linkTarget="_blank"
                            key={blogIndex}
                            imageUrl={blog.image ?? ""}
                            subHeading1={blog.description}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h2" sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Articles Contributed to Other Sites
            </Typography>
            <Grid container spacing={4}>
                {blogs.articles?.map((blog: Article, index: number) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <VerticalCard
                            heading={blog.title}
                            subHeading1={blog.date}
                            imageUrl={blog.image ?? ""}
                            link={blog.link}
                            linkTarget="_blank"
                        />
                    </Grid>
                ))}
            </Grid>
        </ListPage>
    );
};

export default BlogsPage;
