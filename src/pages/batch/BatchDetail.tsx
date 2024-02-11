import React, { useEffect, useState } from "react";
import { Paper } from "../../components/paper";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { Button, OutlineButton } from "../../library";
import { Tab, Tabs } from "@mui/material";
import { StudentRibbon, TestRibbon } from "../../components/ribbon";

const BatchDetail = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Batch", "Batch Awesome"],
				link: "/batch/:id",
			})
		);
	}, [dispatch]);

	return (
		<Paper className="p-3">
			<div className="batchDetail__Wrapper">
				<div className="batchDetail__Header">
					<h5>Batch Awesome</h5>
					<p>
						Writing: A text is a passage of words that conveys a set
						of meanings to the reader. It can be a written or spoken
						passage, especially one used in a school or university
						for discussion or in an examination. A text can be
						words, phrases, and sentences that piece together a
						passage of written work. It can be as simple as 1-2
						words (such as a stop sign) or as complex as a novel.
						Original words: The original words of a piece of writing
						or a speech. Edited copy: An edited or emended copy of
						an original work
					</p>
				</div>
				<div className="batchDetail__Actions">
					<h6>Actions :</h6>
					<div className="batchDetail__ActionButton">
						<OutlineButton>Delete</OutlineButton>
						<Button onClick={() => navigate("/batch/create")}>
							Edit Test
						</Button>
					</div>
				</div>
				<div className="body">
						<Tabs
							value={value}
							onChange={handleChange}
						>
							<Tab label="Students (202)" />
							<Tab label="Tests (3)" />
						</Tabs>

						{value === 0 && <div className="batchDetail__Tab1Students">
							<StudentRibbon />
							<StudentRibbon />
							<StudentRibbon />
							<StudentRibbon />
							<StudentRibbon />
						</div>}
						{value === 1 && <div className="batchDetail__Tab2Tests">
							<TestRibbon />
							<TestRibbon />
							<TestRibbon />
							<TestRibbon />
						</div>}
					</div>
			</div>
		</Paper>
	);
};

export default BatchDetail;
