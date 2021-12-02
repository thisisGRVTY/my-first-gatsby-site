import React from "react"

const MainColors = () => {
    return(
        <div style={{
            display: `flex`,
            flexDirection: `row`,
        }}>
            <div className="color-card" style={{ background: `green` }}></div>
            <div className="color-card" style={{ background: `blue` }}></div>
            <div className="color-card" style={{ background: `tomato` }}></div>
            <div className="color-card" style={{ background: `purple` }}></div>
            <div className="color-card" style={{ background: `yellow` }}></div>
            <div className="color-card" style={{ background: `orange` }}></div>
            <div className="color-card" style={{ background: `red` }}></div>
            <div className="color-card" style={{ background: `cyan` }}></div>
        </div>
    )
}

export default MainColors