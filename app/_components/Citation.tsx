"use client";

import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    Typography
} from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DownloadIcon from "@mui/icons-material/Download";

const Citation: React.FC<{ citationText: string, size?: "small" | "medium" }> = ({ citationText, size = "medium" }) => {
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

    const citationKeyRegex: RegExp = /{[^,]+/g;
    const citationKeyMatch = citationText.match(citationKeyRegex);
    const citationKey: string =
        citationKeyMatch && citationKeyMatch.length > 0 ? citationKeyMatch[0].slice(1, -1) : "citation";
    const bibFile: Blob = new Blob([citationText], { type: "text/plain" });

    return (
        <>
            <Chip
                label="Cite"
                icon={<HistoryEduIcon />}
                clickable
                size={size}
                sx={{ marginLeft: "10px" }}
                onClick={handleOpen}
            />
            <Dialog open={openCitation !== null} onClose={handleClose}>
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
                    <pre className="biblatex-entry">
                        {citationText.split(",").map((line, index) => (
                            <p key={index}>
                                {line.trim()}
                                {index < citationText.split(",").length - 1 ? "," : ""}
                            </p>
                        ))}
                    </pre>
                </DialogContent>
                <Divider />
                <DialogActions>
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
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        id="sample"
                        download={`${citationKey}.bib`}
                        href={ URL.createObjectURL(bibFile) }
                        sx={ {
                            color: "var(--portfolio-palette-primary-contrastText)"
                        } }
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
