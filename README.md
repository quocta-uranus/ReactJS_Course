### ReactJS_Course

## **ReactDOM**

`React.createElement()`
```JavaScript
const element = React.createElement('div', { className: 'container' }, 'Hello, World!');


```
```JavaScript
    React.createElement(type,{props},children);
```

`type`: loại phần tử HTML (h1,p, nút, v.v.).
`props`: thuộc tính của đối tượng ({style:{size:10px}} hoặc Eventhandlers, classNames, v.v.).
`children`: bất cứ thứ gì cần được bao bọc bởi thành phần đó.


## **JSX**
`JSX` là một phần của React, nó là một cú pháp mở rộng của JavaScript cho phép bạn viết các cấu trúc giống HTML trong mã JavaScript. Nó giúp làm cho việc tạo và quản lý giao diện người dùng trong React trở nên dễ dàng và rõ ràng hơn.
```JavaScript
const element = <div>Hello, World!</div>;
```
```JavaScript
<type {props} >{children}</type
```

## **Props**

`props` là một cách để truyền dữ liệu từ một thành phần cha đến một thành phần con. 

```JavaScript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Kelvin" />;

```

## **NodeJS**
`Node.js` là một nền tảng runtime được xây dựng trên JavaScript, sử dụng trình thông dịch JavaScript V8 của Google. 

## **Webpack**

**Webpack**: Là một công cụ mạnh mẽ cho việc đóng gói (bundling) mã nguồn JavaScript, CSS, hình ảnh và các tài nguyên khác trong ứng dụng web của bạn. Nó cho phép bạn quản lý và tối ưu hóa mã nguồn của mình bằng cách tạo ra các bundle (gói) tối ưu để tải xuống


## **NPM**
`NPM (Node Package Manager)` là một công cụ quản lý gói (package manager) cho Node.js và môi trường JavaScript. Nó được sử dụng để tải xuống, cài đặt, quản lý và chia sẻ các thư viện, công cụ và tài nguyên khác cho phát triển ứng dụng JavaScript.
## **NPX**
`NPX` là một công cụ đi kèm với Node.js từ phiên bản 5.2.0 trở lên. Nó được sử dụng để chạy các công cụ hoặc thực thi các gói npm mà không cần cài đặt chúng cục bộ trên máy tính của bạn.
## **YARN**
`YARN` là một công cụ quản lý gói (package manager) cho JavaScript, tương tự như npm (Node Package Manager). Yarn được phát triển bởi Facebook, Google, Exponent và Tilde. Nó cung cấp một cách hiệu quả và nhanh chóng để quản lý các phụ thuộc (dependencies) và các gói trong các dự án JavaScript.
## **HOOK** 
**Hook** giúp bạn tái sử dụng logic, giảm thiểu lặp lại mã, và làm cho các thành phần hàm trở nên mạnh mẽ và linh hoạt hơn.
`useState`: Hook này cho phép bạn sử dụng trạng thái trong thành phần hàm
`useEffect`: Hook này giúp bạn thực hiện các tác vụ sau khi thành phần đã render hoặc sau mỗi lần render
`useContext`: Cho phép bạn sử dụng Context trong các thành phần hàm.
`useReducer`: Tương tự như useState, nhưng sử dụng một hàm reducer để quản lý trạng thái phức tạp hơn
`useMemo` và `useCallback`: Được sử dụng để tối ưu hóa hiệu suất. useMemo giúp bạn lưu kết quả của một hàm được tính toán và chỉ tính toán lại khi các giá trị dependencies thay đổi. useCallback giúp tránh việc tạo lại các hàm callback mỗi khi render.

#### useState

```JavaScript
const [counter, setCounter] = useState(1);
const handleIncrease = () => {
   setCounter(counter + 1);
  setCounter(prevSate => prevSate + 1);
}
return (
  <div className="App" style={{textAlign:"center"}}>
    <h1 > {counter}</h1>
    <button onClick = {handleIncrease}>+</button>
  </div>
);

```



Two-way binding trong React
```JavaScript 
const courses = [
  {
   id : 1,
   name : 'HTML, CSS, JS'
  },
  {
    id : 2, 
    name : 'ReactJS'
  
   },
  {
   id : 3,
    name : 'NodeJS'
  }

 ]

const [checked, setChecked] = useState([]) 
const handleCheck = (id) => {
  setChecked(prev => {
    if (prev.includes(id)) {
      return prev.filter(item => item !== id)
    }
    return [...prev, id]
  })
 }
 const handleSubmit = () => {
  console.log({ids: checked})
 }
 return (
   <div className="App" style={{textAlign:"center"}}>
    {courses.map(course => (
      <div key = {course.id}>
        <input
    type = "radio" 
       type = "checkbox"
        checked={checked.includes(course.id)}
        onChange = {() => handleCheck(course.id)}
       />
       {course.name}
       </div>
   ))}
    <button onClick={handleSubmit}>Register</button>
  </div>
)

```


Todolist with useState
```JavaScript
    const storageJobs = localStorage.getItem('jobs')
   const [job, setJob] = useState('')
   const [jobs,setJobs] = useState([])
   const handleSubmit = () => {
     setJobs(prev => {
       const newJobs= [...prev, job]
       const jsonJobs = JSON.stringify(newJobs)
       localStorage.setItem('jobs', jsonJobs)
       return newJobs
     })
     setJob('')
   }
   return (

     <div className="App" style={{padding : 32}}>
       <input
        value={job} 
        onChange={e => setJob(e.target.value)}
        />
       <button onClick = {handleSubmit}>ADD</button>
       <ul>
         {jobs.map((job, index) => (
           <li key={index}>{job}</li>
         ))}
       </ul>

       </div>
   )
```
 

Mounted & Unmounted
```JavaScript

    const[show, setShow] = useState(false)
    return (
      <div className="App" style={{textAlign:"center"}}>
        <button onClick = {() => setShow(!show)}>Show</button>
        {show && <Content/>}
      </div>
    )   
```


useEffect



useEffect with dependencies

  ```JavaScript
  const [title, setTitle] = useState('')
     const [posts, setPosts] = useState([])
     const [type, setType] = useState('posts')
     const [showGoToTop, setShowGoToTop] = useState(false)
     useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())  
          .then(posts => {
             setPosts(posts);
          })
         fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then(response => response.json())
         .then(posts => {
             setPosts(posts);
         })
     }, [type])
     useEffect(() => { 
         const handleScroll = () => {
             if (window.scrollY >= 200) {
                 setShowGoToTop(true)
             } else {
                 setShowGoToTop(false)
             }
         }
         window.addEventListener('scroll', handleScroll)
         return () => {
             window.removeEventListener('scroll', handleScroll)
         }
     },[])
     return (
         <div>
             {tabs.map(tab => (
                 <button 
                 key={tab}
                 style={type === tab ? {color: 'red'} : {color: 'black'}}
                 onClick={() => setType(tab)}
                 >
                     {tab}
                     </button>
                
                 ))}
             <input
                 value = {title}
                 onChange = {e => setTitle(e.target.value)}
             />
             <ul>
                 {posts.map(post => (
                 <li key = {post.id}>{post.title || post.name}</li>))}
                 {showGoToTop && (
                     <button
                     style={{position: 'fixed', right: 20, bottom: 20}}

                     >Go To Top</button>
                 )}
             </ul>
         </div>
     );
  ```

useEffect with DOM events
```JavaScript
 const [width,setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },[])
    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
```

useEffect with timer functions

  ```JavaScript
    setInterval(() => {
          setCountdown(coutndown - 1)
      }, 1000)
     useEffect(() => {
         const timer = setInterval(() => {
             setCountdown(prevState => prevState - 1)
         }, 1000)
         
         return () => clearInterval(timer)
     }, [])

     return (
         <div>
             <h1>{coutndown}</h1>    
         </div>
     )
  ```

useEffect with preview avatar

   ```JavaScript
      const [avatar, setAvatar] = useState()
    useEffect(() => {
        //Clear up
        return () => {
          avatar &&  URL.revokeObjectURL(avatar.preview)   
        }
    },[avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)

    }
    return (
        <div>
            <input
             type = "file"
             onChange= {handlePreviewAvatar}

            />
            {avatar && (
            <img src = {avatar.preview} alt = "" width = "80%"/>
            )}
        </div>
    )
   ```


useEffect with fake Chat App

useLayoutEffect 

useRef

