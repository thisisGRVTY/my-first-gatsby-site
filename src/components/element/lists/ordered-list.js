import React from "react"

const OrderedList = (props) => {

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
        <ol>
            {getListContent(props.list)}
        </ol>
    )
}

export default OrderedList