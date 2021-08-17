import { Link, useRouteMatch, Route } from "react-router-dom";
import SinglePage from "./SinglePage";
import React from "react"

const About = () => {
  console.log(useRouteMatch());

  const { url, path } = useRouteMatch()
  //Then, update the return statement so you have:
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  )
}

export default About
