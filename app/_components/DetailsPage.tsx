import { Box, Button, Chip, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import Link from "./Link";

interface DetailsPageProps {
    heading: string;
    subheading1?: string;
    subheading2?: string;
    tags?: string[];
    backHref: string;
}
const DetailsPage: FC<PropsWithChildren<DetailsPageProps>> = ({
    children,
    heading,
    subheading1,
    subheading2,
    tags,
    backHref
}): ReactElement => {
    return (
        <Box>
            <Box>
                <Button
                    startIcon={<ArrowBack />}
                    variant="text"
                    component={Link}
                    sx={{ marginBottom: "1rem", color: "var(--portfolio-palette-text-primary)" }}
                    href={backHref}
                >
                    Back
                </Button>
            </Box>
            <Typography variant="h1">{heading}</Typography>
            {subheading1 && (
                <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
                    {subheading1}
                </Typography>
            )}
            {subheading2 && <Typography variant="subtitle1">{subheading2}</Typography>}
            {tags && (
                <Box sx={{ marginTop: "1rem" }}>
                    {tags.map((tag: string, index: number) => (
                        <Chip
                            key={index}
                            label={tag}
                            sx={{
                                marginRight: "0.5rem",
                                marginBottom: "1rem"
                            }}
                            variant="outlined"
                        />
                    ))}
                </Box>
            )}
            <Box sx={{ marginTop: "2rem" }}>{children}</Box>
        </Box>
    );
};

export default DetailsPage;
