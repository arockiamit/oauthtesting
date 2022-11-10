// import React, { useState } from 'react';

// import Webcam from 'react-webcam';

// const WebcamComponent = () => {
//   <Webcam />;
// };
// WebcamComponent();

// const videoConstraints = {
//   width: 400,
//   height: 400,
//   facingMode: 'user',
// };

// export default function Picture() {
//   const [img, setImg] = useState('');

//   const webcamRef = React.useRef(null);

//   const capture = async () => {
//     const picSrc = webcamRef.current.getScreenshot();
//     setImg(picSrc);
//     await fetch('http://localhost:3001/picture', {
//       method: 'POST',
//       body: JSON.stringify({ img }),
//       headers: {
//         'content-type': 'application/json',
//       },
//     });
//   };
//   // eslint-disable-next-line no-console
//   console.log(img);

//   return (
//     <div>
//       <h2 className="text-heading">Webcam</h2>
//       <div>
//         {img === '' ? (
//           <Webcam
//             audio={false}
//             height={200}
//             width={220}
//             ref={webcamRef}
//             screenshotFormat="image/jpeg"
//             videoConstraints={videoConstraints}
//           />
//         ) : (
//           <img src={img} alt="My img" />
//         )}
//       </div>
//       <div>
//         <button
//           type="submit"
//           onClick={(e) => {
//             e.preventDefault();
//             capture();
//           }}
//           className="webcam-button"
//         >
//           Capture
//         </button>
//       </div>
//       <div>
//         <img src={img} alt="pic" />
//       </div>
//     </div>
//   );
// }
