import React from 'react'

import { useState } from 'react';

export default function InformationSub({ SubInfo }) {
     const [state, setState] = useState();
     return (
          <>
               <div className='d-flex'>

                    {SubInfo.map((item, index) => {

                         return (
                              <>

                                   <button key={index} className='p-2 m-2 rounded border border-5 cur' onClick={() => { setState(index) }}>
                                        {item}
                                   </button>


                              </>
                         )

                    })}
               </div>

               <div>
                    {SubInfo.map((item, index) => {
                         return (
                              (state === index) ? (<h1 className="m-5 p-2">About{item}</h1>) : (<div></div>)
                         )
                    })}
               </div>


          </>
     )



}
