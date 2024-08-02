import { useCallback, useMemo, useRef, useState } from "react";
import "quill/dist/quill.snow.css";
import styles from "./styles.module.css";
import QuillEditor from "react-quill";
import {Quill} from "react-quill";
import DropDownList, { formats } from './EditorToolbar'
const icons = Quill.import("ui/icons");
icons["undo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
    <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
  </svg>`;
icons["redo"] = `<svg viewbox="0 0 18 18">
    <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
    <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
  </svg>`;
const App = () => {
  const [value, setValue] = useState("");
  const quill = useRef('');
  if (quill.current) {
    const quillVal = quill.current.getEditor();
    quillVal.on("text-change", () => {
      setValue(quillVal.root.innerHTML);
    });



    const toolbarTo = quillVal.getModule('toolbar');
    console.log(toolbarTo)
    // toolbarTo.addHandler("font", (value) => {
    //   quillVal.format("font", value);
    //   // console.log(value)
    //   const range = quillVal.getSelection();
    //   quillVal.insertText(range.index, value);
    // });
  }
   
  const handleFocus = () => {
    if (quill.current) {
      quill.current.getEditor().focus();
    }
  };
  const handleUndo = () => {
    if (quill.current) {
      quill.current.getEditor().history.undo();
    }
  };
  const handleRedo = () => {
    if (quill.current) {
      quill.current.getEditor().history.redo();
    }
    };
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
  const module = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, false] }],
          ["bold", "italic", "underline", "blockquote"],
          [{ color: [] }],
          ["undo", "redo"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
          ["drop"]
        ],
        handlers: {
          image: imageHandler,
          undo: handleUndo,
          redo: handleRedo,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  return (
    <div className={styles.wrapper}>
   
          
           <label>Editor</label>
           <DropDownList />

        <QuillEditor
          ref={quill}
          className={styles.editor}
          theme="snow"
          value={value}
          formats={formats}
          modules={module}
          onChange={(content, delta, source , editor) => setValue(editor.getHTML())}
        />
        <div>
          <button onClick={handleFocus} className={styles.btn} type="button">
            Focus
          </button>
        </div> 
    </div>
  );
};
export default App;