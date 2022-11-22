import {FC} from "react"
import "./AppHeader.css";

type AppHeaderProps = {
    text: string
}

const AppHeader: FC<AppHeaderProps> = ({text}) => {
    return <h1>{text}</h1>
}

export default AppHeader;