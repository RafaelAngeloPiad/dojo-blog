import React from 'react';

import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>SORRY</h2>
            <p>THIS PAGE CANNOT BE FOUND HONEY</p>
            <Link to='/'>Go back to homepage</Link>
        </div>
     );
}
 
export default NotFound;