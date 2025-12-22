import { Box, Button, Typography } from "@mui/material";
import Citation from "../../_components/Citation";
import LinkIcon from "@mui/icons-material/Link";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import CodeIcon from "@mui/icons-material/Code";
import DetailsPage from "../../_components/DetailsPage";
import Link from "../../_components/Link";
import { Portfolio, PublicationItem } from "../../../models/portfolio";
import { loadPortfolioData } from "../../../data/portfolio";
import { notFound } from "next/navigation";
import { FC, ReactElement } from "react";
import { Metadata } from "next";
import { Params } from "../../../models/navigation";

export const generateMetadata = async ({ params }: PageProps<"/publications/[slug]">): Promise<Metadata> => {
    const p: Params = await params;
    const portfolioData: Portfolio = await loadPortfolioData();
    const publicationData: PublicationItem | undefined = portfolioData.publications?.items?.find((pub) => pub.slug === p.slug);

    return {
        title: `${publicationData?.title}`,
        description: publicationData?.abstract || portfolioData.publications.description || ""
    };
}

export const generateStaticParams = async (): Promise<Params[]> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return portfolioData.publications?.items?.map((pub) => ({
        slug: pub.slug
    })) || [];
}

const Publication: FC<PageProps<"/publications/[slug]">> = async ({ params }): Promise<ReactElement> => {
    const p: Params = await params;
    const portfolioData: Portfolio = await loadPortfolioData();
    const publicationData: PublicationItem | undefined = portfolioData.publications?.items?.find((pub) => pub.slug === p.slug);

    if (publicationData === undefined) {
        notFound();
    }

    return (
        <DetailsPage
            heading={publicationData?.title}
            subheading1={publicationData?.authors.join(", ")}
            subheading2={`${publicationData?.publication}${publicationData?.publication && ", "}${
                publicationData?.date
            }`}
            tags={ [ publicationData?.type || "" ] }
            backHref={`/${portfolioData.publications?.slug}`}
        >
            <Typography variant="body1">{publicationData?.abstract}</Typography>
            <Box sx={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Button
                    component={Link}
                    href={publicationData?.link as string}
                    target="_blank"
                    startIcon={<LinkIcon />}
                    variant="contained"
                >
                    Link
                </Button>
                <Citation citationText={(publicationData?.citation as string) || "Citation not available."} />
                {publicationData?.codeRepository && (
                    <Button
                        component={Link}
                        href={publicationData?.codeRepository as string}
                        target="_blank"
                        startIcon={<CodeIcon />}
                        variant="contained"
                    >
                        Code Repository
                    </Button>
                )}
                {publicationData?.dataRepository && (
                    <Button
                        component={Link}
                        href={publicationData?.dataRepository as string}
                        target="_blank"
                        startIcon={<DatasetLinkedIcon />}
                        variant="contained"
                    >
                        Data Repository
                    </Button>
                )}
            </Box>
        </DetailsPage>
    );
};

export default Publication;
