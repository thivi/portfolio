"use client";

import { createTheme, Theme } from "@mui/material";

export const theme: Theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: 'var(--font-body), sans-serif',
        h1: {
            fontFamily: 'var(--font-heading), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            fontWeight: 400,
            fontSize: "2rem",
            lineHeight: 1.167
        },
        h2: {
            fontFamily: 'var(--font-heading), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            fontSize: "1.3rem"
        },
        h3: {
            fontFamily: 'var(--font-heading), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            fontSize: "1.25rem"
        },
        h4: {
            fontFamily: 'var(--font-heading), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            fontSize: "1.2rem"
        },
        h5: {
            fontFamily: 'var(--font-heading), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            fontSize: "1.15rem"
        },
        h6: {
            fontFamily: 'var(--font-heading), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            fontSize: "1.1rem"
        },
        subtitle1: {
            fontFamily: 'var(--font-emphasis), sans-serif',
            color: "var(--portfolio-palette-text-secondary)",
            fontSize: "1.05rem"
        },
        subtitle2: {
            fontFamily: 'var(--font-emphasis), sans-serif',
            color: "var(--portfolio-palette-text-secondary)",
            fontSize: "1rem"
        },
        body1: {
            fontFamily: 'var(--font-body), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            lineHeight: 1.8,
            fontSize: "1.1rem",
        },
        body2: {
            fontFamily: 'var(--font-body), sans-serif',
            color: "var(--portfolio-palette-primary-contrastText)",
            lineHeight: 1.5,
            fontSize: "0.95rem"
        }
    },
    colorSchemes: {
        dark: {
            palette: {
                background: {
                    default: "#000814",
                },
                primary: {
                    main: "#001d3d"
                },
                secondary: {
                    main: "#003566"
                },
                primaryGradient: {
                    main: "#00a6fb",
                    second: "#ff0064"
                },
                bgGradient: {
                    main: "#000814",
                    second: "#001d3d"
                }
            }
        }
    },
    cssVarPrefix: "portfolio",
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "3rem",
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    border: "1px solid var(--portfolio-palette-primaryGradient-main)",
                    backgroundColor: "rgb(from var(--portfolio-palette-primaryGradient-main) r g b / 0.2)",
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "3em",
                    backgroundColor: "var(--portfolio-palette-bgGradient-main)",
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: "2em"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgb(from var(--portfolio-palette-bgGradient-main) rgb / 0.5)",
                    backdropFilter: "blur(1px)",
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "var(--portfolio-palette-bgGradient-second)",
                    borderRadius: "3rem",
                    backgroundImage: "none",
                    backdropFilter: "blur(5px)",
                    padding: "1rem 0"
                }
            }
        }
    }
});
