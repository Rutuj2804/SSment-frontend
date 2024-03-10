export const getBatchRoute = (role: number) => {
	if (role === 901 || role === 401) 
        return {
            hasVisibility: true,
            link: "/a/batches"
        } 
    else if(role === 201) 
        return {
            hasVisibility: true,
            link: "/batches"
        }
    else
        return {
            hasVisibility: false,
            link: ""
        }
};
export const getTermRoute = (role: number) => {
	if (role === 901 || role === 401) 
        return {
            hasVisibility: true,
            link: "/a/terms"
        } 
    else if(role === 201) 
        return {
            hasVisibility: true,
            link: "/terms"
        }
    else
        return {
            hasVisibility: false,
            link: ""
        }
};

export const getTestRoute = (role: number) => {
	if (role === 901 || role === 401) 
        return {
            hasVisibility: true,
            link: "/a/batches"
        } 
    else if(role === 201) 
        return {
            hasVisibility: true,
            link: "/batches"
        }
    else
        return {
            hasVisibility: false,
            link: ""
        }
};

export const getRoleAssignmentRoute = (role: number) => {
	if (role === 901 || role === 401) 
        return {
            hasVisibility: true,
            link: "/a/assignments"
        } 
    else if(role === 201) 
        return {
            hasVisibility: true,
            link: "/assignments"
        }
    else
        return {
            hasVisibility: false,
            link: ""
        }
};

