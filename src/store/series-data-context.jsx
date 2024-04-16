// import { createContext, useState } from "react";
// import PropTypes from 'prop-types';
// import { fetchSeries } from "../util/http";

// const seriesCtx = createContext({
//     postItem: [
//         // title: ,
//         // description: ,
//         // release: ,
//     ],
// });

// const propTypes = {
//     children: PropTypes.func,
// };

// export function SeriesContextProvider({children}) {
//     const [seriesData, setSeriesData] = useState();
//     const [modalIsVisible, setModalIsVisible] = useState(false);

//     function queryData() {
//         setSeriesData(fetchSeries)
//     }

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

// SeriesContextProvider.propTypes = propTypes;