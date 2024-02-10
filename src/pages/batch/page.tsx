import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { BatchCard } from "../../components/card";

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

	return (
		<div className="">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<BatchCard />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<BatchCard />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<BatchCard />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<BatchCard />
				</div>
				<div className="col-lg-4 col-md-6 col-12">
					<BatchCard />
				</div>
			</div>
		</div>
	);
};

export default Batch;
