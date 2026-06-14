// import "./Navbar.css";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";

// <div className="nav-icon">
//   <IoCall />
// </div>;

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <h2>
//           whistle
//           <sup
//             style={{
//               fontSize: "10px",
//               verticalAlign: "super",
//               fontWeight: "bolder",
//             }}
//           >
//             ™
//           </sup>
//         </h2>
//         <span style={{ fontWeight: "bolder" }}>AND SMILE</span>
//       </div>
//       <div className="nav-icon">
//         <FaPhoneAlt />
//       </div>
//     </nav>
//   );
// }


import "./Navbar.css";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <h2>
          whistle
          <sup className="trademark">™</sup>
        </h2>
        <span>AND SMILE</span>
      </div>

      {/* Call Icon (click to call) */}
      <a href="tel:+919999999999" className="nav-icon">
        <FaPhoneAlt />
      </a>
    </nav>
  );
}
