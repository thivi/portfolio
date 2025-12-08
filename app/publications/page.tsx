import React from "react";
import portfolio from "../portfolio.json";
import {
    Box,
    List,
    Paper,
    Typography
} from "@mui/material";
import PublicationItem from "../_components/PublicationItem";


const PublicationsPage: React.FC = () => {
    const publications = portfolio.publications;

    return (
        <Box>
            <Typography variant="h3" component="h3" color="var(--portfolio-palette-primary-contrastText)">
                {publications.title}
            </Typography>
            <Paper>
                <List>
                    {publications.items?.map((publication) => (
                        <PublicationItem key={publication.slug} publication={publication} />
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default PublicationsPage;
