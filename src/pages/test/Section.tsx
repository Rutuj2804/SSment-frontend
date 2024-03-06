import { IconButton } from "@mui/material";
import React from "react";
import { setQuestion } from "../../store/layout/slice";
import { useDispatch } from "react-redux";
import { AddRounded } from "@mui/icons-material";

const Section = () => {

    const dispatch = useDispatch<any>()

	return <div className="section__Wrapper">
        <div className="row">
            <div className="col-lg-4 col-md-3 col-12">
                <div className="section__SectionList">
                    Left
                </div>
            </div>
            <div className="col-lg-8 col-md-9 col-12">
                <div className="section__QuestionList">
                    Right
                </div>
            </div>
        </div>
        <IconButton onClick={() => dispatch(setQuestion(true))} className="section__Button"><AddRounded fontSize="large" /></IconButton>
    </div>;
};

export default Section;
