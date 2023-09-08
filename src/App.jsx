
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
function handelClick(){
  alert('btn clicked')
}
const handelClick2 =()=>{
  alert('button 2 clicked')
}
  const addTen = (num)=>{
    alert (num+10)
  }
  return (
    <>

  <Friends></Friends>
    <Users></Users>
     <Team></Team>
     <Counter></Counter>
      <h1>React core concept</h1>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click2</button>
      <button onClick={()=>addTen(10)}>10</button>
     
    </>
  )
}

export default App
