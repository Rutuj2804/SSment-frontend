import React, { useEffect } from "react";
import { GoCheckCircleFill, GoCircle } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useAccessRole } from "../../utils/helpers";
import { getAllBatches } from "../../store/actions";
import { RootState } from "../../store";
import moment from "moment";

interface BatchesCProps {
	setBatches: Function;
	batches: string[];
}

const Batches = ({ setBatches, batches: batchesSelected }: BatchesCProps) => {
	const dispatch = useDispatch<any>();

	const instituteId = useAccessRole();

	const batches = useSelector((state: RootState) => state.batch.batches);

	useEffect(() => {
		if (instituteId) dispatch(getAllBatches({ instituteId, status: 1 }));
	}, [dispatch, instituteId]);

	const onClick = (id: string) => {
		if (batchesSelected.includes(id))
			setBatches((v: string[]) => v.filter((b) => b !== id));
		else setBatches((v: string[]) => ([ ...v, id ]));
	};

	return (
		<div className="batches__Wrapper">
			<div className="batches__Header">
				<h5>Select Batches for test</h5>
				<p>{batchesSelected.length} batches selected</p>
			</div>
			<div className="row">
				{batches.map((b) => (
					<div key={b._id} className="col-lg-4 col-md-4 col-12">
						<div
							onClick={() => onClick(b._id!)}
							className={
								batchesSelected.includes(b._id!)
									? "batches__Card batches__Selected"
									: "batches__Card"
							}
						>
							<div className="left">
								<h6>{b.name}</h6>
								<p>
									{b.participants?.length} students | Expires
									on{" "}
									{moment(b.expiryDate).format(
										"DD MMM, YYYY"
									)}
								</p>
							</div>
							<div className="right">
								{batchesSelected.includes(b._id!) ? (
									<GoCheckCircleFill />
								) : (
									<GoCircle />
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Batches;
