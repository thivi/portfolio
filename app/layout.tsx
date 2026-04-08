import type { Metadata } from "next";
import { Box, Container, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "./_theme";
import "./style.css";
import AppHeader from "./_components/AppHeader";
import { Lexend, Exo_2, Farro } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Footer from "./_components/Footer";
import { loadPortfolioData } from "../data/portfolio";
import { Portfolio, SocialLink } from "../models/portfolio";
import { FC, ReactElement } from "react";
import { MotionDiv } from "./_components/Motion";
import { Analytics } from "@vercel/analytics/next";
import { TRANSITION_DURATION } from "../constants/ui";

export const generateMetadata = async (): Promise<Metadata> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    return {
        title: {
            template: `%s | ${portfolioData.home.title}`,
            default: portfolioData.home.title
        },
        description: portfolioData.home.description
    };
};

const headingFont: NextFontWithVariable = Lexend({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-heading"
});

const bodyFont: NextFontWithVariable = Exo_2({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-body"
});

const emphasisFont: NextFontWithVariable = Farro({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-emphasis"
});

const RootLayout: FC<LayoutProps<"/">> = async ({ children }): Promise<ReactElement> => {
    const portfolioData: Portfolio = await loadPortfolioData();

    const socials: string[] = portfolioData.home.socials
        .filter((link: SocialLink) => link.name !== "E-Mail")
        .map((link: SocialLink) => link.link);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: portfolioData.home.title,
        url: "https://www.thivi.dev",
        sameAs: [...socials]
    };

    return (
        <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} ${emphasisFont.variable}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
                }}
            />
            <body className="app-body">
                <AppRouterCacheProvider>
                    <CssBaseline />
                    <ThemeProvider theme={theme}>
                        <Container
                            sx={{
                                maxWidth: "1000px",
                                paddingTop: "2rem",
                                paddingBottom: "2rem",
                                "@media (min-width: 1200px)": {
                                    maxWidth: "1000px"
                                },
                                minHeight: "100vh",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}
                        >
                            <MotionDiv
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: TRANSITION_DURATION, ease: "easeIn" }}
                            >
                                <AppHeader portfolioData={portfolioData} />
                            </MotionDiv>
                            <Box sx={{ paddingTop: "2rem", flexGrow: 2 }}>{children}</Box>
                            <Footer />
                            <Analytics />
                        </Container>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;
