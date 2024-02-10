import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { useNavigate } from "react-router-dom";
import { Paper } from "../../components/paper";

const TestDetail = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Test Awesome"],
				link: "/test/:id",
			})
		);
	}, [dispatch]);
	return (
		<div>
			<Paper className="p-3">TestDetail</Paper>
		</div>
	);
};

export default TestDetail;
