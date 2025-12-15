import { Box, Chip, Typography } from "@mui/material";
import portfolio from "../../portfolio.json";
import Image from "next/image";
import Gallery from "../../_components/Gallery";

const Talk = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const talkData = portfolio.talks?.items?.find((t) => t.slug === slug);

    return (
        <Box>
            <Typography variant="h3" component="h1" color="var(--portfolio-palette-primary-contrastText)">
                {talkData?.title}
            </Typography>
            <Chip label={talkData?.type} variant="outlined" sx={{ marginBottom: "10px" }} />
            <Typography variant="h6" color="var(--portfolio-palette-primary-contrastText)">
                {talkData?.event}
            </Typography>
            <Typography
                variant="h6"
                color="var(--portfolio-palette-primary-contrastText)"
                sx={{ marginBottom: "10px" }}
            >
                {talkData?.date}
            </Typography>
            <Box
                sx={{ width: "100%", height: "400px", position: "relative", overflow: "hidden", marginBottom: "20px" }}
            >
                <Image src={talkData?.image || ""} alt={talkData?.title || ""} fill style={{ objectFit: "cover" }} />
            </Box>
            <Typography
                variant="h6"
                color="var(--portfolio-palette-primary-contrastText)"
                sx={{ marginBottom: "10px" }}
            >
                at {talkData?.venue}
            </Typography>
            <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                {talkData?.description}
            </Typography>
            <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                Presentation Slides:
            </Typography>
            <iframe
                title={talkData?.title || "Talk Slides"}
                src={talkData?.slides || ""}
                width="100%"
                height="600px"
                className="pdf-iframe"
            ></iframe>
            <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                Gallery:
            </Typography>
            <Gallery images={talkData?.gallery || []} />
        </Box>
    );
};

export default Talk;
