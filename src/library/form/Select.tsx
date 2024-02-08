import React, { useState } from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

interface SelectProps {
	options: any[];
	label?: string;
	name: string;
	value: string;
	startIcon?: React.ReactNode;
	bottomOptionText?: string;
	selected: any;
	onChange?: (value: any) => void;
}

const Select = ({
	options,
	label,
	name,
	value,
	bottomOptionText,
	selected,
	onChange,
	startIcon,
}: SelectProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const getSelected = () => {
		return options.filter((o) => o[value] === selected)[0][name];
	};

	return (
		<div className="dropdown__Container">
			{label ? <label>{label}</label> : null}
			<div
				className={`dropdown__Wrapper`}
				onClick={() => setIsOpen((i) => !i)}
			>
				<div className="dropdown__Display">
					{startIcon ? (
						<>
						<div className="dropdown__StartIcon">{startIcon}</div>
						<div className="vr"></div>
						<span className="mx-1"></span>
						</>
					) : null}
					<div className="dropdown__SelectedOption">
						{getSelected()}
					</div>
					<div className="dropdown__Right">
						{isOpen ? (
							<BsFillCaretUpFill />
						) : (
							<BsFillCaretDownFill />
						)}
					</div>
				</div>
				<div className={`dropdown__OptionSpace ${isOpen && "active"}`}>
					{options.map((o) => (
						<div
							key={o[value]}
							className={`dropdown__Option`}
							onClick={() =>
								onChange ? onChange(o[value]) : null
							}
						>
							{o[name]}
						</div>
					))}
					{bottomOptionText ? (
						<div className="dropdown__Option">
							{bottomOptionText}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Select;
