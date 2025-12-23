"use client";

import {
    AppBar,
    Button,
    SxProps,
    Toolbar,
    IconButton,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    SwipeableDrawer
} from "@mui/material";
import { usePathname } from "next/navigation";
import { FC, ReactElement, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { TABLET_BREAKPOINT } from "../../constants/ui";
import { Portfolio, PortfolioPage } from "../../models/portfolio";
import Link from "next/link";

const buttonStyle: SxProps = {
    filter: "drop-shadow(0px 0px 2px var(--portfolio-palette-primary-dark))",
    color: "transparent",
    WebkitBackgroundClip: "text!important",
    backgroundClip: "text!important",
    background:
        "linear-gradient(45deg, var(--portfolio-palette-primaryGradient-main), var(--portfolio-palette-primaryGradient-second))"
};

const activeState: SxProps = {
    ...buttonStyle,
    fontWeight: "700"
};

interface AppHeaderProps {
    portfolioData: Portfolio;
}

const AppHeader: FC<AppHeaderProps> = ({ portfolioData }): ReactElement => {
    const currentPathName: string = usePathname();
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleDrawerOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setOpenDrawer(true);
    };

    const handleDrawerClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        setOpenDrawer(false);
    };

    return (
        <>
            <AppBar
                enableColorOnDark
                position="static"
                sx={{
                    [`@media (max-width: ${TABLET_BREAKPOINT}px)`]: {
                        display: "none"
                    },
                    borderRadius: "var(--portfolio-shape-borderRadius)",
                    backdropFilter: "blur(1px)",
                    backgroundImage:
                        "linear-gradient(220deg, rgb(from var(--portfolio-palette-primaryGradient-second)" +
                        " r g b / 0.1), rgb(from var(--portfolio-palette-primaryGradient-main) r g b / 0.1))",
                    color: "var(--portfolio-palette-primary-contrastText)",
                    backgroundColor: "transparent"
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    {Object.entries(portfolioData).map(([key, value]: [string, PortfolioPage]) => (
                        <Button
                            key={key}
                            component={Link}
                            href={`/${value.slug.toLowerCase()}`}
                            variant="text"
                            sx={{
                                color: "var(--portfolio-palette-AppBar-darkColor)",
                                "&:hover": buttonStyle,
                                ...(currentPathName.split("/")[1] === `${value.slug.toLowerCase()}` ? activeState : {})
                            }}
                        >
                            {value?.shortTitle ?? value?.title ?? key}
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
            <Box sx={{ height: "3rem", [`@media (min-width: ${TABLET_BREAKPOINT}px)`]: { display: "none" } }}>
                <Box>
                    <IconButton size="large" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <SwipeableDrawer
                    anchor="left"
                    open={openDrawer}
                    onOpen={handleDrawerOpen}
                    onClose={handleDrawerClose}
                    slotProps={{
                        paper: {
                            sx: {
                                minWidth: 300,
                                backgroundImage:
                                    "linear-gradient(320deg, rgb(from var(--portfolio-palette-bgGradient-main)" +
                                    " r g b / 0.8), rgb(from var(--portfolio-palette-bgGradient-second) r g b / 0.8))",
                                backdropFilter: "blur(5px)",
                                backgroundColor: "transparent"
                            }
                        }
                    }}
                >
                    <List>
                        <ListItem>
                            <IconButton
                                size="large"
                                onClick={handleDrawerClose}
                                sx={{ marginLeft: "auto", marginRight: "1rem" }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </ListItem>
                        {Object.entries(portfolioData).map(([key, value]) => (
                            <ListItem key={key}>
                                <ListItemButton component={Link} href={`/${value.slug.toLowerCase()}`}>
                                    <ListItemText primary={value?.shortTitle ?? value?.title ?? key} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </SwipeableDrawer>
            </Box>
        </>
    );
};

export default AppHeader;
