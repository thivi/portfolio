import React, { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import ListPage from "../_components/ListPage";
import VerticalCard from "../_components/VerticalCard";
import { Metadata } from "next";
import { Portfolio, ProjectItem, Projects } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: `${portfolioData.projects.title} | ${portfolioData.home.title}`,
        description: portfolioData.projects.description
    };
};

const truncateDescription = (description: string, maxLength: number): string => {
    if (description.length <= maxLength) {
        return description;
    }

    return description.slice(0, maxLength) + "...";
};

const ProjectsPage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const projects: Projects = portfolioData.projects;

    return (
        <ListPage heading={projects.title} subHeading={projects.description}>
            <Grid container spacing={4}>
                {projects.items?.map((project: ProjectItem, index: number) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <VerticalCard
                            heading={project.title}
                            subHeading1={project.year}
                            subHeading2={truncateDescription(project.description, 150)}
                            tag={project.type}
                            link={`/${projects.slug}/${project.slug}`}
                            imageUrl={project.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </ListPage>
    );
};

export default ProjectsPage;
