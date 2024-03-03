import { Input, } from "../../library";

interface BasicInformationCProps {
    setTerm: Function;
    term: string;
}

const BasicInformation = ({ setTerm, term }: BasicInformationCProps) => {
	return (
		<div className="row">
            <div className="col-lg-12 col-md-12 col-12">
			    <Input label="Title *" onChange={e=>setTerm(e.target.value)} value={term} placeholder="Title" />
            </div>
		</div>
	);
};

export default BasicInformation;
