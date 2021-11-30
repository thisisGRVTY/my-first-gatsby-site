import React from "react"
import * as serviceStyles from "./service.module.scss" 

function Services() {

  const services = [
    { 
      id: 1, 
      title: 'Concept.', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde accusantium eligendi ab numquam perspiciatis eos praesentium at, vel culpa eius consequuntur veniam, exercitationem dolores asperiores? Illo possimus vel modi.', 
  }, 
  { 
      id: 2, 
      title: 'Design.', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde accusantium eligendi ab numquam perspiciatis eos praesentium at, vel culpa eius consequuntur veniam, exercitationem dolores asperiores? Illo possimus vel modi.', 
  }, 
  { 
      id: 3, 
      title: 'Print.', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde accusantium eligendi ab numquam perspiciatis eos praesentium at, vel culpa eius consequuntur veniam, exercitationem dolores asperiores? Illo possimus vel modi.', 
  }, 
  { 
      id: 4, 
      title: 'Publish.', 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic unde accusantium eligendi ab numquam perspiciatis eos praesentium at, vel culpa eius consequuntur veniam, exercitationem dolores asperiores? Illo possimus vel modi.', 
  }, 
  ]


    const getServiceContent = services => {
        let content = [];
        for (let idx in services) {
          const item = services[idx];
          content.push(

            <div className={serviceStyles.service}>
              <div className={serviceStyles.serviceTitle}>
                    <div className={serviceStyles.serviceIcon}></div>
                    <h1 key={item.id}>{item.title}</h1>
              </div>
              <p key={item.id} className={serviceStyles.serviceDescription}>{item.description}</p>
            </div>
          );
        }
        return content;
    }
                                    
    return (
        <div>{getServiceContent(services)}</div>
    );

    
  }



export default Services