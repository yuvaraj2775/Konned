import React, { useState } from 'react'
import { TfiSearch } from "react-icons/tfi";
import { FaBell } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { IoPeople } from "react-icons/io5";
import { CgCalendarDates } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaAudible } from "react-icons/fa";
import { PiCheckCircleFill } from "react-icons/pi";
import Calender from './Calender';












const Mainpg = () => {

    // const[dummy,setdummy]=useState(false)
    const [value, setvalue] = useState("classes")
    let handlechan=(tab)=>{
        setvalue(tab)
    }
    // const handelbuttonchangecolor = () => {
    //     setdummy(!dummy)
    // }



    const addingimg = [
        
        {
            imagees: "../img/st3.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st3.webp",
            heading: "Here it's a special offer only fwe days left",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st4.jpg",
            heading: "bootstap is tought taildwind is the best to switch",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },

    ]

    const afteradd = [
       



        {
            imagees: "../img/st2.webp",
            heading: "Tailwin offers a wide varirty of content ",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st3.webp",
            heading: "Join our free classes from online to join our institute",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st4.jpg",
            heading: "Fullstack developer courde very less price in our institute",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
      

    ]

    const arr3 =[
        {
            imagees: "../img/st4.jpg",
            heading: "webpage swap sql error we will fix",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st4.jpg",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "Hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },


    ]

    return (
        <div className='  text-gray-400  '>
            <div className='flex w-full align-middle items-center bg-white justify-evenly h-14'>
                <div className='flex'>
                    <div className='mt-2 mr-1'><FaAudible />
                    </div>
                    <div className='text-xl font-semibold'>Konned</div>
                </div>
                <div>
                    <select name="" id="" className='font-semibold'>
                        <option value="">Browse</option>

                    </select>
                </div>

                <div className='flex border-2 justify-between w-2/4 h-10 rounded bg-slate-200 border-bg-slate-200 '>
                    <input type="text" placeholder='What you want to learn?'  className=' border-none w-full  border-slate-200 pl-3 bg-slate-200' name="" id="" />
                    <div className='pt-2 pr-3'>
                        <TfiSearch />
                    </div>
                </div>
                <h3 className='font-semibold'>Pricing</h3>
                <h3 className='font-semibold'>My course</h3>
                <div className='mt-2'>
                    <FaBell />
                </div>
                <div className='mt-5 h-7 '>
                    <BiMessageRoundedDetail />
                </div>
                <div>
                    <img src={"../img/pexels-photo-1043471.webp"} className='h-10 w-10 rounded-full' alt="" />
                </div>


            </div>


            <div className='pl-8 pr-7'>
                <div className='h-20 border-b-2 border-b-gray-300 flex  items-center justify-between  '>
                    <div >
                        <span className='text-2xl text-slate-600'>My course</span>
                    </div>
                    <div className=''>
                        <span onClick={()=>handlechan("classes")}  className={`text-xl  cursor-pointer font-semibold   border-b-2 ${value === 'classes' ? 'border-blue-500 py-6 text-blue-500'  : ''}  `}>Classes</span>
                        <span onClick={()=>handlechan("calendar")}   className={`text-xl cursor-pointer font-semibold ml-7 border-b-2 ${value === 'calendar' ? 'border-blue-500 text-blue-500 py-6' : ''}`}  >Calender</span>
                    </div>
                    <div  className="bg-blue-600 w-32 h-10 rounded">
                        <div className='pt-2 pl-2 flex text-white'>
                            <div>Create class</div>
                            <div className='mt-1 ml-1'><FaPlus /></div>
                        </div>

                    </div>
                </div>

                {value ==="classes" ?
            
               

<div>     <div className='flex justify-between items-center h-20 '>
            
            <div className='flex w-96 font-semibold justify-between text-sm tracking-wide	 text-slate-500 '>
                <p className='border-2 font-semibold text-blue-500 border-blue-400 rounded-3xl h-7 w-10 pl-2 '>All</p>
                <p className='border-2 font-semibold  rounded-3xl h-7  '>Ongoing</p>
                <span className='bg-red-500 rounded-full w-6 pl-2 mt-1 text-white -ml-8 h-6'>2</span>
                <p className='border-2 font-semibold rounded-3xl h-7  '>Completed</p>
                <p className='border-2 font-semibold rounded-3xl h-7  '>Draft</p>
                <span className='bg-gray-500 rounded-full w-6 pl-2  text-white -ml-8 h-6'>2</span>

            </div>
            <div >
                <span className='font-semibold'>Sort: Last Active</span>
            </div>
        </div>
      
        

            <div className='grid grid-cols-4 gap-8 drop-shadow-lg ' >

                {/* <div><img src={"../img/st2.webp"} alt="" /></div>
        <div><img src={"../img/st3.webp"} alt="" /></div>
        <div><img src={"../img/st4.webp"} alt="" /></div> */}
                {
                    addingimg.map((e) => (
                        <div className=' bg-white '>
                            <div className='border-b-2 border-slate-200'>
                                <img src={e.imagees} alt='no' className='h-48' />
                                <div className='font-bold m-2 mt-3  tracking-wide	text-sm text-slate-500'>{e.heading}</div>
                                <div className='flex ml-2'>
                                    <img src={e.profileimg} alt='no' className='h-7 w-7 mb-2 rounded-full text-slate-400 '  />
                                    <div className='font-medium mb-3 ml-3 mt-1  text-slate-500 text-sm'>{e.headleaks}</div>
                                </div>
                            </div>
                            <div className='flex justify-around h-10 items-center -ml-3 text-slate-400'>
                                <div className='flex font-semibold'>
                                    <div ><IoPeople />  </div>
                                    <div className='font-semibold   ml-1 text-xs'>{e.people}</div>
                                </div>
                                <div className='flex font-semibold '>
                                    <div>
                                        <CgCalendarDates />

                                    </div>
                                    <div className='font-semibold  ml-1 text-xs'>{e.date}</div>
                                </div>
                                <div className='flex font-semibold'>
                                    <div><CiLocationOn />
                                    </div>
                                    <div className='font-semibold  ml-1 text-xs'>{e.location}</div>
                                </div>
                            </div>


                        </div>

                    ))

                }


{
                    arr3.map((e) => (
                        <div className=' bg-white relative '>
                            <div className='h-8 rounded-b-2xl w-9   absolute top-0 right-0'><img className='h-full w-full' src={"./img/icons9-time-100.png"} alt="" /></div>
                            <div className='border-b-2 border-slate-200'>
                                <img src={e.imagees} className='h-48' />
                                <div className='font-bold m-2 tracking-wide	text-sm  text-slate-500'>{e.heading}</div>
                                <div className='flex ml-2'>
                                    <img src={e.profileimg} className='h-7 w-7 mb-2 rounded-full text-slate-400 ' alt="" />
                                    <div className='flex'>
                                        <div className='font-medium mb-3 ml-3 mt-1 text-sm text-slate-500'>{e.headleaks}</div>
                                        <div className='mt-2 ml-1 text-violet-500'><PiCheckCircleFill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-around h-10 items-center -ml-3 text-slate-400 relative'>
                                <div className='flex font-semibold'>
                                    <div ><IoPeople />  </div>
                                    <div className='font-semibold   ml-1 text-xs'>{e.people}</div>
                                </div>
                                <div className='flex font-semibold '>
                                    <div>
                                        <CgCalendarDates />

                                    </div>
                                    <div className='font-semibold  ml-1 text-xs'>{e.date}</div>
                                </div>
                                <div className='flex font-semibold'>
                                    <div><CiLocationOn />
                                    </div>
                                    <div className='font-semibold  ml-1 text-xs'>{e.location}</div>
                                </div>

                            </div>


                        </div>

                    ))

                }
                

                {
                    afteradd.map((e) => (
                        <div className=' bg-white relative '>
                            <div className='h-8 rounded-b-2xl w-9   absolute top-0 right-0'><img className='h-full w-full' src={"./img/image.png"} alt="" /></div>
                            <div className='border-b-2 border-slate-200'>
                                <img src={e.imagees} className='h-48' />
                                <div className='font-bold m-2 tracking-wide	text-sm  text-slate-500'>{e.heading}</div>
                                <div className='flex ml-2'>
                                    <img src={e.profileimg} className='h-7 w-7 mb-2 rounded-full text-slate-400 ' alt="" />
                                    <div className='flex'>
                                        <div className='font-medium mb-3 ml-3 mt-1 text-sm text-slate-500'>{e.headleaks}</div>
                                        <div className='mt-2 ml-1 text-violet-500'><PiCheckCircleFill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-around h-10 items-center -ml-3 text-slate-400 relative'>
                                <div className='flex font-semibold'>
                                    <div ><IoPeople />  </div>
                                    <div className='font-semibold   ml-1 text-xs'>{e.people}</div>
                                </div>
                                <div className='flex font-semibold '>
                                    <div>
                                        <CgCalendarDates />

                                    </div>
                                    <div className='font-semibold  ml-1 text-xs'>{e.date}</div>
                                </div>
                                <div className='flex font-semibold'>
                                    <div><CiLocationOn />
                                    </div>
                                    <div className='font-semibold  ml-1 text-xs'>{e.location}</div>
                                </div>

                            </div>


                        </div>

                    ))

                }

            </div></div>

           
                    : <Calender />}

            </div>




        </div>
    )
}

export default Mainpg