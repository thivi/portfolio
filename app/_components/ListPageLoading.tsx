import { Box, Skeleton } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";

const ListPageLoading: FC<PropsWithChildren> = ({ children }): ReactElement => (
    <Box>
        <Skeleton variant="text" width="40%" height="4rem" />
        <Skeleton variant="text" width="60%" height="3rem" />
        <Box sx={{ marginTop: "2rem" }}>{children}</Box>
    </Box>
);

export default ListPageLoading;
