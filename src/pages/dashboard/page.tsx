import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useEffect } from "react";
import {
	AreaChart,
	BarChart,
	ColumnChart,
	LineChart,
	PieChart,
} from "../../components/chart";
import { Paper } from "../../components/paper";

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

	return (
		<div className="mt-2">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<Paper className="mb-2 p-0">
						<LineChart />
					</Paper>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<Paper className="mb-2 p-0">
						<AreaChart />
					</Paper>
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<Paper className="mb-2 p-0">
						<PieChart />
					</Paper>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-6 col-12">
					<Paper className="mb-2">
						<ColumnChart />
					</Paper>
				</div>
				<div className="col-lg-6 col-md-6 col-12">
					<Paper className="mb-2">
						<BarChart />
					</Paper>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
