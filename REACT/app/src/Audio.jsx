import React from "react";

export default function Audio() {
  const bird1 = 'O Saki Saki.mp3'

//   new Audio(
//     "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
//   );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );


  function handleclick2(){
    if(bird2.paused){
      bird2.play();
    }
    else{
      bird2.pause();
    }

}
  return (
    <div>
        {/* <audio controls>
            <source src={bird1} type="" />
        </audio>
      <button onPlay={handleclick1}>song 1</button> */}
      <button playing={false} onClick={handleclick2}>song 2</button>
    </div>
  );
}
