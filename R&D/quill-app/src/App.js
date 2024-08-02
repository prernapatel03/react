// Importing helper modules
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// Importing core components
import QuillEditor from "react-quill";

// Importing styles
import "quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import Quill from "quill";

const icons = Quill.import("ui/icons")
icons["undo"]= `<svg viewbox="0 0 18 18">
  <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
  <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
 </svg>;`

const App = () => {


  const [value, setValue] = useState("");
  const quill = useRef();

 
  function handler() {
    console.log(value);
  }
  function handleFocus(){
    if(quill.current)
      quill.current.focus()
  }
  function undoChange(){
    let myEditor = quill.current.getEditor();
    return myEditor.history.undo();

  }
  function redoChange(){
    let myEditor = quill.current.getEditor();
    return myEditor.history.redo();
  }
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const imageUrl = reader.result;
        const quillEditor = quill.current.getEditor();

        const range = quillEditor.getSelection(true);
        quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
      };

      reader.readAsDataURL(file);
    };
  }, []);
  


  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [2, 3, 4, false] }],
          ["bold", "italic", "underline", "blockquote" ],
          [{ color: [] }],
        ['undo' , "redo"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
          undo : undoChange,
          redo : redoChange
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>Editor Content</label>
      <QuillEditor
        ref={(el) => (quill.current = el)}
        className={styles.editor}
        theme="snow"
        value={value}
        formats={formats}
        modules={modules}
        onChange={(value) => setValue(value)}
      />
      <button onClick={handler} className={styles.btn}>
        Submit
      </button>

      <button onClick={handleFocus}>focus</button>


    </div>
  );
};

export default App;