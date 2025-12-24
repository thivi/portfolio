import { FC, ReactElement } from "react";
import { Box, Grid } from "@mui/material";
import PublicationButtons from "../_components/PublicationButtons";
import ListPage from "../_components/ListPage";
import HorizontalCard from "../_components/HorizontalCard";
import { Metadata } from "next";
import { Portfolio, PublicationItem, Publications } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";
import VerticalCard from "../_components/VerticalCard";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolioData.publications.title}`,
        description: portfolioData.publications.description
    };
};

const PublicationsPage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const publications: Publications = portfolioData.publications;

    return (
        <ListPage heading={publications.title} subHeading={publications.description}>
            <Grid container spacing={4}>
                {publications.items?.map((pub: PublicationItem) => (
                    <Box key={pub.slug}>
                        <Grid size={{ md: 12 }} sx={{ display: { xs: "none", sm: "block" } }}>
                            <HorizontalCard
                                heading={pub.title}
                                subHeading1={pub.publication}
                                subHeading2={pub.date}
                                imageUrl="/images/paper-placeholder.jpg"
                                tag={pub.type}
                                link={`/${publications.slug}/${pub.slug}`}
                            >
                                <PublicationButtons publication={pub} orientation="vertical" />
                            </HorizontalCard>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: { xs: "block", sm: "none" } }}>
                            <VerticalCard
                                heading={pub.title}
                                subHeading1={pub.publication}
                                subHeading2={pub.date}
                                tag={pub.type}
                                link={`/${publications.slug}/${pub.slug}`}
                                imageUrl="/images/paper-placeholder.jpg"
                            >
                                <PublicationButtons publication={pub} orientation="horizontal" />
                            </VerticalCard>
                        </Grid>
                    </Box>
                ))}
            </Grid>
        </ListPage>
    );
};

export default PublicationsPage;
