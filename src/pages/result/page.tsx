import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const Result = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumps({
                name: ["Results", "Results"],
                link: "/results",
            })
        );
    }, [dispatch]);
    return <div>Result</div>;
};

export default Result;
