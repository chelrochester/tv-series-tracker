// import { createContext, useState } from "react";

// const seriesCtx = createContext({
//     postItem: [],
// });

// // eslint-disable-next-line react/prop-types
// export function SeriesContextProvider({children}) {
//     // eslint-disable-next-line no-unused-vars
//     const [seriesData, setSereiesData] = useState();
//     const [modalIsVisible, setModalIsVisible] = useState(false);

//     function showModalHandler() {
//       setModalIsVisible(true);
//     }
  
//     function hideModalHandler() {
//       setModalIsVisible(false);
//   }

//     const ctxValue = {
//         items: seriesData.title,
//         onCreatePost: showModalHandler,
//         isPosting: modalIsVisible,
//         onStopPosting: hideModalHandler
//     }

//     return (    
//         <seriesCtx.Provider value={ctxValue}>
//             {children}
//         </seriesCtx.Provider>
//     )
// }