import { Box, Grid, List, ListItem, ListItemAvatar, Skeleton } from "@mui/material";
import { FC, ReactElement } from "react";
import HorizontalCardLoading from "./HorizontalCardLoading";

const Timeline: FC = (): ReactElement => {
    return (
        <Box>
            {Array.from({ length: 3 }).map((_, index: number) => (
                <Box
                    key={index}
                    sx={{ marginTop: index != 0 ? "2rem" : 0, display: "flex", gap: "1rem", flexDirection: "row" }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Skeleton variant="circular" width={60} height={60} sx={{ flexShrink: 0 }} />
                        {index != 2 && (
                            <Box
                                sx={{
                                    marginTop: "2rem",
                                    width: "5px",
                                    height: "100%",
                                    backgroundColor: "rgb(from var(--portfolio-palette-text-secondary) r g b / 0.2)"
                                }}
                            />
                        )}
                    </Box>
                    <Box>
                        <Skeleton variant="text" width="40%" height="3rem" />
                        <Skeleton variant="text" width="30%" height="2rem" />
                        <Skeleton variant="text" width="30%" height="2rem" />
                        <Box sx={{ marginLeft: "1rem", marginTop: "1rem" }}>
                            <Skeleton variant="text" width="80%" height="1.5rem" />
                            <Skeleton variant="text" width="75%" height="1.5rem" />
                        </Box>

                        <Skeleton variant="text" width="20%" height="3rem" sx={{ marginTop: "1rem" }} />
                        <List sx={{ display: "flex", flexDirection: "row", gap: "0.5rem", flexWrap: "wrap" }}>
                            {Array.from({ length: 2 }).map((_, awardIndex: number) => (
                                <ListItem key={awardIndex}>
                                    <ListItemAvatar>
                                        <Skeleton variant="circular" width={40} height={40} />
                                    </ListItemAvatar>
                                    <Skeleton variant="text" width="60%" height="2rem" />
                                    <Skeleton variant="text" width="40%" height="1rem" />
                                </ListItem>
                            ))}
                        </List>

                        <Skeleton variant="text" width="25%" height="3rem" sx={{ marginTop: "1rem" }} />
                        <Grid container spacing={2} sx={{ marginTop: "0.5rem" }}>
                            {Array.from({ length: 3 }).map((_, projectIndex: number) => {
                                return (
                                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 4 }} key={projectIndex}>
                                        <HorizontalCardLoading imageUrl="image" />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Box sx={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                            {Array.from({ length: 4 }).map((_, skillIndex: number) => (
                                <Skeleton
                                    variant="rectangular"
                                    width="5rem"
                                    height="2rem"
                                    key={skillIndex}
                                    sx={{ borderRadius: "3rem" }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Timeline;
