import { Box, Typography } from "@mui/material";
import { FC, PropsWithChildren, ReactElement } from "react";

interface ListPageProps {
    heading: string;
    subHeading?: string;
}

const ListPage: FC<PropsWithChildren<ListPageProps>> = ({ children, heading, subHeading }): ReactElement => (
    <Box>
        <Typography variant="h1">
            {heading}
        </Typography>
        <Typography variant="subtitle1" sx={{marginTop: "0.5rem"}}>
            {subHeading}
        </Typography>
        <Box sx={{marginTop: "2rem"}}>{children}</Box>
    </Box>
);

export default ListPage;
