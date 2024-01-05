
// import{useRef,useState,useEffect,useCallback, useMemo,memo,useReducer,createContext} from 'react';
import { useRef} from 'react'
// import { useImperativeHandle} from 'react';
import Video from './Video'


function App () {
  const videoRef = useRef()

  const handlePlay = () => {
      videoRef.current.play()

  }
  const handlePause = () => {
    videoRef.current.pause()
  }
    return (
      <div>
       <Video ref = {videoRef}/>
       <button onClick={handlePlay}>Play</button>
       <button onClick={handlePause}>Pause</button>
      </div>
      
    )
}
export default App;


// import Content from './Content'
// import './App.css'

// import TodoApp from './Todo'
// export const ThemeContext = createContext()
// import {useStore, actions} from './store'
// function App () {

//   const [state, dispatch] =useStore()
//   const {todos, todoInput} = state
//   const handleAdd = () => {
//     dispatch(actions.addTodo(todoInput))
//   }
//   return (
//         <div>
//           <input 
//               value = {todoInput}
//               placeholder='Enter Todo...'
//               onChange={e => {
//                 dispatch(actions.setTodoInput(e.target.value))
//               }}
//           />
//           <button style={{padding: '10px 10px'}} onClick = {handleAdd}>Add</button>

//           {todos.map((todo, index)=> (
//             <li key={index}>{todo}</li>
//           ))}


//         </div>

      
//   )
  // const[ theme, setTheme] = useState('dark')
  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark')
  // }
  // return (
  //   <ThemeContext.Provider value={theme}>
  //  < div style={{padding : 20}}>
  //   <button onClick={toggleTheme}>Toggle theme</button>
  //    <Content/>
  //  </div>
  //  </ThemeContext.Provider>
  // )

//   // return <TodoApp />;
// }
// export default App;

// const courses = [
//   {
//     id : 1,
//     name : 'HTML, CSS, JS'
//   },
//   {
//     id : 2, 
//     name : 'ReactJS'
  
//   },
//   {
//     id : 3,
//     name : 'NodeJS'
//   }

// ]
// const gifts = [
//     'BMW',
//     'Mercedes',
//     'Audi',
//     'Porsche'
// ]

//useState
// 1. Init state : 0
// 2 Actions : Up(state + 1), Down(state - 1)

//useReducer
// 1. Init state : 0
// 2. Actions : Up(state + 1), Down(state - 1)
// 3. Reducer 
// 4. Dispatch

//init 
// const initState = 0
// // actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'
// //reducer
// const reducer = (state, action) => {
//     switch(action) {
//       case UP_ACTION: 
//         return state + 1
//       case DOWN_ACTION:
//         return state - 1
//       default:
//         throw new Error('Invalid action')
//     }
// }


// 1.Init state
// const initState = {
//   job: '',
//   jobs: []
// }
// // 2. Actions
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'

// const setJob = payload =>  {
//   return {
//     type : SET_JOB,
//     payload
//   }
// }
// const addJob = payload => {
//   return {
//     type : ADD_JOB,
//     payload
//   }
// }
// const deleteJob = payload => {
//   return {
//     type : DELETE_JOB,
//     payload
//   }
// }
// // 3 . Reducer
// const reducer = (state, action) => {
//     let newState

//       switch (action.type) {
//           case SET_JOB:
//               newState = {
//                 ...state,
//                 job: action.payload
//               }
//               break;
//           case ADD_JOB:
//               newState = {
//                 ...state,
//                 // job: '',
//                 jobs: [...state.jobs, action.payload]
//               }
//               break;
//           case DELETE_JOB:
//             const newJobs = [...state.jobs]
//             newJobs.splice(action.payload,1)
//               newState = {
//                 ...state,
//                 jobs: newJobs
//               }
//               break;
//           default:
//             throw new Error('Invalid action')
        
//       }


//     return newState
// }
//function   App() {
    // const [state,dispatch] = useReducer(reducer,initState)
    // const {job,jobs} = state

    // const inputRef = useRef()
    // const handleSubmit = () => {
    //   dispatch(addJob(job))
    //   dispatch(setJob(''))
    //   inputRef.current.focus()
    // }
    // return (
    //     <div style= {{padding: ' 0 20px'}}>
    //         <h3>Todo</h3>
    //         <input
    //         ref={inputRef}
    //         value = {job}
    //         placeholder="Enter todo..."
    //         onChange = { e => {
    //           dispatch(setJob(e.target.value))
    //         }}
    //         />
    //         <button onClick = {handleSubmit} >Add</button>
    //         <ul>
    //           {jobs.map((job, index) => (
    //             <li key={index}>{job}
    //              <button onClick={() => dispatch(deleteJob(index))}>
    //              &times;
    //              </button>
                 
    //              </li>
    //           ))}
    //         </ul>

    //     </div>  
    // )



//////////////////////////////////////////////////////
// const [count, dispatch] = useReducer(reducer, initState)
// return (
//     <div style={{padding: ' 20px'}}>
//       <h1>{count}</h1>
//        <button 
//        onClick={() => dispatch(UP_ACTION)}
//        >Up
//        </button>
//        <button onClick={() => dispatch(DOWN_ACTION)}
//        >Down
//        </button>
//     </div>
// )

//////////////////////////////////////////////////////////////////////
// const [name,setName] = useState('');
// const [price,setPrice] = useState('');
// const [products,setProducts] = useState([])

// const nameRef = useRef();
// const handleSubmit = () => {
//   setProducts ( [...products, {
//     name,
//     price : +price
//   }])
//   setName ( '')
//   setPrice ('')
//   nameRef.current.focus()
// }
// const total = useMemo(() => {
//   const result = products.reduce ((result, prod) =>{

//     return result + prod.price
//   },0)
//   return result
// },[products])


//  return (
//    <div style={{padding: '10px 32px'}}>
//     <input 
//     ref={nameRef}
//     value= {name}
//     placeholder="Enter name ..."
//     onChange={e => setName(e.target.value)}
//     />
//     <br />
//     <input
//     value={price}
//     placeholder='Enter price...'
//     onChange={e => setPrice(e.target.value)}
//     />
//     <br />
//     <button onClick={handleSubmit}>Submit</button>
//     <br />
//     Total price :{total}
//     <ul>
//       {products.map((product,index) => (
//         <li key={index}>{product.name} - {product.price}</li>
//       ))}
//     </ul>

//    </div>
//  )



  /////////////////////////////////////////////
  // const [count, setCount] = useState(0);
  // const handleIncrease = () => {
  //   setCount(prevCount => prevCount + 1)
  // }
  // return (
  //   <div>
  //     <Content onIncrease = {handleIncrease} />
  //     <h1 style={{padding: 20}}>{count}</h1>
     
      
  //   </div>
  // )



  ////////////////////////////////////////////////////////////////////////
    // const [count, setCount] = useState(60);
    // const timerId = useRef();
    // const prevCount = useRef();
    // useEffect(() => {
    //   prevCount.current = count;
    // },[count])

    // const handleStart = () => {
    //  timerId.current= setInterval(() => {
    //     setCount((prevCount) => prevCount - 1)
    //   },1000)
    // }
    // const handleStop = () => {
    //   clearInterval(timerId.current);
    // }
    // return (
    //     <div>
    //         <h1 style={{padding: 20}}>{count}</h1>
    //         <button  onClick = {handleStart}>Start</button>
    //         <button onClick = {handleStop}>Stop</button>
    //     </div>
    // )
  ////////////////////////////////////////////////////////////////////////
//     const [gift, setGift] = useState()
//     const randomGift = () => {
//         const index = Math.floor(Math.random() * gifts.length)
//         setGift(gifts[index]);
//     }
//   // const [counter, setCounter] = useState(1);
//   // const handleIncrease = () => {
//   //   // setCounter(counter + 1);
//   //   setCounter(prevSate => prevSate + 1);
//   // }
//   // return (
//   //   <div className="App" style={{textAlign:"center"}}>
//   //     <h1 > {counter}</h1>
//   //     <button onClick = {handleIncrease}>+</button>
//   //   </div>
//   // );

// ///////////////////////////////
//   // const[info, setInfo] = useState({
//   //   name : 'quoc',
//   //   age : 20,
//   //   address : 'hanoi'
//   // })
//   // const handleUpdate = () => {
//   //   setInfo({
//   //     ...info,
//   //     bio:'Yeu mu'
//   //   })
//   // }
//   // return (
//   //   <div className="App" style={{textAlign:"center"}}>
//   //     <h1 > {JSON.stringify(info)}</h1> 
//   //     <button onClick = {handleUpdate}>Update</button>
//   //   </div>
//   // )

//   //////////////////////////
//   return (
//     <div className="App" style={{textAlign:"center"}}>
//       <h1 >{gift || 'Không có'} </h1>
//       <button onClick = {randomGift}>Lấy thưởng </button>
//     </div>
// //   )

//////////////////////////////////////
//   const [ name,setName] = useState('');
//   const [email, setEmail] = useState('');
//     const handleSubmit = () => {
//       console.log({name, email});
//     }
//   console.log(name);
//   return (
//     <div className="App" style={{textAlign:"center"}}>
//       <input
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//       />
//       <input
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>
//         Register
//       </button>

//       </div>
//   )
///////////////////////////////////////////////////
  

// const [checked, setChecked] = useState([]) 

// const handleCheck = (id) => {
//   setChecked(prev => {
//     if (prev.includes(id)) {
//       return prev.filter(item => item !== id)
//     }
//     return [...prev, id]
//   })
// }
// const handleSubmit = () => {
//   console.log({ids: checked})
// }
// return (
//   <div className="App" style={{textAlign:"center"}}>
//     {courses.map(course => (
//       <div key = {course.id}>
//         <input
//         //  type = "radio" 
//         type = "checkbox"
//         checked={checked.includes(course.id)}
//         onChange = {() => handleCheck(course.id)}
//         />
//         {course.name}
//         </div>
//     ))}
//     <button onClick={handleSubmit}>Register</button>
//   </div>
// )
/////////////////////////////////////////////////
// const storageJobs = localStorage.getItem('jobs')
//   const [job, setJob] = useState('')
//   const [jobs,setJobs] = useState([])
//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs= [...prev, job]
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return newJobs
//     })
//     setJob('')
//   }
//   return (

//     <div className="App" style={{padding : 32}}>
//       <input
//        value={job} 
//        onChange={e => setJob(e.target.value)}
//        />
//       <button onClick = {handleSubmit}>ADD</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>

//       </div>
//   )
//////////////////////////////////////////////////

// const [show, setShow] = useState(false);

//   return (
//     <div className="App" style={{ padding: 20 }}>
//       {!show && (
//         <button onClick={() => setShow(!show)}>Khóa học React tại F8</button>
//       )}
//       {show && <button onClick={() => setShow(!show)}>Trang chủ</button>}
//       {show && <Content />}
//     </div>
//   );
//}

//export default App
