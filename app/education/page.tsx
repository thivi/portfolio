import { FC, ReactElement } from "react";
import ListPage from "../_components/ListPage";
import Timeline, { TimelineItemData } from "../_components/Timeline";
import { Metadata } from "next";
import { Education, EducationItem, Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: portfolioData.education.title,
        description: portfolioData.education.description
    };
};

const EducationPage: FC = async (): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const educationData: Education = portfolioData.education;

    const timelineData: TimelineItemData[] = educationData.items.map((edu: EducationItem) => ({
        heading: edu.degree,
        subHeading1: edu.grade,
        subHeading2: edu.institution,
        subHeading3: edu.duration,
        description: edu.description,
        imageUrl: edu.image,
        awards: edu.awards,
        projects: edu.projects,
        skills: edu.skills
    }));

    return (
        <ListPage heading={educationData.title} subHeading={educationData.description}>
            <Timeline timelineData={timelineData} />
        </ListPage>
    );
};

export default EducationPage;
