import { Table } from 'antd'
import { useEffect, useState } from 'react';

export function Posts() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const columns = [
        {
            title: "ID",
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: "Título",
            dataIndex: 'title',
            key: 'title',
        }
    ];

    // const data = [
    //     {
    //         name: "Daniel",
    //         age: 28,
    //     },
    //     {
    //         name: "Maria",
    //         age: 30,
    //     },
    // ]

    useEffect(() => {
        async function fetchPosts() {
            //trazer a tela de carregamento
            setLoading(true)
            
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            
            //terminar a tela de carregamento
            setLoading(false)
            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <div>

            <h1>Posts</h1>

            <Table rowKey='id' columns={columns} dataSource={posts} loading = {loading} />

        </div>

    )
}