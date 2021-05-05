import error404 from "../pages/error404.js";
import pages from "../pages/index.js";
import getHash from "../utils/getHash.js"
import resolveRoutes from '../utils/resolveRoutes';

const router = async () => {
  const content = document.getElementById("content");
  let hash = getHash();
  let route = await resolveRoutes(hash)
  console.log(route)
  let render = pages[route] ? pages[route] : error404()
  content.innerHTML = await render;

};

export default router ;