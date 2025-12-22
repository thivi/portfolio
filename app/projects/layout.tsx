import { Metadata, ResolvingMetadata } from "next";
import { FC, ReactElement } from "react";
import { Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";
import { AbsoluteTemplateString } from "next/dist/lib/metadata/types/metadata-types";

export const generateMetadata = async (_params: LayoutProps<"/projects">, parent: ResolvingMetadata ): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const parentMetadata: Metadata = await parent as Metadata;
    const parentTile: string = (parentMetadata?.title as AbsoluteTemplateString)?.absolute;

    return {
        title: {
            template: `%s | ${portfolioData.projects.title} | ${parentTile}`,
            default: portfolioData.projects.title
        },
        description: portfolioData.projects.description
    };
};

const Layout: FC<LayoutProps<"/projects">> = ({ children }): ReactElement => {
    return <>{children}</>;
};

export default Layout;
