import React from 'react'

export default function List() {

    let list = [
       
        {
            name : 'prerna',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'princi',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'dhanu',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'krupali',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'rutvi',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'riya',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'vini',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'heli',
            age  : 21,
            intern : 'frontend'
        },
        {
            name : 'yashvi',
            age  : 21,
            intern : 'frontend'
        },
    ] 

    // let data = list.map((e)=>
    //  {
    //     return <table>

    //          <tr>
    //                <td>jnefchyw</td>
    //          </tr>
    //     </table>
    //  }
    // )

    let content = [];
    function searchInput(){
        let searchId = document.getElementById('searchId').value.toLowerCase();

        let tableTr = document.querySelectorAll('.tableTr')

        list.map((e)=>{

            let checkName = e.name.toLowerCase();
            tableTr.forEach((el)=>{


                let tableTrData = el.querySelector('td:first-child').textContent.toLowerCase();


                if(checkName.includes(searchId)){
          
                    console.log(checkName)
                }
                else{
                    // tableTrData = checkName;
                    // tableTrData.style.display = 'none'
                    // console.log(el)

                }
            })
        })
        // console.log(tableTr)

        // tableTr.forEach(
        //     e=>{

        //         let tableTrData = e.querySelector('td:first-child').textContent.toLowerCase();
             
        //         if(tableTrData.includes(searchId)){
        //                e.style.display = ''
        //         }
        //         else{
        //             e.style.display = 'none'

        //         }
        //     }
        // )
    }

    return(
        <>

        <input type="text" id='searchId' onKeyUp={searchInput}/>
         <table>
            <thead>

            <tr>
                <th>name</th>
                <th>age</th>
                <th>intern</th>
            </tr>
                </thead>
            <tbody> 

             {
                 list.map((e , i)=>{
                     return(
                         <tr key={i} className='tableTr'>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.intern}</td>

                     </tr>

)
})
}
</tbody>
         </table>

          
        </>
    )

}
