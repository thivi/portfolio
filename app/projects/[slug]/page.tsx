import { Box, Chip, List, Typography } from "@mui/material";
import portfolio from "../../portfolio.json";
import CodeIcon from "@mui/icons-material/Code";
import PublicationItem from "../../_components/PublicationItem";

const Project = async ({ params }: { params: { slug: string } }) => {
    const p = await params;
    const projectData = portfolio.projects?.items?.find((pub) => pub.slug === p.slug);

    return (
        <Box>
            <Typography variant="h3" component="h1" color="var(--portfolio-palette-primary-contrastText)">
                {projectData?.title}
            </Typography>
            <Typography
                variant="subtitle1"
                color="var(--portfolio-palette-primary-contrastText)"
                sx={{ marginBottom: "10px" }}
            >
                {projectData?.year}
            </Typography>
            <Box>
                {projectData?.repository && (
                    <Chip
                        label="Code Repository"
                        component="a"
                        href={projectData?.repository as string}
                        clickable
                        target="_blank"
                        icon={<CodeIcon />}
                    />
                )}
            </Box>
            <Typography variant="body1" color="var(--portfolio-palette-primary-contrastText)">
                {projectData?.description}
            </Typography>
            <Box>
                <Chip label={projectData?.type} variant="outlined" />
            </Box>
            <Typography variant="h5" component="h2" color="var(--portfolio-palette-primary-contrastText)" sx={{ marginTop: "20px" }}>
                Publications
            </Typography>
            <List>
                {projectData?.publications?.map((pubSlug) => {
                    const publication = portfolio.publications.items?.find((p) => p.slug === pubSlug);
                    if (!publication) return null;

                    return <PublicationItem key={publication.slug} publication={publication} />;
                })}
            </List>
        </Box>
    );
};

export default Project;
