import React from 'react'
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InformationSub from './InformationSub';



export default function DropDown() {
     const [flag, setFlag] = useState(true);
     const [items, setItms] = useState([{ headtitle: 'title1', subtitle: ['sub1', 'sub2', 'sub3'] },
     { headtitle: 'title2', subtitle: ['sub4', 'sub5', 'sub36'] },
     { headtitle: 'title3', subtitle: ['sub7', 'sub8', 'sub9'] },
     { headtitle: 'title4', subtitle: ['sub10', 'sub11', 'sub12'] },
     { headtitle: 'title5', subtitle: ['sub13', 'sub14', 'sub15'] },
     { headtitle: 'title6', subtitle: ['sub16', 'sub17', 'sub18'] }
     ])
   const[subT,setSubT]=useState([]);

     return (
          <>
               <div className="container mt-2 d-flex justify-content-evenly">
                    {
                         items.map((item, index) => {
                              return (
                                   <Dropdown>
                                        <Dropdown.Toggle key={index} className='p-3' variant="secondary">
                                             {item.headtitle}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                             {item.subtitle.map((sub) => (
                                                  <Dropdown.Item onClick={() => {
                                                       setSubT([...subT,sub]);
                                                       flag ? (
                                                            setItms([{ headtitle: 'newTitle1', subtitle: ['newsub1', 'newsub2', 'newsub3'] },
                                                            { headtitle: 'newTitle2', subtitle: ['newsub4', 'newsub5', 'newsub6'] },
                                                            { headtitle: 'newTitle3', subtitle: ['newsub7', 'newsub8', 'newsub9'] },
                                                            { headtitle: 'newTitle4', subtitle: ['newsub10', 'newsub11', 'newsub12'] },
                                                            { headtitle: 'newTitle5', subtitle: ['newsub13', 'newsub14', 'newsub15'] },
                                                            { headtitle: 'newTitle6', subtitle: ['newsub16', 'newsub17', 'newsub18'] },
                                                            ])
                                                       ) : (setItms([{ headtitle: 'title1', subtitle: ['sub1', 'sub2', 'sub3'] },
                                                       { headtitle: 'title2', subtitle: ['sub4', 'sub5', 'sub6'] },
                                                       { headtitle: 'title3', subtitle: ['sub7', 'sub8', 'sub9'] },
                                                       { headtitle: 'title4', subtitle: ['sub10', 'sub11', 'sub12'] },
                                                       { headtitle: 'title5', subtitle: ['sub13', 'sub14', 'sub15'] },
                                                       { headtitle: 'title6', subtitle: ['sub16', 'sub17', 'sub18'] }
                                                       ]));
                                                       setFlag(!flag);
                                                  }}>

                                                       {sub}</Dropdown.Item>

                                             ))


                                             }

                                        </Dropdown.Menu>
                                   </Dropdown>
                              )
                         })
                    }

               </div>

               <InformationSub SubInfo={subT} />

          </>

     )


}
