import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { BatchCard } from "../../components/card";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { getAllBatches } from "../../store/actions";

const Batch = () => {
	const dispatch = useDispatch<any>();

	const batches = useSelector((state: RootState) => state.batch.batches);

	const instituteId = useAccessRole();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Batch", "Batch"],
				link: "/batches",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if (instituteId) dispatch(getAllBatches({ instituteId, status: 1 }));
	}, [instituteId, dispatch]);

	return (
		<div className="">
			<div className="row">
				{batches.map((b) => (
					<div key={b._id} className="col-lg-4 col-md-6 col-12">
						<BatchCard
							_id={b._id!}
							name={b.name!}
							description={b.description!}
							isActive={b.isActive!}
							students={b.participants?.length!}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Batch;
