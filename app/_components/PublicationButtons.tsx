"use client";

import { FC, ReactElement, SyntheticEvent } from "react";
import LinkIcon from "@mui/icons-material/Link";
import Citation from "./Citation";
import { Box, Button } from "@mui/material";
import Link from "./Link";
import { PublicationItem } from "../../models/portfolio";

interface PublicationButtonProps {
    publication: PublicationItem;
    orientation?: "horizontal" | "vertical";
}

const PublicationButtons: FC<PublicationButtonProps> = ({ publication, orientation = "horizontal" }): ReactElement => {
    const handleLinkClick = (e: SyntheticEvent) => {
        e.stopPropagation();
    };

    return (
        <Box sx={{ display: "flex", gap: "1rem", flexDirection: orientation === "horizontal" ? "row" : "column" }}>
            <Button
                startIcon={ <LinkIcon /> }
                component={ Link }
                href={ publication.link as string }
                size="small"
                target="_blank"
                onClick={ handleLinkClick }
                variant="contained"
            >
                Link
            </Button>
            <Citation citationText={(publication.citation as string) || "Citation not available."} size="small" />
        </Box>
    );
};

export default PublicationButtons;
