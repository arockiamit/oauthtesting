// import React, { useState } from 'react';

// import song from '../static/siren.mp3';

// const siren = new Audio(song);
// siren.load();

// export default function Siren() {
//   const [audio, setAudio] = useState(false);
//   const sirenaudio = () => {
//     if (audio === false) {
//       siren.play();
//       setAudio(true);
//     } else if (audio === true) {
//       siren.pause();
//       setAudio(false);
//     }
//   };

//   return (
//     <div>
//       <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
//       <button type="submit" id="audio-button" onClick={sirenaudio}>
//         <i className="bx bxs-volume-full" />
//       </button>
//     </div>
//   );
// }
