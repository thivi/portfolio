import { FC, ReactElement } from "react";
import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListPageLoading from "../_components/ListPageLoading";
import HorizontalCardLoading from "../_components/HorizontalCardLoading";
import VerticalCardLoading from "../_components/VerticalCardLoading";

const Loading: FC = (): ReactElement => {

    return (
        <ListPageLoading>
            <Skeleton variant="text" width="40%" height="3rem" sx={{ marginBottom: "1rem" }} />
            <Grid container spacing={4}>
                {Array.from({length: 3}).map((_, blogIndex) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={blogIndex}>
                        <HorizontalCardLoading imageUrl="image" />
                    </Grid>
                ))}
            </Grid>
            <Skeleton variant="text" width="60%" height="3rem" sx={{ margin: "2rem 0 1rem 0" }} />
            <Grid container spacing={4}>
                {Array.from({length: 4}).map((_, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <VerticalCardLoading />
                    </Grid>
                ))}
            </Grid>
        </ListPageLoading>
    );
};

export default Loading;
