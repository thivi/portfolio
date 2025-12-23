import { FC, ReactElement } from "react";
import { Box, Grid, Skeleton } from "@mui/material";
import ListPageLoading from "../_components/ListPageLoading";
import HorizontalCardLoading from "../_components/HorizontalCardLoading";

const Loading: FC = (): ReactElement => {
    return (
        <ListPageLoading>
            <Grid container spacing={4}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Grid size={{ md: 12 }} key={index}>
                        <HorizontalCardLoading imageUrl="image">
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1rem",
                                    width: "100%",
                                    justifyContent: "center"
                                }}
                            >
                                <Skeleton
                                    variant="rectangular"
                                    width="5rem"
                                    height="2rem"
                                    sx={{ borderRadius: "var(--portfolio-shape-borderRadius)" }}
                                />
                                <Skeleton
                                    variant="rectangular"
                                    width="5rem"
                                    height="2rem"
                                    sx={{ borderRadius: "var(--portfolio-shape-borderRadius)" }}
                                />
                            </Box>
                        </HorizontalCardLoading>
                    </Grid>
                ))}
            </Grid>
        </ListPageLoading>
    );
};

export default Loading;
