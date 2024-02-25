import React from "react";
import { Input, Select } from "../../library";

const option = [
    { name: "MIT ADT University", value: "1" },
    { name: "MIT WPU University", value: "2" },
    { name: "IIIT Delhi", value: "3" },
]

const BasicInformation = () => {
	return (
		<div className="row">
            <div className="col-lg-6 col-md-6 col-12">
			    <Input label="Title *" placeholder="Title" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
                <Select
                    name="name"
                    value="value"
                    selected={"1"}
                    options={option}
                    label="Select Institute *"
                />
            </div>
		</div>
	);
};

export default BasicInformation;
