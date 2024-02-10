import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setBreadcrumps } from '../../store/breadcrumps/slice';

const CreateTest = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Create"],
				link: "/tests/create",
			})
		);
	}, [dispatch]);

	return <div>CreateTest</div>;
};

export default CreateTest;