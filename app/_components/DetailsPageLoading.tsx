import { Box, Skeleton } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";

const DetailsPageLoading: FC<PropsWithChildren> = ({ children }): ReactElement => {
    return (
        <Box>
            <Box>
                <Skeleton
                    variant="rectangular"
                    width={80}
                    height={36}
                    sx={{ borderRadius: "3rem", marginBottom: "1rem" }}
                />
            </Box>
            <Skeleton variant="text" width="60%" height="3rem" />
            <Skeleton variant="text" width="75%" height="2rem" />
            <Skeleton variant="text" width="25%" height="2rem" />
            <Skeleton
                variant="rectangular"
                width="6rem"
                height="2rem"
                sx={{ borderRadius: "3rem", marginBottom: "1rem", marginTop: "1rem" }}
            />
            <Box sx={{ marginTop: "2rem" }}>{children}</Box>
        </Box>
    );
};

export default DetailsPageLoading;
