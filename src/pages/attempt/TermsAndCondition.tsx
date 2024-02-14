import React from "react";
import { Paper } from "../../components/paper";
import { Button, Checkbox } from "../../library";
import { PlayArrowRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TermsAndCondition = () => {

	const navigate = useNavigate()

	return (
		<div className="termsAndCondition__Wrapper container mt-5">
			<Paper className="p-3">
				<h4>Terms and Condition</h4>
				<p className="my-3">
					GOOGLE TERMS OF SERVICE Effective January 5, 2022 | Archived
					versions | Download PDF Country version: India What’s
					covered in these terms We know it’s tempting to skip these
					Terms of Service, but it’s important to establish what you
					can expect from us as you use Google services, and what we
					expect from you. These Terms of Service reflect the way
					Google’s business works, the laws that apply to our company,
					and certain things we’ve always believed to be true. As a
					result, these Terms of Service help define Google’s
					relationship with you as you interact with our services. For
					example, these terms include the following topic headings:
					What you can expect from us, which describes how we provide
					and develop our services What we expect from you, which
					establishes certain rules for using our services Content in
					Google services, which describes the intellectual property
					rights to the content you find in our services — whether
					that content belongs to you, Google, or others In case of
					problems or disagreements, which describes other legal
					rights you have, and what to expect in case someone violates
					these terms Understanding these terms is important because,
					by using our services, you’re agreeing to these terms.
					Besides these terms, we also publish a Privacy Policy.
					Although it’s not part of these terms, we encourage you to
					read it to better understand how you can update, manage,
					export, and delete your information. Terms Service provider
					Google services are provided by, and you’re contracting
					with: Google LLC organized under the laws of the State of
					Delaware, USA, and operating under the laws of the USA 1600
					Amphitheatre Parkway Mountain View, California 94043 USA Age
					requirements If you’re under the age required to manage your
					own Google Account, you must have your parent or legal
					guardian’s permission to use a Google Account. Please have
					your parent or legal guardian read these terms with you. If
					you’re a parent or legal guardian, and you allow your child
					to use the services, then these terms apply to you and
					you’re responsible for your child’s activity on the
					services. Some Google services have additional age
					requirements as described in their service-specific
					additional terms and policies. Your relationship with Google
					These terms help define the relationship between you and
					Google. Broadly speaking, we give you permission to use our
					services if you agree to follow these terms, which reflect
					how Google’s business works and how we earn money. When we
					speak of “Google,” “we,” “us,” and “our,” we mean Google LLC
					and its affiliates, excluding any local entities based in
					India.
				</p>
				<Checkbox
					id="terms-and-conditions"
					label="I Agree to all terms and conditions"
					description="You agree to terms and conditions of the test. This is necessary step before starting the test."
				/>
				<div className="d-flex justify-content-end">
					<Button onClick={() => navigate("/attempt-test/123")} startIcon={<PlayArrowRounded />}> Start Test</Button>
				</div>
			</Paper>
		</div>
	);
};

export default TermsAndCondition;
