import { useEffect, useState } from "react";


function Content() {

    // 1. useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // - Goi callback sau khi component thêm element vào DOM
    // 2. useEffect(callback.[]) 
    // 3. useEffect(callback,[deps])

    // 1. Callback luôn được gọi sau khi component mounted
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())  
        .then(posts => {
           setPosts(posts);
        })
    })
   
        
    
    return (
        <div>
            <input
                value = {title}
                onChange = {e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                <li key = {post.id}>{post.title}</li>))}
                
            </ul>
        </div>
    );
}
export default Content