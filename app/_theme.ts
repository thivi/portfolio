"use client"
import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
    cssVariables: true,
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    default: "#121212",
                },
                primary: {
                    main: "#1D5450"
                },
                secondary: {
                    main: "#248680"
                },
                AppBar: {
                    darkBg: "rgba(var(--portfolio-palette-primary-main), 0.8)",
                    darkColor: "#FFFFFF"
                }
            }
        }
    },
    cssVarPrefix: "portfolio",
    components: {
    }
});
