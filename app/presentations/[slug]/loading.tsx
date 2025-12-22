import { Skeleton } from "@mui/material";
import DetailsPageLoading from "../../_components/DetailsPageLoading";
import { FC, ReactElement } from "react";

const Loading: FC = (): ReactElement => {

    return (
        <DetailsPageLoading>
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="100%" height="2rem" />
            <Skeleton variant="text" width="75%" height="2rem" />
        </DetailsPageLoading>
    );
};

export default Loading;
