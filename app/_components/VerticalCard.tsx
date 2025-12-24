import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";
import Image from "next/image";
import Link from "./Link";
import { MotionDiv } from "./Motion";

interface VerticalCardProps {
    heading: string;
    subHeading1?: string;
    subHeading2?: string;
    imageUrl: string;
    tag?: string;
    link?: string;
    linkTarget?: string;
    icon?: ReactElement;
}

const VerticalCardContent: FC<Omit<VerticalCardProps, "link"> & { removeBottomPadding?: boolean }> = ({
    heading,
    subHeading1,
    subHeading2,
    imageUrl,
    tag,
    icon,
    removeBottomPadding = false
}): ReactElement => (
    <Box>
        <CardMedia
            sx={{
                width: "100%",
                height: "200px",
                position: "relative",
                overflow: "hidden"
            }}
        >
            <Image src={imageUrl} alt={heading} fill style={{ objectFit: "cover" }} />
            {icon && (
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Box
                        sx={{
                            borderRadius: "50%",
                            background: "rgb(from var(--portfolio-palette-primary-main) r g b / 0.5)",
                            height: "4rem",
                            width: "4rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        {icon}
                    </Box>
                </Box>
            )}
        </CardMedia>
        <CardContent sx={{ paddingBottom: removeBottomPadding ? "1rem !important" : "2rem" }}>
            <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                {heading}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
                {subHeading1}
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="subtitle1" sx={{ fontSize: "0.8rem" }}>
                    {subHeading2}
                </Typography>
                {tag && <Chip label={tag} variant="outlined" size="small" />}
            </Box>
        </CardContent>
    </Box>
);

const VerticalCard: FC<PropsWithChildren<VerticalCardProps>> = ({
    heading,
    subHeading1,
    subHeading2,
    imageUrl,
    tag,
    link,
    linkTarget,
    icon,
    children
}): ReactElement => {
    return (
        <Box
            component={MotionDiv}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
            sx={{ height: "100%" }}
        >
            <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }} variant="outlined">
                <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    {link ? (
                        <Link href={link} style={{ textDecoration: "none", color: "inherit" }} target={linkTarget}>
                            <CardActionArea>
                                <VerticalCardContent
                                    heading={heading}
                                    subHeading1={subHeading1}
                                    subHeading2={subHeading2}
                                    imageUrl={imageUrl}
                                    tag={tag}
                                    icon={icon}
                                    removeBottomPadding={!!children}
                                />
                            </CardActionArea>
                        </Link>
                    ) : (
                        <VerticalCardContent
                            heading={heading}
                            subHeading1={subHeading1}
                            subHeading2={subHeading2}
                            imageUrl={imageUrl}
                            tag={tag}
                            icon={icon}
                            removeBottomPadding={!!children}
                        />
                    )}
                    {children && <Box sx={{ padding: "2rem", paddingTop: "1rem" }}>{children}</Box>}
                </Box>
            </Card>
        </Box>
    );
};

export default VerticalCard;
