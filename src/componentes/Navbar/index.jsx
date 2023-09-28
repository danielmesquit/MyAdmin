import { BiBell, BiExit } from "react-icons/bi"
import { Container } from "./Styles"
import { Button } from "antd";
import { useNavigate } from "react-router-dom";



export function Navbar() {
    const navigate = useNavigate()


    return (
        <Container>
            <div>
                <h2>Logo Name</h2>
            </div>
            <div>
                <ul>
                    <li><Button type="text" shape="circle" icon={<BiBell size={22} />} /></li>
                    <li><Button onClick={() => navigate("/Admin")} type="text" shape="circle" icon={<BiExit size={22} />} /></li>
                </ul>
            </div>
        </Container>
    )
}