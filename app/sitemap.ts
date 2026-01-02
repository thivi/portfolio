import type { MetadataRoute } from "next";
import { loadPortfolioData } from "../data/portfolio";
import { Portfolio } from "../models/portfolio";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const data: Portfolio = await loadPortfolioData();
    const sitemapEntries: MetadataRoute.Sitemap = [];
    const baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(data).forEach(([ _, section ]: [ string, typeof data[ keyof Portfolio ] ]) => {
        const entry: MetadataRoute.Sitemap[ number ] = {
            url: `${baseUrl}/${ section.slug }`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
        };

        sitemapEntries.push(entry);

        if ("items" in section) {
            section.items?.forEach((item: typeof section.items[ number ]) => {
                if ("slug" in item) {
                    const entry: MetadataRoute.Sitemap[ number ] = {
                        url: `${baseUrl}/${ section.slug }/${ item.slug }`,
                        lastModified: new Date().toISOString(),
                        changeFrequency: "monthly",
                        ...("image" in section && {
                            images: [
                                section.image as string ]
                        })
                    };

                    sitemapEntries.push(entry);
                }
            });
        }
    });

    return sitemapEntries;

};

export default sitemap;
