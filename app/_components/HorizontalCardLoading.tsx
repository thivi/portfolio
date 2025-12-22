import { Box, Card, CardContent, CardMedia, Skeleton } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";
import { CardSize } from "../../constants/card";

interface HorizontalCardProps {
    size?: CardSize;
    imageUrl?: string;
}

const HorizontalCard: FC<PropsWithChildren<HorizontalCardProps>> = ({
    children,
    size = CardSize.Large,
    imageUrl
}): ReactElement => {
    return (
        <Card variant="outlined" sx={{ height: "-webkit-fill-available" }}>
            <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem", height: "100%" }}>
                <Box sx={{ display: "flex", flexDirection: "row", height: "100%", width: "100%" }}>
                    {imageUrl && (
                        <CardMedia
                            sx={{
                                width: size === CardSize.Small ? "100px" : "250px",
                                height: "auto",
                                position: "relative",
                                overflow: "hidden"
                            }}
                        >
                            <Skeleton variant="rectangular" width={size === CardSize.Small ? 100 : 250} height="100%" />
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
                        <Skeleton variant="text" width="80%" height={size === CardSize.Small ? "3rem" : "2rem"} />
                        <Skeleton variant="text" width="100%" height={size === CardSize.Small ? "2rem" : "1rem"} />
                        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                            <Skeleton variant="text" width="50%" height={size === CardSize.Small ? "2rem" : "1rem"} />
                            <Skeleton
                                variant="rectangular"
                                width={size === CardSize.Small ? "3rem" : "5rem"}
                                height={size === CardSize.Small ? "2rem" : "1rem"}
                                sx={{ borderRadius: "3rem" }}
                            />
                        </Box>
                    </CardContent>
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
            </Box>
        </Card>
    );
};

export default HorizontalCard;
