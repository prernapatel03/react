
export const modules = {
  toolbar: {
    container: "#toolbar",
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
  clipboard: {
    matchVisual: true,
  },
};
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
    "clean"
];
const DropDownList = () => {
  const fontOptions = [
    { value: "", label: "Select Font" },
    { value: "value1", label: "value1" },
    { value: "value2", label: "value2" },
    { value: "value3", label: "value3" },
  ];

  return (
    <div id="toolbar">
      
      <span className="ql-formats">
        <select className="ql-font" defaultValue=''>
          {fontOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};
export default DropDownList;
