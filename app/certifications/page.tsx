import { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import ListPage from "../_components/ListPage";
import HorizontalCard from "../_components/HorizontalCard";
import { Metadata } from "next";
import { CertificationItem, Certifications, Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolioData.certifications.title}`,
        description: portfolioData.certifications.description
    };
};

const CertificationsPage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const certifications: Certifications = portfolioData.certifications;

    return (
        <ListPage heading={certifications.title} subHeading={certifications.description}>
            <Grid container spacing={4}>
                {certifications.items?.map((certification: CertificationItem, index: number) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <HorizontalCard
                            heading={certification.name}
                            subHeading1={certification.issuer}
                            subHeading2={certification.date}
                            imageUrl={certification.image}
                            tag={certification.credentialID}
                            link={ certification.credentialURL }
                            linkTarget="_blank"
                        />
                    </Grid>
                ))}
            </Grid>
        </ListPage>
    );
};

export default CertificationsPage;
