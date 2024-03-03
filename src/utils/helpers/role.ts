import { useSelector } from "react-redux";
import { RootState } from "../../store";

export const useAccessRole = () => useSelector((state: RootState) => state.profile.user.instituteId?._id)