import React from "react"
import * as contactUsStyles from "./contact-us.module.scss"


const ContactUs = () => {
    const ContactUs = [
        { 
            id: 1, 
            title: 'Sie sind interessiert?',
            btn: 'Jetzt Anfragen',
        }, 
    ]

    const getContactUs = ContactUs => {
        let content = [];
        
        for (let idx in ContactUs) {
            const item = ContactUs[idx];
            content.push( <h1 className="sectionTitle" key={item.id}>{item.title}</h1> );
        }
        return content;
    }

    const getContactUsBTN = ContactUs => {
        let content = [];
        
        for (let idx in ContactUs) {
            const item = ContactUs[idx];
            content.push( <button className="sectionTitle btn primary-btn" key={item.id}>{item.btn}</button> );
        }
        return content;
    }



    return(
        <section className={contactUsStyles.contact}>
            <div>
                {getContactUs(ContactUs)}
                {getContactUsBTN(ContactUs)}
            </div>
        </section>
    )
}

export default ContactUs