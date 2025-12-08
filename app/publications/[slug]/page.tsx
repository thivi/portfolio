import { Box, Chip, Typography } from "@mui/material";
import portfolio from "../../portfolio.json";
import Citation from "../../_components/Citation";
import LinkIcon from "@mui/icons-material/Link";
import DatasetLinkedIcon from "@mui/icons-material/DatasetLinked";
import CodeIcon from "@mui/icons-material/Code";

const Publication = async ({ params }: { params: { slug: string } }) => {
    const p = await params;
    const publicationData = portfolio.publications?.items?.find((pub) => pub.slug === p.slug);

    return (
        <Box>
            <Typography variant="h3" component="h1" color="var(--portfolio-palette-primary-contrastText)">
                {publicationData?.title}
            </Typography>
            <Typography
                variant="subtitle1"
                color="var(--portfolio-palette-primary-contrastText)"
                sx={{ marginBottom: "10px" }}
            >
                {publicationData?.publication}, {publicationData?.date}
            </Typography>
            <Typography variant="subtitle2" sx={{ color: "text.secondary", marginBottom: "10px" }}>
                {publicationData?.authors?.join(", ")}
            </Typography>
            <Box>
                <Chip
                    label="Link"
                    component="a"
                    href={publicationData?.link as string}
                    clickable
                    target="_blank"
                    icon={<LinkIcon />}
                />
                <Citation citationText={(publicationData?.citation as string) || "Citation not available."} />
                <Chip
                    label="Code Repository"
                    component="a"
                    href={publicationData?.codeRepository as string}
                    clickable
                    target="_blank"
                    icon={<CodeIcon />}
                />
                <Chip
                    label="Data Repository"
                    component="a"
                    href={publicationData?.dataRepository as string}
                    clickable
                    target="_blank"
                    icon={<DatasetLinkedIcon />}
                />
            </Box>
            <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                {publicationData?.abstract}
            </Typography>
            <Box>
                <Chip label={`${publicationData?.type} Paper`} variant="outlined" />
                {publicationData?.preprint && <Chip label="Preprint" variant="outlined" sx={{ marginLeft: "10px" }} />}
            </Box>
        </Box>
    );
};

export default Publication;
