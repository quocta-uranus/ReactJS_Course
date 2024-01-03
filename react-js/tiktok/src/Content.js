import { useEffect, useLayoutEffect, useState } from "react";
import {memo} from "react";
// 
// const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

// const lessons = [
//     {
//       id: 1,
//       name: "ReactJS là gì? Tại sao nên học ReactJS?",
//     },
//     {
//       id: 2,
//       name: "SPA/MPA là gì?",
//     },
//     {
//       id: 3,
//       name: "Ưu điểm của SPA",
//     },
//   ];
function Content({onIncrease}) {
    return (
        <div>
            <h1>Content</h1>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
    // const [count, setCount] = useState(0);
    // useLayoutEffect(() => {
    //     if( count > 3 )
    //     setCount(0)
    
    // }, [count])
    // const handleRun = () => {
    //     setCount(count + 1)
    // }
    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={handleRun}>Run</button>
    //     </div>
    // )

    // 1. useEffect(callback)
    // - Gọi callback mỗi khi component re-render
    // - Goi callback sau khi component thêm element vào DOM
    // 2. useEffect(callback.[]) 
    // 3. useEffect(callback,[deps])
    //- Callback sẽ được gọi lại mỗi khi deps thay đổi
    // 1. Callback luôn được gọi sau khi component mounted
    // const [title, setTitle] = useState('')
    // const [posts, setPosts] = useState([])
    // const [type, setType] = useState('posts')
    // const [showGoToTop, setShowGoToTop] = useState(false)
    // useEffect(() => {
    //     // fetch('https://jsonplaceholder.typicode.com/posts')
    //     // .then(response => response.json())  
    //     // .then(posts => {
    //     //    setPosts(posts);
    //     // })
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //     .then(response => response.json())
    //     .then(posts => {
    //         setPosts(posts);
    //     })
    // }, [type])
    // useEffect(() => { 
    //     const handleScroll = () => {
    //         if (window.scrollY >= 200) {
    //             setShowGoToTop(true)
    //         } else {
    //             setShowGoToTop(false)
    //         }
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // },[])
    // return (
    //     <div>
    //         {tabs.map(tab => (
    //             <button 
    //             key={tab}
    //             style={type === tab ? {color: 'red'} : {color: 'black'}}
    //             onClick={() => setType(tab)}
    //             >
    //                 {tab}
    //                 </button>
                
    //             ))}
    //         <input
    //             value = {title}
    //             onChange = {e => setTitle(e.target.value)}
    //         />
    //         <ul>
    //             {posts.map(post => (
    //             <li key = {post.id}>{post.title || post.name}</li>))}
    //             {showGoToTop && (
    //                 <button
    //                 style={{position: 'fixed', right: 20, bottom: 20}}

    //                 >Go To Top</button>
    //             )}
    //         </ul>
    //     </div>
    // );
    ////////////////////////////////////////////////////////////////////    

    // const [width,setWidth] = useState(window.innerWidth)
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWidth(window.innerWidth)
    //     }
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // },[])
    // return (
    //     <div>
    //         <h1>{width}</h1>
    //     </div>
    // )

    /////////////////////////////////////////////////////////////////////

    // const [coutndown, setCountdown] = useState(180)

    // // setInterval(() => {
    // //     setCountdown(coutndown - 1)
    // // }, 1000)
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCountdown(prevState => prevState - 1)
    //     }, 1000)

        
    //     return () => clearInterval(timer)
    // }, [])

    // return (
    //     <div>
    //         <h1>{coutndown}</h1>    
    //     </div>
    // )
    ////////////////////////
    // const [avatar, setAvatar] = useState()
    // useEffect(() => {
    //     //Clear up
    //     return () => {
    //       avatar &&  URL.revokeObjectURL(avatar.preview)   
    //     }
    // },[avatar])

    // const handlePreviewAvatar = (e) => {
    //     const file = e.target.files[0]
    //     file.preview = URL.createObjectURL(file)
    //     setAvatar(file)

    // }
    // return (
    //     <div>
    //         <input
    //          type = "file"
    //          onChange= {handlePreviewAvatar}

    //         />
    //         {avatar && (
    //         <img src = {avatar.preview} alt = "" width = "80%"/>
    //         )}
    //     </div>
    // )
////////////////////////////////////////////////////////////////
    // const [room, setRoom] = useState(1);

    // useEffect(() => {
    //   const handleEvent = (e) => {
    //     console.log(e.detail);
    //   };
  
    //   window.addEventListener(`lesson-${room}`, handleEvent);
  
    //   return () => {
    //     window.removeEventListener(`lesson-${room}`, handleEvent);
    //   };
    // }, [room]);
  
    // return (
    //   <div className="main">
    //     <ul>
    //       {lessons.map((lesson) => (
    //         <div key={lesson.id}>
    //           <li
    //             style={room === lesson.id ? { color: "red" } : {}}
    //             onClick={() => setRoom(lesson.id)}
    //           >
    //             {lesson.id}. {lesson.name}
    //           </li>
    //         </div>
    //       ))}
    //     </ul>
    //   </div>
    // );

}
export default memo(Content)