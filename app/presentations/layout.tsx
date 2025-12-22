import { Metadata, ResolvingMetadata } from "next";
import { FC, ReactElement } from "react";
import { Portfolio } from "../../models/portfolio";
import { loadPortfolioData } from "../../data/portfolio";
import { AbsoluteTemplateString } from "next/dist/lib/metadata/types/metadata-types";

export const generateMetadata = async (_params: LayoutProps<"/presentations">, parent: ResolvingMetadata ): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();
    const parentMetadata: Metadata = await parent as Metadata;
    const parentTile: string = (parentMetadata?.title as AbsoluteTemplateString)?.absolute;

    return {
        title: {
            template: `%s | ${portfolioData.presentations.title} | ${parentTile}`,
            default: portfolioData.presentations.title
        },
        description: portfolioData.presentations.description
    };
};

const Layout: FC<LayoutProps<"/presentations">> = ({ children }): ReactElement => {
    return <>{children}</>;
};

export default Layout;
