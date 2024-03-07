import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../utils/hooks";
import { useDispatch, useSelector } from "react-redux";
import { setAddSection } from "../../store/layout/slice";
import { IconButton } from "@mui/material";
import { AddRounded, CloseRounded } from "@mui/icons-material";
import { Button, Input } from "../../library";
import { createSection, updateSection } from "../../store/actions";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { SectionInterface } from "../../utils/types";

const AddSection = () => {
	const [name, setName] = useState("");

	const dispatch = useDispatch<any>();

	const ref = useRef<HTMLDivElement>(null);

	const section = useSelector(
		(state: RootState) => state.layout.section
	);

    const sections = useSelector((state: RootState) => state.test.sections)

	const instituteId = useAccessRole();

	const close = () =>
		dispatch(setAddSection({ isActive: false, testId: "" }));

	useOutsideClick(ref, close);

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        if(section.sectionId)  dispatch(updateSection({ name, testId: section.testId, instituteId, sectionId: section.sectionId }));
		else dispatch(createSection({ name, testId: section.testId, instituteId }));
		close();
	};

    useEffect(() => {
        if(section.sectionId) {
            const s = sections.filter((t: SectionInterface)=>t._id === section.sectionId)[0]
            setName(s.name!)
        }
    }, [section.sectionId])

	return (
		<div ref={ref} className="addSection__Wrapper">
			<div className="addSection__Header">
				<h5>{section.sectionId ? "Edit" : "Add"} Section</h5>
				<IconButton onClick={close}>
					<CloseRounded />
				</IconButton>
			</div>
			<form onSubmit={onSubmit}>
				<Input
					type="text"
					label="Section Name"
					placeholder="Section Awesome"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
					autoFocus
				/>
				<div className="d-flex justify-content-end">
					<Button startIcon={<AddRounded />} type="submit">
                        {section.sectionId ? "Edit" : "Add"} Section
					</Button>
				</div>
			</form>
		</div>
	);
};

export default AddSection;
