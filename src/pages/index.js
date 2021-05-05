import Skills from "./skills.js";
import Home from "./home.js";
import Projets from "./projets.js"
import Error404 from "./error404"


const pages = {
  "/": Home(),
  "skills": Skills(),
  "projets": Projets(),
};

export default pages;
