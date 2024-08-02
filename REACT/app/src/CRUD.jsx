
// import { useState } from "react";
// const initArr = [
// ];
// let nextid = 0;
// const initItems = JSON.parse(localStorage.getItem("ItemList")) || []
// function CRUD() {
//   const [item, setItem] = useState(initItems)
//   const [fname, setFname] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");
//   const [number, setNumber] = useState("");
//   const [pass,setPass] = useState("")
//   const [age,setAge] = useState("")
//   const [address,setAddress] = useState("")
//   const [numberItem, setNumberItem] = useState(0);
//   const [isEdit, setIsEdit] = useState(null);
//   function handleAdd(e) {
//     if (fname === "") {
//       alert("please enter the first name");
//       return false;
//     } else if (lname === "") {
//       alert("please enter the last name");
//       return false;
//     } else if (email === "") {
//       alert("Please enter the email");
//       return false;
//     } else if (number === "" ) {
//       alert("please enter the number");
//       return false
//     }
//     else if(number.length<10||number.length>10){
//       alert("please enter the valid length of number")
//       return false
//     }
//     else if(pass === ""){
//       alert("please enter the password");
//       return false
//     }
//     e.preventDefault();
//     if (isEdit !== null) {
//       // If in edit mode, update the existing item
//       const updatedItems = item.map((i) => {
//         if (i.id === isEdit) {
//           return { id: i.id, fname, lname, email, number,pass };
//         }
//         return i;
//       });
//       setItem(updatedItems);
//       localStorage.setItem('ItemList', JSON.stringify(updatedItems));
//       setIsEdit(null);
//     }
//     else {
//       const newitem = [
//         ...item,
//         {
//           id: nextid++,
//           fname: fname,
//           lname: lname,
//           email: email,
//           number: number,
//           pass:pass
//         },
//       ];
//       setItem(newitem);
//       // localStorage.setItem(`Item_${nextid - 1}`, JSON.stringify(newitem));
//       setNumberItem(numberItem + 1);
//       console.log(item)
//       // JSON.parse(localStorage.getItem(`Item_${nextid-1}`))
//       localStorage.setItem(`ItemList`, JSON.stringify(newitem));
//     }
//     setFname("");
//     setLname("");
//     setEmail("");
//     setNumber("");
//     setPass("")
//   }
//   function handleOnChange(e) {
//     setFname(e.target.value);
//   }
//   function handleOnChange1(e) {
//     setLname(e.target.value);
//   }
//   function handleOnChange2(e) {
//     setEmail(e.target.value);
//   }
//   function handleOnChange3(e) {
//     setNumber(e.target.value);
//   }
//  function handleOnChange4(e){
//   setPass(e.target.value)
//  }
//   function handleDelete(id) {
//     const updatedItems = item.filter((a) => a.id !== id);
//     setItem(updatedItems);
//       localStorage.setItem('ItemList', JSON.stringify(updatedItems));
//     setNumberItem(numberItem - 1);
//   }
//   function handleEdit(editid) {
//     setIsEdit(editid);
//     const seleItem = item.find((t) => t.id === editid);
//     console.log(seleItem);
//     setFname(seleItem.fname);
//     setLname(seleItem.lname);
//     setEmail(seleItem.email);
//     setNumber(seleItem.number);
//     setPass(seleItem.pass)
//     // setItem(
//     //   item.map((t) => {
//     //     if (t.id === editid) {
//     //       return setItem([...item]);
//     //     } else {
//     //       return t;
//     //     }
//     //   })
//     // );
//     console.log(isEdit);
//   }
//   return (
//     <>
//       <div className="App">
//         <div>
//           <h1 style={{ textAlign: "center", color: "#11142F" }}>
//             User Details Form
//           </h1>
//           <form onSubmit={handleAdd}>
//             <table>
//               <tbody>
//                 <tr className="formrow">
//                   <td className="formrow"> FName:</td>
//                   <td className="formrow">
//                     {" "}
//                     <input
//                       type="text"
//                       onChange={handleOnChange}
//                       className="input"
//                       value={fname}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="formrow">
//                   <td className="formrow"> LName:</td>
//                   <td className="formrow">
//                     <input
//                       type="text"
//                       onChange={handleOnChange1}
//                       className="input"
//                       value={lname}
//                     />
//                   </td>
//                 </tr>
//                 <tr >
//                   <td className="formrow">Email:</td>
//                   <td className="formrow">
//                     {" "}
//                     <input
//                       type="text"
//                       onChange={handleOnChange2}
//                       className="input"
//                       value={email}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="formrow">
//                   <td className="formrow"> Number:</td>
//                   <td className="formrow">
//                     <input
//                       type="number"
//                       onChange={handleOnChange3}
//                       className="input"
//                       value={number}
//                     />
//                   </td>
//                 </tr>
//                 <tr className="formrow">
//                   <td className="formrow">Password:</td>
//                   <td className="formrow">
//                   {" "}
//                <input type="password" value={pass}  onChange={handleOnChange4} className="input"></input> </td>
//                <br></br>
//                 </tr>
//                 {/* <tr >
//                   <td className="formrow">Age:</td>
//                   <td className="formrow">
//                   {" "}
//                <input type="text" className="input"></input> </td>
//                 </tr>
//                 <tr>
//                   <td className="formrow" >Address</td>
//                   <td className="formrow" ><textarea className="textarea"></textarea></td>
//                 </tr> */}
//               </tbody>
//             </table>
//             <button type="submit" id="btn">
//               {isEdit !== null ? "Update" : "Submit"}
//             </button>
//           </form>
//         </div>
//         <div className="Row">
//           <tr className="tr1"><td className="td">First Name</td><td className="td">Last Name</td><td className="td">Email</td><td className="td">Number</td><td className="td">Password</td><td className="td" colSpan={2}>Action</td></tr>
//           {item.map((e) => {
//             return (
//               <tr className="tr1" key={e.id}>
//                 <td className="td">{e.fname}</td>
//                 <td className="td">{e.lname}</td>
//                 <td className="td">{e.email}</td>
//                 <td className="td">{e.number}</td>
//                 <td className="td">{e.pass}</td>
//                 <td className="td">
//                   <button
//                     id="btn1"
//                     onClick={() => {
//                       handleEdit(e.id);
//                     }}
//                   >
//                  Edit
//                  {/* <FontAwesomeIcon icon={faEdit}/> */}
//                   </button>
//                 </td>
//                 <td className="td">
//                   <button
//                     id="btn1"
//                     onClick={() => {
//                       handleDelete(e.id);
//                     }}
//                   >
//                     Delete 
//                     {/* <FontAwesomeIcon icon={faTrashAlt}/> */}
//                   </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </div>
//         <p>Numbers of records: {item.length}</p>
//       </div>
//     </>
//   );
// }
// export default CRUD;