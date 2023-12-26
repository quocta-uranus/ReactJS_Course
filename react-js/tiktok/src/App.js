
import{useState} from 'react';



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
function   App() {
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
}

export default App;
