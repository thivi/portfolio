import { Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import PublicationButtons from "../../_components/PublicationButtons";
import DetailsPage from "../../_components/DetailsPage";
import { Metadata } from "next";
import { Portfolio, ProjectItem } from "../../../models/portfolio";
import { loadPortfolioData } from "../../../data/portfolio";
import { FC } from "react";
import { notFound } from "next/navigation";
import { Params } from "../../../models/navigation";
import Image from "next/image";
import { FEATURED_IMAGE_HEIGHT } from "../../../constants/ui";

export const generateMetadata = async ({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> => {
    const p: Params = await params;
    const portfolioData: Portfolio = await loadPortfolioData();
    const projectData: ProjectItem | undefined = portfolioData.projects?.items?.find((pub) => pub.slug === p.slug);

    return {
        title: `${projectData?.title}`,
        description: projectData?.description || portfolioData.projects.description
    };
};

export const generateStaticParams = async (): Promise<Params[]> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return (
        portfolioData.projects?.items?.map((project) => ({
            slug: project.slug
        })) || []
    );
};

export const dynamicParams: boolean = true;

const Project: FC<PageProps<"/projects/[slug]">> = async ({ params }) => {
    const p: Params = await params;
    const portfolio: Portfolio = await loadPortfolioData();
    const projectData: ProjectItem | undefined = portfolio.projects?.items?.find((pub) => pub.slug === p.slug);

    if (projectData === undefined) {
        notFound();
    }

    return (
        <DetailsPage
            heading={projectData?.title ?? ""}
            subheading1={projectData?.year}
            backHref={`/${portfolio.projects?.slug}`}
            tags={[projectData?.type ?? ""]}
        >
            <Box
                sx={{
                    width: "100%",
                    height: FEATURED_IMAGE_HEIGHT,
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "20px"
                }}
            >
                <Image
                    src={projectData?.image || ""}
                    alt={projectData?.title || ""}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </Box>
            <Typography variant="body1">{projectData?.description}</Typography>
            {projectData?.publications && projectData?.publications?.length > 0 && (
                <>
                    <Typography variant="h2" sx={{ marginTop: "2rem" }}>
                        Publications
                    </Typography>
                    <List>
                        {projectData?.publications?.map((pubSlug: string, index: number) => {
                            const publication = portfolio.publications.items?.find((p) => p.slug === pubSlug);
                            if (!publication) return null;

                            return (
                                <ListItem key={publication.slug} disablePadding>
                                    <ListItemText
                                        sx={{
                                            marginBottom: index !== projectData.publications.length - 1 ? "1rem" : 0
                                        }}
                                    >
                                        <Typography variant="h6" sx={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                                            {publication.title}
                                        </Typography>
                                        <PublicationButtons key={publication.slug} publication={publication} />
                                    </ListItemText>
                                </ListItem>
                            );
                        })}
                    </List>
                </>
            )}
            <Box sx={{ marginTop: "2rem" }}>
                {projectData?.repository && (
                    <Button
                        component="a"
                        href={projectData?.repository as string}
                        target="_blank"
                        startIcon={<CodeIcon />}
                        variant="contained"
                    >
                        Code Repository
                    </Button>
                )}
            </Box>
        </DetailsPage>
    );
};

export default Project;
