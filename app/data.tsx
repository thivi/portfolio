"use client";

import portfolioData from "./portfolio.json";
import { createContext } from "react";

export const DataContext = createContext(portfolioData);

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <DataContext.Provider value={portfolioData}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
