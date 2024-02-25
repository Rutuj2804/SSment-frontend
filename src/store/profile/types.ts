import { BaseInterface } from "..";
import { UserInterface } from "../../utils/types";

export interface ProfileState {
    user: UserInterface;
}

export interface UpdateProfileRequest extends BaseInterface {
    firstname: string;
    midname: string;
    lastname: string;
    dob: Date | null,
    country: string,
    state: string
}

export interface ResetPasswordRequest extends BaseInterface {
    password: string;
    cpassword: string;
}