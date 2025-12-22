import { FC, ReactElement } from "react";
import Timeline, { TimelineItemData } from "../_components/Timeline";
import ListPage from "../_components/ListPage";
import { Metadata } from "next";
import { Experience, ExperienceItem, Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: portfolioData.experience.title,
        description: portfolioData.experience.description
    };
}

const ExperiencePage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const experienceData: Experience = portfolioData.experience;

    const timelineData: TimelineItemData[] = experienceData.items.map((exp: ExperienceItem) => ({
        heading: exp.position,
        subHeading1: exp.institution,
        subHeading2: exp.duration,
        description: exp.description,
        imageUrl: exp.image,
        awards: exp.awards,
        projects: exp.projects,
        skills: exp.skills
    }));

    return (
        <ListPage heading={ experienceData.title } subHeading={ experienceData.description }>
            <Timeline timelineData={ timelineData } />
        </ListPage>
    );
};

export default ExperiencePage;
