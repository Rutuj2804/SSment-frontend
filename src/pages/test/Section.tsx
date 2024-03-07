import { IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { setAddSection } from "../../store/layout/slice";
import { useDispatch, useSelector } from "react-redux";
import { AddRounded } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { getSectionsOfTest } from "../../store/actions";
import { setBreadcrumps } from "../../store/breadcrumps/slice";

const Section = () => {

    const { id } = useParams()

    const dispatch = useDispatch<any>()

    const sections = useSelector((state: RootState) => state.test.sections)

    const instituteId = useAccessRole()

    useEffect(() => {
		dispatch(
			setBreadcrumps({
				name: ["General", "Test", "Add Sections"],
				link: "/test/:id",
			})
		);
	}, [dispatch]);

    useEffect(() => {
        if(instituteId && id) dispatch(getSectionsOfTest({ testId: id!, instituteId }))
    }, [dispatch, instituteId, id])

	return <div className="section__Wrapper">
        <div className="row">
            <div className="col-lg-4 col-md-3 col-12">
                <div className="section__SectionList">
                    {
                        sections.map(s=><h6 key={s._id} onClick={() => dispatch(setAddSection({ isActive: true, testId: id!, sectionId: s._id }))}>{s.name}</h6>)
                    }
                </div>
            </div>
            <div className="col-lg-8 col-md-9 col-12">
                <div className="section__QuestionList">
                    Right
                </div>
            </div>
        </div>
        <IconButton onClick={() => dispatch(setAddSection({ isActive: true, testId: id! }))} className="section__Button"><AddRounded fontSize="large" /></IconButton>
    </div>;
};

export default Section;
