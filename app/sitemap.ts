import type { MetadataRoute } from "next";
import { loadPortfolioData } from "../data/portfolio";
import { Portfolio } from "../models/portfolio";
import { BASE_URL } from "../constants/path";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const data: Portfolio = await loadPortfolioData();
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(data).forEach(([ _, section ]: [ string, typeof data[ keyof Portfolio ] ]) => {
        const entry: MetadataRoute.Sitemap[ number ] = {
            url: `${BASE_URL}/${ section.slug }`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
        };

        sitemapEntries.push(entry);

        if ("items" in section) {
            section.items?.forEach((item: typeof section.items[ number ]) => {
                if ("slug" in item) {
                    const entry: MetadataRoute.Sitemap[ number ] = {
                        url: `${BASE_URL}/${ section.slug }/${ item.slug }`,
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
