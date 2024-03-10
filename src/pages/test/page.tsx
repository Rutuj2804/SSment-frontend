import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { DataGrid } from "@mui/x-data-grid";
import { AddRounded, CloudDownloadRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import GetTestColumns from "../../utils/data-grid/test";
import { RootState } from "../../store";
import { getAllTests } from "../../store/actions";

enum Tabs {
	"COMPLETED" = 1,
	"UPCOMING" = 2,
	"DRAFT" = 3,
}

const Test = () => {
	const [activeTab, setActiveTab] = useState(Tabs.UPCOMING);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate()

	const tests = useSelector((state: RootState) => state.test.tests)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test"],
				link: "/tests",
			})
		);
	}, [dispatch]);

	const columns = GetTestColumns()

	useEffect(() => {
		dispatch(getAllTests({ status: activeTab - 1 }))
	}, [dispatch, activeTab])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Tests</h4>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__TabArea">
						<div className="left">
							<Button
								className={
									activeTab === Tabs.UPCOMING
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.UPCOMING)}
							>
								Upcoming
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
							<Button
								className={
									activeTab === Tabs.DRAFT
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.DRAFT)}
							>
								Draft
							</Button>
						</div>
						<div className="right">
							<Button startIcon={<AddRounded />} onClick={()=>navigate('/tests/create')}>Add</Button>
							<Button startIcon={<CloudDownloadRounded />} >Download</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
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

export default Test;
