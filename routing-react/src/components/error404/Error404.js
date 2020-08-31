import React from "react";
import { useLocation } from 'react-router-dom';
function Error404 () {
    let location = useLocation ();
    return (
        <div>
          <h2> Error 404 </h2>
          <h3> No Route found <code> {location.pathname} </code>  </h3>
        </div>
    )
}
export default Error404;