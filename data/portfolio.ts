import { Meta, Portfolio } from "../models/portfolio";

export const loadPortfolioData = async () => {
    const metaData: Meta = await import("./jsons/meta.json");
    const data: Portfolio = {} as Portfolio;

    for (const menu of metaData.menus) {
        const menuData = await import(`./jsons/${ menu }.json`);
        data[ menu as keyof Portfolio ] = menuData.default;
    };

    return data;
};
