import { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import ListPage from "../_components/ListPage";
import VerticalCard from "../_components/VerticalCard";
import { Metadata } from "next";
import { Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolio: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolio.presentations.title}`,
        description: portfolio.presentations.description
    };
};

const PresentationsPage: FC = async (): Promise<ReactElement> => {
    const portfolio: Portfolio = await loadPortfolioData();

    return (
        <ListPage heading={portfolio.presentations.title} subHeading={portfolio.presentations.description}>
            <Grid container spacing={4}>
                {portfolio.presentations.items?.map((talk) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={talk.slug}>
                        <VerticalCard
                            heading={talk.title}
                            subHeading1={ talk.event }
                            subHeading2={ talk.date }
                            imageUrl={talk.image}
                            tag={talk.type}
                            link={`/${portfolio.presentations.slug}/${talk.slug}`}
                        />
                    </Grid>
                ))}
            </Grid>
        </ListPage>
    );
};

export default PresentationsPage;
