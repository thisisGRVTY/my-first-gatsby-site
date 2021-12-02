import React from "react"

const LightColors = () => {
    const lightTone1 = `
        background: hsl(0, 0, 50);
    `;

    return(
        <div style={{
            display: `flex`,
            flexDirection: `row`,
        }}>
            <div className="color-card" style={lightTone1}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
            <div className="color-card" style={{ background: `darkgray` }}></div>
        </div>
    )
}

/* https://www.joshwcomeau.com/css/css-variables-for-react-devs/ */

export default LightColors