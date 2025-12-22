import { FC, ReactElement } from "react";
import { Grid } from "@mui/material";
import PublicationButtons from "../_components/PublicationButtons";
import ListPage from "../_components/ListPage";
import HorizontalCard from "../_components/HorizontalCard";
import { Metadata } from "next";
import { Portfolio, PublicationItem, Publications } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

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
                    <Grid size={{ md: 12 }} key={pub.slug}>
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
                ))}
            </Grid>
        </ListPage>
    );
};

export default PublicationsPage;
