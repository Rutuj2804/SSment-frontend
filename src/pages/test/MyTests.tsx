import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { DataGrid } from "@mui/x-data-grid";
import { RootState } from "../../store";
import { getAllTestRegistrations } from "../../store/actions";
import GetTestRegistrationColumns from "../../utils/data-grid/test-registration";

const MyTests = () => {
	const dispatch = useDispatch<any>();

	const tests = useSelector((state: RootState) => state.test.testRegistrations)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test"],
				link: "/tests",
			})
		);
	}, [dispatch]);

	const columns = GetTestRegistrationColumns()

	useEffect(() => {
		dispatch(getAllTestRegistrations({ status: 1 }))
	}, [dispatch])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Tests</h4>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__Grid">
						<DataGrid
							rows={tests}
							columns={columns}
							initialState={{
								pagination: {
									paginationModel: {
										pageSize: 10,
									},
								},
							}}
							pageSizeOptions={[5]}
							checkboxSelection
							disableRowSelectionOnClick
                            getRowId={(row) => row._id}
						/>
					</div>
				</div>
			</Paper>
		</div>
	);
};

export default MyTests;
