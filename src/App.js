import './App.css';
import { useState, useFetch } from 'react';
import Context from './Context';
import MyComponet from './MyComponet';

// function App() {
//   const stories = [
//     {
//       title: 'React',
//       url: 'https://reactjs.org/',
//       author: 'Mr.X',
//       num_comment: 3,
//       points: 4,
//       objectID: 0,
//     },
//     {
//       title: 'Redux',
//       url: 'https://redux.js.org/',
//       author: 'Mr.Y',
//       num_comment: 2,
//       points: 5,
//       objectID: 1,
//     }
//   ];

//   const [searchTerm, setSearchTerm] = useState('')

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value)
//   }

//   const List = ({list}) => {
//     list.map(item => <p> {item.title} </p>)
//   }

 


//   return (
//     <div>
//       <label htmlFor="search">Search :</label>
//       <input type="text" name="" id="" onChange={handleChange}  />

//       <p> Searching for {searchTerm}</p>

//       <hr />

//       <List list={stories} />

//     </div>
//   );
  
// }

// react custom hooks

// function App()  {
//   const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/')

//   return (
//     <div>
//       {data.map((item) => {
//         return <p  ></p>
//       })}
//     </div>
//   )
// }

// react context hooks

function App() {
  const valueBaru = 'Koding Akademi';
  return (
    <Context.Provider value={valueBaru}>
      <MyComponet />
    </Context.Provider>
  )

}

export default App;
