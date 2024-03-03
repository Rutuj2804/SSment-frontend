import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { Button } from "../../library";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { DataGrid } from "@mui/x-data-grid";
import { AddRounded, CloudDownloadRounded } from "@mui/icons-material";
import { RootState } from "../../store";
import { getAllTerms } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";
import { GetTermColumns } from "../../utils/data-grid";

enum Tabs {
	"ACTIVE" = 2,
	"DELETED" = 1,
}

const Term = () => {
	const [activeTab, setActiveTab] = useState(Tabs.ACTIVE);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const instituteId = useAccessRole()

	const terms = useSelector((state: RootState) => state.term.terms)

	const columns = GetTermColumns()

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms"],
				link: "/terms",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		if(instituteId)
			dispatch(getAllTerms({ instituteId, status: activeTab - 1 }))
	}, [instituteId, dispatch, activeTab])

	return (
		<div className="test__Wrapper">
			<Paper className="p-3">
				<div className="test__Header">
					<h4>My Terms</h4>
				</div>
				<div className="test__GridArea mt-3">
					<div className="test__TabArea">
						<div className="left">
							<Button
								className={
									activeTab === Tabs.ACTIVE
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.ACTIVE)}
							>
								On Going
							</Button>
							<Button
								className={
									activeTab === Tabs.DELETED
										? "test__Tab"
										: "test__NotActiveTab test__Tab"
								}
								onClick={() => setActiveTab(Tabs.DELETED)}
							>
								Completed
							</Button>
						</div>
						<div className="right">
							<Button startIcon={<AddRounded />} onClick={() => navigate("/terms/create")}>
								Add
							</Button>
							<Button startIcon={<CloudDownloadRounded />}>Download</Button>
						</div>
					</div>
					<div className="test__Grid mt-3">
						<DataGrid
							rows={terms}
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

export default Term;
