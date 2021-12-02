import React from "react"

const Table = (props) => {

    const getTableHeader = props => {
        let content = [];

        for (let idx in props) {
            const item = props[idx];
            content.push(
                    <th key={item.id}>{item.title}</th>
            );
        }

        return (
            <thead>
                <tr>
                    {content}
                </tr>
            </thead>
        )
    }

    const getTableContent = props => {
        /* let content = [];

        for (let idx in props) {
            const item = props[idx];
            content.push(
                    <td key={item.id}>{item.title}</td>
            );
        } */

        return (
            <tbody>
                {/* <tr>
                    {content}
                </tr> */}

                {props.length > 0 ? (
                    props.map((t) => (
                        <tr key={t.id}>
                            <td>{t.title}</td>
                            <td>{t.subtitle}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={props.length}>No Content in <b>[tableContent]</b> provided!</td>
                    </tr>
                    
                )}

            </tbody>
            
        )
    }


    return(
        <table className="table">
            {getTableHeader(props.tableHeader)}
            {getTableContent(props.tableContent)}
        </table>
    )
}

export default Table