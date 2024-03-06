import React from "react";

const Section = () => {
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
    </div>;
};

export default Section;
