import React from "react";
import { useDispatch } from "react-redux";
import { setAddSection } from "../../store/layout/slice";
import { SectionInterface } from "../../utils/types";
import moment from "moment";
import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Button, OutlineButton } from "../../library";
import { deleteSection } from "../../store/actions";
import { useAccessRole } from "../../utils/helpers";

interface SectionCProps {
	section: SectionInterface;
	testId: string;
    sectionId: string;
    onClick: Function;
}

const Section = ({ section, testId, sectionId, onClick }: SectionCProps) => {
	const dispatch = useDispatch<any>();

    const instituteId = useAccessRole();

	return (
		<div
			className={sectionId === section._id? "sectionCard__Wrapper sectionCard__Active" : "sectionCard__Wrapper"}
			onClick={() => onClick(section._id)}
		>
			<div className="sectionCard__Left">
                <h6>{section.name}</h6>
                <p>{moment(section._createdAt).format("DD MMM, YYYY")}</p>
            </div>
            <div className="sectionCard__Right">
                <OutlineButton onClick={() => dispatch(deleteSection({ sectionId: section._id!, instituteId }))} startIcon={<DeleteRounded />}>Delete</OutlineButton>
                <Button onClick={() => dispatch(setAddSection({ isActive: true, testId: testId, sectionId: section._id, }))} startIcon={<EditRounded />}>Edit</Button>
            </div>
		</div>
	);
};

export default Section;
