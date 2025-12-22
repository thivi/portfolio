import React, { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import ListPage from "../_components/ListPage";
import VerticalCard from "../_components/VerticalCard";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Metadata } from "next";
import { Article, Portfolio, Vlogs } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolioData.vlogs.title} | ${portfolioData.home.title}`,
        description: portfolioData.vlogs.description
    };
};

const VlogsPage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const vlogs: Vlogs = portfolioData.vlogs;

    return (
        <ListPage heading={vlogs.title} subHeading={vlogs.description}>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {vlogs.items?.map((vlog: Article, index: number) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <VerticalCard
                            heading={vlog.title}
                            subHeading1={vlog.date}
                            imageUrl={vlog.image}
                            link={vlog.link}
                            icon={<PlayArrowIcon sx={{ height: "4rem", width: "4rem" }} />}
                        />
                    </Grid>
                ))}
            </Grid>
        </ListPage>
    );
};

export default VlogsPage;
