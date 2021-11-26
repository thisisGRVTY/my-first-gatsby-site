import React, { Component } from "react"
import * as serviceStyles from "./service.module.scss" 

class Services extends Component {
    constructor (props){
        super(props);
    }

    render() {
        const serviceContent = [
            { 
                id: 1, 
                icon: 'iconPath', 
                title: 'Webdesign', 
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nisi maxime beatae harum debitis, dolore dolor ab facilis ipsum dicta optio iste qui, esse vero veritatis! Odio debitis nostrum mollitia?',  
            },
        ]
        const serviceName = serviceContent.map((d) => <h1 key={d.title}>{d.title}</h1>);
        const serviceDescription = serviceContent.map((d) => <p key={d.text}>{d.text}</p>);
        // -> Richtiges Content mapping abchecken https://www.taniarascia.com/getting-started-with-react/

        return(
            <div className={serviceStyles.service}>
                
                <div className={serviceStyles.serviceTitle}>
                    <div className={serviceStyles.serviceIcon}></div>
                    {serviceName}
                </div>
                
                {serviceDescription}
            </div>
        )
    }
}

export default Services