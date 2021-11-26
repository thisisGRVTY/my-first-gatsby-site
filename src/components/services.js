import React, { Component } from "react"
import * as serviceStyles from "./service.module.scss" 

class Services extends Component {
    render() {
        const serviceContent = [
            { 
                id: 1, 
                icon: 'iconPath', 
                title: 'Webdesign', 
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nisi maxime beatae harum debitis, dolore dolor ab facilis ipsum dicta optio iste qui, esse vero veritatis! Odio debitis nostrum mollitia?',  
            },
            { 
                id: 2, 
                icon: 'iconPath', 
                title: 'Grafikdesign', 
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nisi maxime beatae harum debitis, dolore dolor ab facilis ipsum dicta optio iste qui, esse vero veritatis! Odio debitis nostrum mollitia?',  
            },
        ]
    
        return(
            <div className={serviceStyles.service}>
                <div className={serviceStyles.serviceTitle}>
                    <div className={serviceStyles.serviceIcon}></div>
                    <h1>Services</h1>
                </div>
    
                <p></p>
            </div>
        )
    }
}

export default Services