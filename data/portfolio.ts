import { Portfolio } from "../models/portfolio";

export const loadPortfolioData = async () => {
    const data = await import("../app/portfolio.json");
    const dataTyped: Portfolio = data.default as Portfolio;

    return dataTyped;
};
