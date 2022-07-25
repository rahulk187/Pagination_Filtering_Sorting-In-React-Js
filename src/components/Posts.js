import React from 'react'

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    //   return <ul className="list-group mb-4">
    //     {
    //         posts.map(post => (
    //             <li key={post.id} className="list-group-item">
    //                 {post.title}
    //             </li>
    //         ))
    //     }
    //   </ul>

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">userId</th>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">email</th>
                </tr>
            </thead>
            <tbody>
                {posts.map((post) => (
                    <tr key={post.id}>
                        <td>
                            {post.postId}
                        </td>
                        <td>
                            {post.id}
                        </td>
                        <td>
                            {post.name}
                        </td>
                        <td>
                            {post.email}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )

}

export default Posts
