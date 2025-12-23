import { Box, Card, CardContent, CardMedia, Skeleton } from "@mui/material";
import { FC, ReactElement } from "react";

const VerticalCardLoading: FC = (): ReactElement => {
    return (
        <Card sx={{ display: "flex", flexDirection: "column" }} variant="outlined">
            <Box>
                <CardMedia
                    sx={{
                        width: "100%",
                        height: "200px",
                        position: "relative",
                        overflow: "hidden"
                    }}
                >
                    <Skeleton variant="rectangular" width="100%" height="200px" />
                </CardMedia>
                <CardContent>
                    <Skeleton variant="text" width="80%" height="3rem" />
                    <Skeleton variant="text" width="100%" height="2rem" />
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Skeleton variant="text" width="50%" height="2rem" />
                        <Skeleton
                            variant="rectangular"
                            width={60}
                            height="2rem"
                            sx={{ borderRadius: "var(--portfolio-shape-borderRadius)" }}
                        />
                    </Box>
                </CardContent>
            </Box>
        </Card>
    );
};

export default VerticalCardLoading;
