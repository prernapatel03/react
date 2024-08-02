import React from 'react'

export default function Filter() {

    let list = [
        {
            name : 'prerna',
            age : 21,
            intern : 'frontend'
        },
        {
            name : 'princi',
            age : 21,
            intern : 'frontend'
        }
    ]
    
  return (
    <div>

        <input type="search" name="" id="" />
             <table>

              <tr>
                <th>name</th>
                <th>age</th>
                <th>intern</th>
              </tr>
 {
     list.map((e)=>{
        return(
            
               <tr>
                        <th>{e.name}</th>
                        <th>{e.age}</th>
                        <th>{e.intern}</th>

               </tr>
            
        )
    })
}
</table>
    </div>
  )
}
