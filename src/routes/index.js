import Error404 from "../pages/error404.js";
import getHash from "../utils/getHash.js"
import resolveRoutes from '../utils/resolveRoutes';
import Skills from "../pages/skills.js";
import Home from "../pages/home.js";
import Projets from "../pages/projets.js"

const routes = {
  "/": Home(),
  "skills": Skills(),
  "projets": Projets(),
};
const router = async () => {
  const content = null || document.getElementById('content')
  let hash = getHash();
  let route = await resolveRoutes(hash)
  let render = routes[route] ? routes[route] : Error404();
  content.innerHTML = await render;
};

export default router;