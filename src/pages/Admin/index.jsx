import { Sidebar } from "../../componentes/Sidebar";
import { Breadcrumb, Button, Menu } from "antd";
import { BiCog, BiGridAlt, BiGroup, BiHome, BiReceipt } from "react-icons/bi";
import { Navbar } from "../../componentes/Navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { AdminContent } from "./styles";
import { useEffect } from "react";

export function Admin() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const paths = pathname.split("/").filter(path => path)

    //trabalhar com ciclo de vida do react
    useEffect(() => {
        if (paths.length === 1) {
            navigate("/admin/dashboard")
        }
    }, [])

    return (
        <div>
            <Navbar />
            <Menu
                onClick={(event) => navigate(event.key)}
                style={{ width: 250, position: "fixed", left: 0, top: 50 }}
                mode="inline"
                items={[
                    { label: "Dashboard", key: "dashboard", icon: <BiGridAlt size={22} /> },
                    { label: "Posts", key: "posts", icon: <BiReceipt size={22} /> },
                    {
                        label: "Usuarios", key: "usuarios", icon: <BiGroup size={22} />, children: [
                            { Key: 'grupo-usuario', label: 'Grupos de Usuarios' },
                            { Key: 'Permissões', label: 'Permissções' },
                        ]
                    },
                    {
                        label: "Configurações", key: "configuracoes", icon: <BiCog size={22} />
                    }
                ]} />

            <AdminContent>
                <Breadcrumb
                    items={[
                        { title: <BiHome /> },
                        { title: "admin" },
                        { title: paths[1] },
                    ]}
                />
                <Outlet />
            </AdminContent>
        </div>
    )
}