import React, { FC, ReactElement } from "react";
import Grid from "@mui/material/Grid";
import ListPageLoading from "../_components/ListPageLoading";
import HorizontalCardLoading from "../_components/HorizontalCardLoading";

const Loading: FC = (): ReactElement => {

    return (
        <ListPageLoading>
            <Grid container spacing={4} sx={{ marginTop: "20px" }}>
                {Array.from({length: 8}).map((_, index) => (
                    <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
                        <HorizontalCardLoading imageUrl="image" />
                    </Grid>
                ))}
            </Grid>
        </ListPageLoading>
    );
};

export default Loading;
