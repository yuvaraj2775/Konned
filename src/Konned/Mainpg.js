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

    const [value, setvalue] = useState(false)
    const handlefirst = () => {
        setvalue(true)
    }
    const handlesecond = () => {
        setvalue(false)
    }


    const addingimg = [
        {
            imagees: "../img/st.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st2.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st3.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st4.jpg",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },

    ]

    const afteradd = [
        {
            imagees: "../img/st.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"
        },
        {
            imagees: "../img/st2.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st3.webp",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },
        {
            imagees: "../img/st4.jpg",
            heading: "Move from Graphic Designer to UX DESIGNER-Class-1",
            profileimg: "../img/pexels-photo-1043471.webp",
            headleaks: "hreman wong",
            people: "8/10",
            date: "Dec 10",
            location: "IIT"

        },

    ]

    return (
        <div className='p  text-gray-500  '>
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
                    <input type="text" placeholder='What you want to learn?' className=' pl-3 bg-slate-200' name="" id="" />
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
                        <span className='text-2xl'>My course</span>
                    </div>
                    <div>
                        <span onClick={handlefirst} className='text-xl  cursor-pointer font-semibold border-b-2 '>Classes</span>
                        <span onClick={handlesecond} className='text-xl cursor-pointer font-semibold ml-7 border-b-2 focus:border-violet-500'  >Calender</span>
                    </div>
                    <div className='bg-blue-600 w-32 h-10 rounded'>
                        <div className='pt-2 pl-2 flex text-white'>
                            <div>Create class</div>
                            <div className='mt-1 ml-1'><FaPlus /></div>
                        </div>

                    </div>
                </div>

                {value ?
            
               

<div>     <div className='flex justify-between items-center h-20 '>
            
            <div className='flex w-72 justify-between '>
                <p className='border-2 font-semibold border-blue-400 rounded-3xl h-7 w-10 pl-2 '>All</p>
                <p className='border-2 font-semibold  rounded-3xl h-7  '>Ongoing</p>
                <p className='border-2 font-semibold rounded-3xl h-7  '>Comiled</p>
                <p className='border-2 font-semibold rounded-3xl h-7  '>Draft</p>

            </div>
            <div >
                <span className='font-semibold'>Sort: Last Active</span>
            </div>
        </div>
      
        

            <div className='grid grid-cols-4 gap-8 drop-shadow-md ' >

                {/* <div><img src={"../img/st2.webp"} alt="" /></div>
        <div><img src={"../img/st3.webp"} alt="" /></div>
        <div><img src={"../img/st4.webp"} alt="" /></div> */}
                {
                    afteradd.map((e) => (
                        <div className=' bg-white '>
                            <div className='border-b-2 border-slate-200'>
                                <img src={e.imagees} alt='no' className='h-48' />
                                <div className='font-semibold m-2 mt-3  tracking-wide	text-base text-slate-500'>{e.heading}</div>
                                <div className='flex ml-2'>
                                    <img src={e.profileimg} alt='no' className='h-7 w-7 mb-2 rounded-full text-slate-400 ' alt="" />
                                    <div className='font-medium mb-3 ml-3 mt-1 text-sm'>{e.headleaks}</div>
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
                    afteradd.map((e) => (
                        <div className=' bg-white relative '>
                            <div className='h-6 w-8 rounded  absolute top-0 right-0'><img className='h-full w-full' src={"./img/tick.avif"} alt="" /></div>
                            <div className='border-b-2 border-slate-200'>
                                <img src={e.imagees} className='h-48' />
                                <div className='font-semibold m-2 tracking-wide	text-base text-slate-500'>{e.heading}</div>
                                <div className='flex ml-2'>
                                    <img src={e.profileimg} className='h-7 w-7 mb-2 rounded-full text-slate-400 ' alt="" />
                                    <div className='flex'>
                                        <div className='font-medium mb-3 ml-3 text-sm'>{e.headleaks}</div>
                                        <div className='mt-1 ml-1 text-violet-500'><PiCheckCircleFill />
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