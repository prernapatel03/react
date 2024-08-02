import React, { useEffect, useState } from 'react'

export default function useConsole(count) {
    
    useEffect(()=>{
            console.log("hii")
    } , [count])

}
