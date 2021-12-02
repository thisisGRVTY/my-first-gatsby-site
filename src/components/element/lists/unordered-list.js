import React from "react"

const UnorderedList = (props) => {

    const getListContent = props => {
        let content = [];

        for (let idx in props) {
          const item = props[idx];
          content.push(
              <li key={item.id}>{item.ul}</li>
          );
        }
        return content;
    }


    return(
        <ul>
            {getListContent(props.list)}
        </ul>
    )
}

export default UnorderedList