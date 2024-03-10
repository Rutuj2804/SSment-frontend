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
import { GetTermColumns } from "../../utils/data-grid";
import { getTermRoute } from "../../utils/helpers";

enum Tabs {
	"ACTIVE" = 2,
	"DELETED" = 1,
}

const Term = () => {
	const [activeTab, setActiveTab] = useState(Tabs.ACTIVE);

	const dispatch = useDispatch<any>();

	const navigate = useNavigate();

	const terms = useSelector((state: RootState) => state.term.terms)

	const userRole = useSelector((state: RootState) => state.profile.user.role)

	const columns = GetTermColumns()

	const role = getTermRoute(userRole!)

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["Administration", "Terms"],
				link: "/terms",
			})
		);
	}, [dispatch]);

	useEffect(() => {
		dispatch(getAllTerms({ status: activeTab - 1 }))
	}, [dispatch, activeTab])

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
							{role.hasVisibility ? <Button startIcon={<AddRounded />} onClick={() => navigate(role.link + '/create')}>
								Add
							</Button> : null}
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
