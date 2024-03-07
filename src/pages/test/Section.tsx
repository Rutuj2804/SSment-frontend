import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { setAddSection } from "../../store/layout/slice";
import { useDispatch, useSelector } from "react-redux";
import { AddRounded } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { useAccessRole } from "../../utils/helpers";
import { getQuestionsOfSection, getSectionsOfTest } from "../../store/actions";
import { setBreadcrumps } from "../../store/breadcrumps/slice";
import { SectionCard } from "../../components/card";

const Section = () => {
    const [sectionSelected, setSectionSelected] = useState("")

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

    useEffect(() => {
        if(sections.length) setSectionSelected(sections[0]._id!)
        else setSectionSelected("")
    }, [sections])

    useEffect(() => {
        if(sectionSelected) dispatch(getQuestionsOfSection({ instituteId, sectionId: sectionSelected }))
    }, [sectionSelected, dispatch, instituteId])

	return <div className="sectionPage__Wrapper">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-12">
                <div className="section__SectionList">
                    {sections.map(s=><SectionCard onClick={setSectionSelected} key={s._id} section={s} testId={id!} sectionId={sectionSelected} />)}
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12">
                <div className="sectionPage__QuestionList">
                    Right
                </div>
            </div>
        </div>
        <IconButton onClick={() => dispatch(setAddSection({ isActive: true, testId: id! }))} className="sectionPage__Button"><AddRounded fontSize="large" /></IconButton>
    </div>;
};

export default Section;