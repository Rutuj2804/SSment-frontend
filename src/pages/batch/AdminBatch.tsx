import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button, Select } from "../../library";
import { AddRounded, CloudDownloadRounded } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { RootState } from "../../store";
import { getAllBatches } from "../../store/actions";
import GetBatchColumns from "../../utils/data-grid/batch";
import { getBatchRoute } from "../../utils/helpers";
import { useUnAuthorizedRoute, ModuleType } from "../../utils/hooks";

enum Tabs {
	"ONGOING" = 2,
	"COMPLETED" = 1,
}

const institutionOptions = [
	{ name: "MIT ADT University", value: "1" },
	{ name: "IIIT Delhi", value: "2" },
	{ name: "IIT Bombay", value: "3" },
]

const AdminBatch = () => {

	const [activeTab, setActiveTab] = useState(Tabs.ONGOING);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate()

	const batches = useSelector((state: RootState) => state.batch.batches)

	const role = useSelector((state: RootState) => state.profile.user.role)

	const columns = GetBatchColumns()

	const routes = getBatchRoute(role!)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test"],
				link: "/tests",
			})
		);
	}, [dispatch]);

	useUnAuthorizedRoute(role!, ModuleType.Batch, navigate)

	useEffect(() => {
		dispatch(getAllBatches({ status: activeTab - 1 }))
	}, [dispatch, activeTab])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Batches</h4>
					<div className="right test__Select">
						<Select
							options={institutionOptions}
							name="name"
							value="value"
							selected={"1"}
						/>
					</div>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__TabArea">
						<div className="left">
							<Button
								className={
									activeTab === Tabs.ONGOING
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.ONGOING)}
							>
								On Going
							</Button>
							<Button
								className={
									activeTab === Tabs.COMPLETED
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.COMPLETED)}
							>
								Completed
							</Button>
						</div>
						<div className="right">
							{
								routes?.hasVisibility ? <Button startIcon={<AddRounded />} onClick={()=>navigate(routes.link + '/create')}>Add</Button> : null
							}
							<Button startIcon={<CloudDownloadRounded />}>Download</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
						<DataGrid
							rows={batches}
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

export default AdminBatch;
