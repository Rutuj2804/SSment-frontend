import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const Batch = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumps({
                name: ["Batch", "Batch"],
                link: "/batches",
            })
        );
    }, [dispatch]);

    return <div>Batch</div>;
};

export default Batch;
