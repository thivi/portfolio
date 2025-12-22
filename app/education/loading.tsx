import { FC, ReactElement } from "react";
import ListPageLoading from "../_components/ListPageLoading";
import TimelineLoading from "../_components/TimelineLoading";

const Loading: FC = (): ReactElement => {
    return (
        <ListPageLoading>
            <TimelineLoading />
        </ListPageLoading>
    );
};

export default Loading;
