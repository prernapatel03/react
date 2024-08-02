
import { Navbar } from 'Navbar/Navbar';

function App() {


  let dataList = "";

  // let dataList = list.map((e)=>e.name)

  // list.forEach((e , i)=>
  //   <ul>
  //     {
  //     <li key={i}>{

  //       // dataList = e.name

  //     }</li>
  //     }
  //     </ul>

  // )

  // for(let i =0;i<list.length;i++){

  //   dataList += list[i].name
  // }

  // let [text, setText] = useState({
  //   fname: "",
  //   lname: "",
  // });

  // function handleClick(event) {
  //   setText(
  //     { ...text,
  //      [ event.target.name] :  event.target.value
  //     }
  //   );
  // }

  // let [ list , setList ] = useState([])

  // function handleAdd(event){
  //  event.preventDefault();

  //  setList([...list , text])
  //  console.log(list)
  // }

  // let inputFocus = useRef('');
  // function handleClick(){
  //      console.log(inputFocus)
  // }

  const videoURL = "outu.be/XLqmL9cPN1E?si=Usyp17w3u00LqgKY";
  // const videoURL = 'https://youtu.be/XLqmL9cPN1E?si=Usyp17w3u00LqgKY'

  return (
    <>

    <Navbar />
   

    </>
  );
}

export default App;
