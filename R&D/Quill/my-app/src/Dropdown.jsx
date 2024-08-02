import { useRef, useState } from "react";
import QuillToolbar, { formats, modules}  from "./EditorToolbar";
import ReactQuill from "react-quill";
const DropDown = () => {
  const quillRef = useRef(null);
  const [value, setValue] = useState("");
  if (quillRef.current) {
    const quill = quillRef.current.getEditor();
    quill.on("text-change", () => {
      setValue(quill.root.innerHTML);
    });
    const toolbar = quill.getModule("toolbar");
    toolbar.addHandler("font", (value) => {
      quill.format("font", value);
      const range = quill.getSelection();
      quill.insertText(range.index, value);
    });
  }
  return (
    <div className="text-editor">
      <QuillToolbar />
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        onChange={(content, delta, source, editor) =>
          setValue(editor.getHTML())
        }
      />
    </div>
  );
};
export default DropDown;








// import React , { useEffect } from 'react';
// import ReactQuill , {Quill} from 'react-quill'
// import EditorToolbar from './EditorToolbar';
// import 'react-quill/dist/quill.snow.css'

// const Dropdown = ()=>{

//     useEffect(()=>{
//         const toolbar = document.querySelector('.ql-toolbar');
//         if(toolbar){
//             const button = document.createElement('span');
//             button.classList.add('.ql-dropdown');
//             toolbar.appendChild(button);
//         }
//     },[])

//       const modules ={
//       toolbar: {
//           container: [
//             [{ header: [1, 2, 3, 4, 5, false] }],
//             [{ "dropdown" : 'custome-dropdown'}]          
//         ],
//         handlers: {
//             'dropdown' : function(){}
//         },
//         EditorToolbar :  [
//             { value : 'option1' , label : 'Option1'},
//             { value : 'option2' , label : 'Option2'},
//             { value : 'option3' , label : 'Option3'},
//         ]
//     },

    
//     };
//           return(
//             <ReactQuill 
//               theme = 'snow'
//               modules = {modules}
//             />
//           )
// }
// export default Dropdown;


// import React, { useMemo, useRef, useState } from "react";
// import ReactQuill from "react-quill";
// import EditorToolbar, { modules, formats } from "./EditorToolbar";
// import "react-quill/dist/quill.snow.css";

// import QuillEditor from "react-quill";
// const Dropdown = () => {
//     const [value, setValue] = useState("");
//     const quill = useRef('');

//     const x = document.getElementsByTagName('p');
//     console.log(x.innerText)
//     if(value.length>0){

//         console.log('value------' , value)
//     }

//     function dropdownFunction(){
// //  let x = document.getElementsByClassName("ql-picker-options")
// // const x = quill.innerHTML
// //  console.log(x)
// // if(valvalue)


// }

//   const formats = [
//     "header",
//     "Dropdown",
//     "value",
//     "label"
//   ];
//   const modules =useMemo(()=>({
//       toolbar: {
//           container: [
//             [{ Dropdown: [
//                       Dropdown.value = 'prerna'  ,  Dropdown.value = 'princi' 
//              ]}]
//         ],
//         handlers: {
//             dropdown : dropdownFunction()
//         }
//     },    
//     }));



//   return (
//     <div id="container">
//       {/* <EditorToolbar /> */}
//       <QuillEditor
//           ref={(el) => (quill.current = el)}

//           theme="snow"
//           value={value}
//           formats={formats}
//           modules={modules}
//           onChange={(value) => setValue(value)}

//         placeholder={"Write something awesome..."}

//       />
//     </div>
//   );
// };

// export default Dropdown;