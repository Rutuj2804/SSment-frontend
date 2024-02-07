import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const Test = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Test", "Test"],
				link: "/tests",
			})
		);
	}, [dispatch]);

	return <div>Test</div>;
};

export default Test;
