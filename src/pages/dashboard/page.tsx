import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useEffect } from "react";

const Dashboard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumps({
                name: ["Dashboard", "Dashboard"],
                link: "/dashboard",
            })
        );
    }, [dispatch]);

	return <div>Dashboard</div>;
};

export default Dashboard;
