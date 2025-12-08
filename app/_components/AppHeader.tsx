"use client";

import { AppBar, Button, Toolbar } from "@mui/material";
import Link from "./Link";
import { useContext } from "react";
import { DataContext } from "../data";

const AppHeader: React.FC = (): React.ReactElement => {
    const portfolioData = useContext(DataContext);

    return (
        <AppBar
            enableColorOnDark
            position="static"
            sx={{
                borderRadius: "200px",
                backdropFilter: "blur(1px)",
                backgroundColor: "rgb(from var(--portfolio-palette-AppBar-darkBg) r g b / 0.3)",
                color: "white"
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between"
                }}
            >
                {Object.entries(portfolioData).map(([key, value]) => (
                    <Button
                        key={key}
                        component={Link}
                        href={`/${value.slug.toLowerCase()}`}
                        variant="text"
                        sx={{
                            color: "var(--portfolio-palette-AppBar-darkColor)"
                        }}
                    >
                        {value?.title ?? key}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;
