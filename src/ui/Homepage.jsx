
// function Homepage({isDark}) {
//   return (
//     <section id="home" className="d-flex flex-column justify-content-center align-items-center" style={{padding:"60px 250px"}}>
//       <div className="p-5 fs-1 fw-bold">Asim Is Here</div>
//       <div className="p-5 fs-1 text-center">Your aspiring frontened developer with a love for clean design</div>
//       <button className="p-2 fs-5 rounded-5"       style={
//         isDark
//           ? {
//               backgroundColor: "	rgba(15, 10, 25, 0.95)",
//               color: "rgba(220, 190, 255, 0.85))",
//             }
//           : {
//               backgroundColor: "	rgba(230, 255, 250, 1)",
//               color: "	rgba(30, 60, 60, 0.85)",
//             }
//       }>Download resume</button>
//     </section>
//   );
// }import "./Homepage.css";

import "./Homepage.css";

function Homepage({ isDark }) {
  return (
    <section id="home" >
      <div className="title">Asim Is Here</div>
      <div className="subtitle">
        Your aspiring frontend developer with a love for clean design
      </div>
      <button className="resume-btn">Download resume</button>
    </section>
  );
}

export default Homepage;

