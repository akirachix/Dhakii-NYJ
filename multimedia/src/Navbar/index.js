

// import React, { useState } from 'react';
// import './index.css';
// import Logo from '../Images/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   const [navbartext, setNavbar] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className='navbar'>
//       <div className="nav-logo">
//         <img src={Logo} alt="Rafiki" className='logo' />
        
//       </div>
//       <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//       {isMenuOpen && (
//           <div className="cancel-btn" onClick={closeMenu}>
//             <FontAwesomeIcon icon={faTimes} />
//           </div>
//         )}
//         <li onClick={() => setNavbar("home")} className={navbartext === "home" ? 'active' : ''}>
//           Home {navbartext === "home" && <hr />}
//         </li>
//         <li onClick={() => setNavbar("podcast")} className={navbartext === "contact" ? 'active' : ''}>
//           Podcasts {navbartext === "podcast" && <hr />}
//         </li>
//         <li onClick={() => setNavbar("video")} className={navbartext === "about" ? 'active' : ''}>
//           Videos {navbartext === "video" && <hr />}
//         </li>
//         <li onClick={() => setNavbar("blog")} className={navbartext === "about" ? 'active' : ''}>
//           Blogs{navbartext === "blog" && <hr />}
//         </li>
//         <li onClick={() => setNavbar("portfolio")} className={navbartext === "contact" ? 'active' : ''}>
//           Portfolios {navbartext === "portfolio" && <hr />}
//         </li>
//         <li onClick={() => setNavbar("Contacts")} className={navbartext === "contact" ? 'active' : ''}>
//           Contacts {navbartext === "Contacts" && <hr />}
//         </li>
//       </div>
//       <button className="icon" onClick={toggleMenu}>
//         <FontAwesomeIcon icon={faBars} />
//       </button>
//     </div>
//   );
// };

// export default Navbar;