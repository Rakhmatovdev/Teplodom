import { NavLink } from "react-router-dom"

const PageNotFound = () => {
  return (<>
    <h1 className="text-danger">Page Not Found !!!</h1>
    <img src={`https://www.oxxy.in/404.gif`} alt="" />
    <NavLink to={"/"} className="btn btn-primary">Go to home</NavLink>
  </>)
}

export default PageNotFound