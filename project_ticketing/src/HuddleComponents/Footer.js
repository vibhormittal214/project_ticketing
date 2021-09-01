import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "fixed",
        left: "0",
        bottom: "0",
        width: "100%",
        color: "white",
        height: "40px"
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; The Huddle
            </p>
        </footer>
    )
}
