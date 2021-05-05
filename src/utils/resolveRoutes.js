const resolveRoutes = (route) => {
        switch (route) {
            case "/":
                return route;
            case "/skills":
                return `/${route}`;
            case "/projets":
                return `/${route}`;
            default:
                return route
        }
};

export default resolveRoutes;