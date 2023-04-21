import React from "react";
//import ListOptionNavBarComponent from "./ListOptionNavBarComponent";
import CartWidget from "./CartWidget";
// import 'css'
import {NavLink, Link} from 'react-router-dom'

const NavBarComponent = () => {
  return(
    <nav className="NavBar">
      <Link to='/'>
        <h3>Ecommerce</h3>
      </Link>
      <div className="Categories">
        <NavLink to={'/category/celular'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}> Celulares</NavLink>
        <NavLink to={'/category/tablet'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}> Tablets</NavLink>
        <NavLink to={'/category/notebook'} className={({isActive}) => isActive ? 'ActiveOption': 'Option'}> Notebook</NavLink>
      </div>
      <CartWidget/>
    </nav>
  )
}
export default NavBarComponent;

// const NavBarComponent = (props) => {
//   const nameOptions = ["Productos 3D disponibles", "Productos 3D Personalizados", "Desarrollo WEB"];
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//       <div className="container-fluid">
//         <span className="navbar-brand" >
//           <img width={100} height={100} src="https://th.bing.com/th/id/OIP.qoMCkWoVmtx0IaTeB5mOJgHaJS?w=131&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
//           </span>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <ListOptionNavBarComponent nameOption={nameOptions}/>
//           <CartWidget />
//         </div>
//       </div>
//     </nav >)
