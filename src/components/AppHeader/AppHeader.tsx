import React from "react"
import "./AppHeader.css";

type AppHeaderProps = {
    text: string
}

const AppHeader = ({text}: AppHeaderProps) => {
    return <h1>{text}</h1>
}

export default AppHeader;