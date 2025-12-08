"use client";

import { Chip, Divider, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FC, ReactElement, SyntheticEvent } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import Link from "../_components/Link";
import LinkIcon from "@mui/icons-material/Link";
import Citation from "../_components/Citation";
import ListItemIcon from "@mui/material/ListItemIcon";

interface Publication {
    [key: string]: string | number | boolean | string[] | undefined;
}

interface PublicationProps {
    publication: Publication;
}

const PublicationItem: FC<PublicationProps> = ({ publication }): ReactElement => {
    const handleLinkClick = (e: SyntheticEvent) => {
        e.stopPropagation();
    };

    return (
        <div>
            <ListItem>
                <ListItemButton component={Link} href={`/publications/${publication.slug}`}>
                    <ListItemIcon>
                        <ArticleIcon sx={{ color: "var(--portfolio-palette-primary-contrastText)" }} />
                    </ListItemIcon>
                    <ListItemText
                        primary={publication.title}
                        secondary={`${publication.publication}, ${publication.date}`}
                    />
                </ListItemButton>
                <Chip
                    label="Link"
                    icon={<LinkIcon />}
                    component="a"
                    href={publication.link as string}
                    clickable
                    size="small"
                    target="_blank"
                    onClick={handleLinkClick}
                />
                <Citation citationText={(publication.citation as string) || "Citation not available."} size="small" />
            </ListItem>
            <Divider />
        </div>
    );
};

export default PublicationItem;
