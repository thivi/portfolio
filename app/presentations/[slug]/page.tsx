import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Gallery from "../../_components/Gallery";
import DetailsPage from "../../_components/DetailsPage";
import { Metadata } from "next";
import { FC, ReactElement } from "react";
import { Portfolio, PresentationItem } from "../../../models/portfolio";
import { notFound } from "next/navigation";
import { Params } from "../../../models/navigation";
import { loadPortfolioData } from "../../../data/portfolio";

export const generateMetadata = async ({ params }: PageProps<"/presentations/[slug]">): Promise<Metadata> => {
    const p: Params = await params;
    const portfolio: Portfolio = await loadPortfolioData();
    const talkData: PresentationItem | undefined = portfolio.presentations?.items?.find((t) => t.slug === p.slug);

    return {
        title: `${talkData?.title}`,
        description: talkData?.description || portfolio.presentations.description
    };
}

const Talk: FC<PageProps<"/presentations/[slug]">> = async ({ params }): Promise<ReactElement> => {
    const p: Params = await params;
    const portfolio: Portfolio = await loadPortfolioData();
    const talkData: PresentationItem | undefined = portfolio.presentations?.items?.find((t) => t.slug === p.slug);

    if (talkData === undefined) {
        notFound();
    }

    return (
        <DetailsPage
            heading={talkData?.title || ""}
            subheading1={`${talkData?.event || ""}, ${talkData?.venue || ""}`}
            subheading2={talkData?.date || ""}
            tags={ [ talkData?.type || "" ] }
            backHref={`/${portfolio.presentations?.slug}`}
        >
            <Box
                sx={{ width: "100%", height: "400px", position: "relative", overflow: "hidden", marginBottom: "20px" }}
            >
                <Image src={talkData?.image || ""} alt={talkData?.title || ""} fill style={{ objectFit: "cover" }} />
            </Box>
            <Typography variant="body1">{talkData?.description}</Typography>
            <Typography variant="h2" sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Presentation Slides
            </Typography>
            <iframe
                title={talkData?.title || "Talk Slides"}
                src={talkData?.slides || ""}
                width="100%"
                height="600px"
                className="pdf-iframe"
            ></iframe>
            <Typography variant="h2" sx={{ marginTop: "2rem", marginBottom: "1rem" }}>
                Gallery
            </Typography>
            <Gallery images={talkData?.gallery || []} />
        </DetailsPage>
    );
};

export default Talk;
