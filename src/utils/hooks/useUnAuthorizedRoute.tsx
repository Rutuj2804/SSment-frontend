import { NavigateFunction } from "react-router-dom";
import { getBatchRoute, getTermRoute, getTestRoute } from "../helpers";

export enum ModuleType {
    "Batch"="BATCH",
    "Test"="TEST",
    "Term"="TERM",
}

const useUnAuthorizedRoute = (
	role: number,
    type: string,
    navigate: NavigateFunction
) => {

    if(type === ModuleType.Batch) {
        const route = getBatchRoute(role)
        if(!route.hasVisibility) navigate('/404')
    }

    if(type === ModuleType.Term) {
        const route = getTermRoute(role)
        if(!route.hasVisibility) navigate('/404')
    }

    if(type === ModuleType.Test) {
        const route = getTestRoute(role)
        if(!route.hasVisibility) navigate('/404')
    }

	return role;
};

export default useUnAuthorizedRoute;