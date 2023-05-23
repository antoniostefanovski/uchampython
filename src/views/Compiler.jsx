import React from "react";
import { Helmet } from "react-helmet";

function Compiler () {
    return(
        <>
            {/* <div data-pym-src="https://www.jdoodle.com/embed/v0/6dYA"></div>
            <Helmet>
                <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"></script>
            </Helmet> */}
            <div>
            <iframe src="https://trinket.io/embed/python/3d8d7ce66b" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
            </div>

            <div>
                <iframe src="https://replit.com/join/zdsukyyrzc-antoniostefanov" width="600" height="400" />
            </div>
        </>
    )
}

export default Compiler;