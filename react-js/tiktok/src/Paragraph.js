import { useContext } from "react"
import { ThemeContext } from "./App"

function Paragraph() { 
    const theme = useContext(ThemeContext)
    return (
        <p className= {theme}>
            Tran Anh Quoc Dep Trai
        </p>    
    )
}
export default Paragraph