import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";
import Link from "./Link";
import Image from "next/image";
import { CardSize } from "../../constants/card";

interface HorizontalCardProps {
    heading: string;
    subHeading1?: string;
    subHeading2?: string;
    imageUrl?: string;
    tag?: string;
    link?: string;
    linkTarget?: string;
    size?: CardSize;
}

const HorizontalCardContent: FC<Omit<HorizontalCardProps, "link">> = ({
    heading,
    subHeading1,
    subHeading2,
    imageUrl,
    tag,
    size
}): ReactElement => (
    <Box sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
        {imageUrl && (
            <CardMedia
                sx={{
                    width: size === CardSize.Small ? "100px" : "250px",
                    height: "auto",
                    position: "relative",
                    overflow: "hidden"
                }}
            >
                <Image src={imageUrl} alt={heading} fill style={{ objectFit: "cover" }} />
            </CardMedia>
        )}
        <CardContent
            sx={{
                width: "100%",
                padding: size === CardSize.Small ? "1rem" : "2rem",
                "&:last-child": {
                    paddingBottom: size === CardSize.Small ? "1rem" : "2rem"
                }
            }}
        >
            <Typography variant="h6" sx={{ fontSize: size === CardSize.Small ? "0.8rem" : "1rem" }}>
                {heading}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: size === CardSize.Small ? "0.6rem" : "0.8rem" }}>
                {subHeading1}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <Typography variant="subtitle1" sx={{ fontSize: size === CardSize.Small ? "0.6rem" : "0.8rem" }}>
                    {subHeading2}
                </Typography>
                {tag && <Chip label={tag} variant="outlined" size="small" />}
            </Box>
        </CardContent>
    </Box>
);

const HorizontalCard: FC<PropsWithChildren<HorizontalCardProps>> = ({
    children,
    heading,
    subHeading1,
    subHeading2,
    imageUrl,
    tag,
    link,
    linkTarget,
    size = CardSize.Large
}): ReactElement => {
    return (
        <Card variant="outlined" sx={{ height: "-webkit-fill-available" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem", height: "100%" }}>
                {link ? (
                    <Link
                        href={link}
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            height: "100%",
                            flexGrow: 2,
                            overflow: "auto"
                        }}
                        target={linkTarget}
                    >
                        <CardActionArea sx={{ height: "100%" }}>
                            <HorizontalCardContent
                                heading={heading}
                                subHeading1={subHeading1}
                                subHeading2={subHeading2}
                                imageUrl={imageUrl}
                                tag={tag}
                                size={size}
                            />
                        </CardActionArea>
                    </Link>
                ) : (
                    <HorizontalCardContent
                        heading={heading}
                        subHeading1={subHeading1}
                        subHeading2={subHeading2}
                        imageUrl={imageUrl}
                        tag={tag}
                        size={size}
                    />
                )}
                {children && (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            paddingRight: "2rem",
                            justifyContent: "flex-end"
                        }}
                    >
                        {children}
                    </Box>
                )}
            </Box>
        </Card>
    );
};

export default HorizontalCard;
