import React from "react";
import { Input } from "../../library";

const PaymentAndConfirmation = () => {
	return (
		<div>
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<Input
						label="Promo Code"
						placeholder="Enter a Promo Code"
					/>
				</div>
			</div>
		</div>
	);
};

export default PaymentAndConfirmation;
