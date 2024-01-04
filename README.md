### ReactJS_Course

## **ReactDOM**

`React.createElement()`
```JavaScript
const element = React.createElement('div', { className: 'container' }, 'Hello, World!');


```
```JavaScript
    React.createElement(type,{props},children);
```

- `type`: loại phần tử HTML (h1,p, nút, v.v.).
- `props`: thuộc tính của đối tượng ({style:{size:10px}} hoặc Eventhandlers, classNames, v.v.).
- `children`: bất cứ thứ gì cần được bao bọc bởi thành phần đó.


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
- `useState`: Hook này cho phép bạn sử dụng trạng thái trong thành phần hàm
- `useEffect`: Hook này giúp bạn thực hiện các tác vụ sau khi thành phần đã render hoặc sau mỗi lần render
- `useContext`: Cho phép bạn sử dụng Context trong các thành phần hàm.
- `useReducer`: Tương tự như useState, nhưng sử dụng một hàm reducer để quản lý trạng thái phức tạp hơn
- `useMemo` và `useCallback`: Được sử dụng để tối ưu hóa hiệu suất. useMemo giúp bạn lưu kết quả của một hàm được tính toán và chỉ tính toán lại khi các giá trị dependencies thay đổi. useCallback giúp tránh việc tạo lại các hàm callback mỗi khi render.

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



**Two-way binding trong React**
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


**Todolist with useState**
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
 

**Mounted & Unmounted**
```JavaScript

    const[show, setShow] = useState(false)
    return (
      <div className="App" style={{textAlign:"center"}}>
        <button onClick = {() => setShow(!show)}>Show</button>
        {show && <Content/>}
      </div>
    )   
```


#### useEffect



**useEffect with dependencies**

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

**useEffect with DOM events**
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

**useEffect with timer functions**

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

**useEffect with preview avatar**

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


**useEffect with fake Chat App**
```JavaScript
const lessons = [
    {
      id: 1,
      name: "ReactJS là gì? Tại sao nên học ReactJS?",
    },
    {
      id: 2,
      name: "SPA/MPA là gì?",
    },
    {
      id: 3,
      name: "Ưu điểm của SPA",
    },
  ];

 const [room, setRoom] = useState(1);

    useEffect(() => {
      const handleEvent = (e) => {
        console.log(e.detail);
      };
  
      window.addEventListener(`lesson-${room}`, handleEvent);
  
      return () => {
        window.removeEventListener(`lesson-${room}`, handleEvent);
      };
    }, [room]);
  
    return (
      <div className="main">
        <ul>
          {lessons.map((lesson) => (
            <div key={lesson.id}>
              <li
                style={room === lesson.id ? { color: "red" } : {}}
                onClick={() => setRoom(lesson.id)}
              >
                {lesson.id}. {lesson.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
```

`useEffect`
- 1. Cập nhật lại state
- 2. Cập nhật DOM (mutated)
- 3. Render lại UI
- 4. Gọi cleanup nếu deps thay đổi
- 5. Gọi useEffect callback

`useLayoutEffect` 
- 1. Cập nhật lại state
- 2. Cập nhật DOM (mutated)
- 3. Gọi cleanup nếu deps thay đổi (sync)
- 4. Gọi useLayoutEffect callback (sync)
- 5. Render lại UI
```JavaScript
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        if( count > 3 )
        setCount(0)
    
    }, [count])
    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
```

**useRef**

`useRef` trong React được sử dụng để tạo một tham chiếu (reference) đến một phần tử DOM hoặc một giá trị có thể thay đổi mà không gây ra việc render lại lại component khi giá trị thay đổi.
```JavaScript
  const [count, setCount] = useState(60);
    const timerId = useRef();
    const prevCount = useRef();
    useEffect(() => {
      prevCount.current = count;
    },[count])

    const handleStart = () => {
     timerId.current= setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      },1000)
    }
    const handleStop = () => {
      clearInterval(timerId.current);
    }
    return (
        <div>
            <h1 style={{padding: 20}}>{count}</h1>
            <button  onClick = {handleStart}>Start</button>
            <button onClick = {handleStop}>Stop</button>
        </div>
    )
```
React.memo HOC
```JavaScript
import {memo} from "react";
function Content() {
    return (
        <div>
            <h1>Content</h1>
        </div>
    )
    }
export default memo(Content)
//Khi sử dụng memo
return (
    <div>
      <Content />
      <h1 style={{padding: 20}}>{count}</h1>
      <button onClick={increase}>Increase</button>
      
    </div>
)

```
`useCallback` dùng để giúp tránh tạo ra những hám mới một cách không cần thiết trong function component

`useMemo` giúp tránh thực hiện lại một logic nào đó không cần thiết
```JavaScript
const [name,setName] = useState('');
const [price,setPrice] = useState('');
const [products,setProducts] = useState([])

const nameRef = useRef();
const handleSubmit = () => {
  setProducts ( [...products, {
    name,
    price : +price
  }])
  setName ( '')
  setPrice ('')
  nameRef.current.focus()
}
const total = useMemo(() => {
  const result = products.reduce ((result, prod) =>{

    return result + prod.price
  },0)
  return result
},[products])


 return (
   <div style={{padding: '10px 32px'}}>
    <input 
    ref={nameRef}
    value= {name}
    placeholder="Enter name ..."
    onChange={e => setName(e.target.value)}
    />
    <br />
    <input
    value={price}
    placeholder='Enter price...'
    onChange={e => setPrice(e.target.value)}
    />
    <br />
    <button onClick={handleSubmit}>Submit</button>
    <br />
    Total price :{total}
    <ul>
      {products.map((product,index) => (
        <li key={index}>{product.name} - {product.price}</li>
      ))}
    </ul>

   </div>
 )


```
`useReducer` Cung cấp cho người dùng có thêm một sự lựa chọn để sử dụng state cho function component


`useState`
- 1. Init state : 0
- 2. Actions : Up(state + 1), Down(state - 1)

`useReducer`
- 1. Init state : 0
- 2. Actions : Up(state + 1), Down(state - 1)
- 3. Reducer 
- 4. Dispatch

```JavaScript
//init 
const initState = 0
// actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
//reducer
const reducer = (state, action) => {
    switch(action) {
      case UP_ACTION: 
        return state + 1
      case DOWN_ACTION:
        return state - 1
      default:
        throw new Error('Invalid action')
    }
}


const [count, dispatch] = useReducer(reducer, initState)
return (
    <div style={{padding: ' 20px'}}>
      <h1>{count}</h1>
       <button 
       onClick={() => dispatch(UP_ACTION)}
       >Up
       </button>
       <button onClick={() => dispatch(DOWN_ACTION)}
       >Down
       </button>
    </div>
)
```
Todo App with useReducer hook
```JavaScript
const initState = {
  job: '',
  jobs: []
}
// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload =>  {
  return {
    type : SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type : ADD_JOB,
    payload
  }
}
const deleteJob = payload => {
  return {
    type : DELETE_JOB,
    payload
  }
}
// 3 . Reducer
const reducer = (state, action) => {
    let newState

      switch (action.type) {
          case SET_JOB:
              newState = {
                ...state,
                job: action.payload
              }
              break;
          case ADD_JOB:
              newState = {
                ...state,
                // job: '',
                jobs: [...state.jobs, action.payload]
              }
              break;
          case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload,1)
              newState = {
                ...state,
                jobs: newJobs
              }
              break;
          default:
            throw new Error('Invalid action')
        
      }


    return newState
}
function   App() {
    const [state,dispatch] = useReducer(reducer,initState)
    const {job,jobs} = state

    const inputRef = useRef()
    const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
      inputRef.current.focus()
    }
    return (
        <div style= {{padding: ' 0 20px'}}>
            <h3>Todo</h3>
            <input
            ref={inputRef}
            value = {job}
            placeholder="Enter todo..."
            onChange = { e => {
              dispatch(setJob(e.target.value))
            }}
            />
            <button onClick = {handleSubmit} >Add</button>
            <ul>
              {jobs.map((job, index) => (
                <li key={index}>{job}
                 <button onClick={() => dispatch(deleteJob(index))}>
                 &times;
                 </button>
                 
                 </li>
              ))}
            </ul>

        </div>  
    )
}
```
`useContext` đơn giản hoá việc truyền dữ liệu từ component cha xuống component con mà không cần sử dụng tới props

CompA => CompB => CompC

- 1.Create context
- 2.Provider
- 3.Consumer
