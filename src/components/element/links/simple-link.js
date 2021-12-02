import React from "react"
import { Link } from "gatsby"

const SimpleLink = (props) => {
    return(
        <div>
            {/* <a class="simple-link" href={props.goTo}>{props.name}</a> */}
            <Link class="simple-link" to={props.goTo}>{props.name}</Link>
        </div>
        
    )
}

export default SimpleLink