"use client";

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    styled,
    Typography
} from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { FC, ReactElement, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";

const BibTex = styled("pre")({
    p: {
        margin: 0,
        overflow: "hidden",
        wordWrap: "break-word",
        whiteSpace: "normal"
    },
    "p:not(:first-child)": {
        marginLeft: "1.5em"
    }
});

const Citation: FC<{ citationText: string; size?: "small" | "medium" }> = ({
    citationText,
    size = "medium"
}): ReactElement => {
    const [openCitation, setOpenCitation] = useState<string | null>(null);

    const handleClose = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenCitation(null);
    };

    const handleOpen = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenCitation(citationText);
    };

    const handleCopy = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();

        navigator.clipboard.writeText(citationText);
    };

    const handleDownload = (e: React.SyntheticEvent) => {
        e.stopPropagation();
    };

    const handleDialogClick = (e: React.SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();
    };

    const citationKeyRegex: RegExp = /{[^,]+/g;
    const citationKeyMatch: RegExpMatchArray | null = citationText.match(citationKeyRegex);
    const citationKey: string =
        citationKeyMatch && citationKeyMatch.length > 0 ? citationKeyMatch[0].slice(1, -1) : "citation";
    const bibFile: Blob = new Blob([citationText], { type: "text/plain" });

    return (
        <>
            <Button startIcon={<HistoryEduIcon />} size={size} onClick={handleOpen} variant="contained">
                Cite
            </Button>
            <Dialog open={openCitation !== null} onClose={handleClose} onClick={handleDialogClick}>
                <DialogTitle>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="h6">Cite</Typography>
                        <Button onClick={handleClose}>
                            <CloseIcon sx={{ color: "var(--portfolio-palette-primary-contrastText)" }} />
                        </Button>
                    </Box>
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <BibTex>
                        {citationText.split(",").map((line: string, index: number) => (
                            <p key={index}>
                                {line.trim()}
                                {index < citationText.split(",").length - 1 ? "," : ""}
                            </p>
                        ))}
                    </BibTex>
                </DialogContent>
                <Divider />
                <DialogActions sx={{ padding: "1rem", paddingRight: "3rem" }}>
                    <Button
                        onClick={handleCopy}
                        startIcon={<ContentCopyIcon />}
                        sx={{ color: "var(--portfolio-palette-primary-contrastText)" }}
                    >
                        Copy
                    </Button>
                    <Button
                        component="a"
                        rel="noopener noreferrer"
                        onClick={handleDownload}
                        id="sample"
                        download={`${citationKey}.bib`}
                        href={URL.createObjectURL(bibFile)}
                        sx={{
                            color: "var(--portfolio-palette-primary-contrastText)"
                        }}
                        startIcon={<DownloadIcon />}
                    >
                        Download
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Citation;
