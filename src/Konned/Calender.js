import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';







const Calender = () => {

    const second = [


        {
            time1: "11.00",
            hheading: "Move from graphic Designer",
            imag: "../img/pexels-photo-1043471.webp",
            date: "16-18pm",
            nam: "Herman",
            location: "floor 6 195 dien bien",
            time3: "13.00"
        },

    ]

    const arr2 = [
        {
            time1: "14.00",
            hheading: "Move from graphic Designer",
            imag: "../img/pexels-photo-1043471.webp",
            date: "16-18pm",
            nam: "Sainna",
            location: "floor 6 195 dien bien",
            time3: "16.00"

        },

    ]
    const arr3 = [
        {
            time1: "",
            hheading: "Move from graphic Designer",
            imag: "../img/pexels-photo-1043471.webp",
            date: "16-18pm",
            nam: "Hermio",
            location: "floor 6 195 dien bien",
            time3: "18.00"

        },

    ]

    const arr4 = [
        {
            time1: "",
            hheading: "Move from graphic Designer",
            imag: "../img/pexels-photo-1043471.webp",
            date: "16-18pm",
            nam: "Arun",
            location: "floor 6 195 dien bien",
            time3: "20.00"

        },

    ]







    const dateaddd = [
        {
            date1: "Business English from ESL...",
            dal2: "Business English from ESL...",
            olr3: "Business English from ESL..."



        },
    ]
    return (

        <div className='mt-6 flex items-center    bg-white w-full
         h-3/6 overflow pl-6 rounded '>
            <div className='w-11/12 h-96 overflow-x-hidden mr-2  '>
                {second.map((e) => (
                    <div className='opacity-50 text-sm font-semibold tracking-wider	'>
                        <div className='flex'>
                            <p className='text-sm' >{e.time1}</p>
                            <div className='w-11/12 h-1 ml-5 bg-slate-200  mt-3 '></div>



                        </div>
                        <div className='flex relative top-12'>
                            <div className='text-sm'> 12.00</div>
                            <div className='w-full h-1'></div>
                        </div>

                        <div className='w-4/5 h-32 border-l-8 -mt-5 border-green-800 ml-16 pl-6 pt-3  bg-slate-200 rounded relative '>
                            <div className='w-3 h-3 bg-green-800 absolute top-0 right-0 mr-3 rounded-full mt-3'></div>
                            <div className='font-bold'>{e.hheading}</div>
                            <div className='flex mt-3'>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full bg-slate-200  ' /></div>
                                <div className='ml-3'>{e.nam}</div>
                            </div>

                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1'>
                                        <CiLocationOn />
                                    </div>
                                    <div>{e.location}</div>

                                </div>
                            </div>






                        </div>
                        <div className='flex mb-5
                    '>
                            <p className='text-sm'>{e.time3}</p>
                            <div className='w-11/12 h-0.5 block ml-5 bg-slate-200   mt-3'></div>
                        </div>


                    </div>
                ))}

                {arr2.map((e) => (
                    <div className='mt-10 text-sm font-semibold tracking-wider		'>
                        <div className='flex'>
                            <p className='text-red-400 text-sm'>{e.time1}</p>
                            <div className='w-11/12 h-0.5 ml-5  bg-red-400 mt-3 '></div>


                        </div>
                        <div className='flex relative top-12'>
                            <div className='text-sm'> 15.00</div>
                            <div className='w-11/12 h-1'></div>
                        </div>

                        <div className='w-4/5 h-32 border-l-8 -mt-5 border-blue-300 ml-16 pl-6 pt-3 bg-purple-100 rounded relative'>
                            <div className='w-3 h-3 bg-blue-300 absolute top-0 right-0 mr-3 rounded-full mt-3'></div>
                            <div className='font-bold'>{e.hheading}</div>
                            <div className='flex mt-3'>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full text-slate-400 ' /></div>
                                <div className='ml-3'>{e.nam}</div>
                            </div>

                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1'>
                                        <CiLocationOn />
                                    </div>
                                    <div>{e.location}</div>

                                </div>
                            </div>






                        </div>
                        <div className='flex
                    '>
                            <p className='text-sm'>{e.time3}</p>
                            <div className='w-11/12 h-0.5 block ml-5 bg-slate-200   mt-3'></div>
                        </div>


                    </div>
                ))}


                {arr3.map((e) => (
                    <div className='text-sm font-semibold tracking-wider'>
                        <div className='flex'>
                        </div>
                        <div className='flex relative top-12'>
                            <div className='text-sm'> 17.00</div>
                            <div className='w-full h-1'></div>
                        </div>

                        <div className='w-4/5 h-32 border-l-8 -mt-5 border-yellow-300 ml-16 pl-6 pt-3 bg-yellow-50 relative  rounded '>
                            <div className='w-3 h-3 bg-yellow-300 absolute top-0 right-0 mr-3 rounded-full mt-3'></div>

                            <div className='font-bold'>{e.hheading}</div>
                            <div className='flex mt-3 '>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full ' /></div>
                                <div className='ml-3'>{e.nam}</div>
                            </div>


                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1 '>
                                        <CiLocationOn />
                                    </div>
                                    <div>{e.location}</div>

                                </div>
                            </div>
                        </div>
                        <div className='flex'>
                            <p className='text-sm'>{e.time3}</p>
                            <div className='w-11/12 h-0.5 block bg-slate-200 ml-5 mt-3'></div>
                        </div>
                    </div>
                ))}

                {arr4.map((e) => (
                    <div className='text-sm font-semibold tracking-wider'>
                        <div className='flex'>
                            <p className='text-sm'>{e.time1}</p>
                            <div className=''></div>


                        </div>
                        <div className='flex relative top-12'>
                            <div className='text-sm'> 19.00</div>
                            <div className='w-11/12 h-1'></div>
                        </div>

                        <div className='w-4/5 h-32 border-l-8 -mt-5 border-blue-400 ml-16 pl-6 pt-3 bg-purple-200 rounded relative'>
                            <div className='w-3 h-3 bg-blue-400 absolute top-0 right-0 mr-3 rounded-full mt-3'></div>
                            <div className='font-bold'>{e.hheading}</div>
                            <div className='flex mt-3'>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full text-slate-400 ' /></div>
                                <div className='ml-3'>{e.nam}</div>
                            </div>

                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1'>
                                        <CiLocationOn />
                                    </div>
                                    <div>{e.location}</div>

                                </div>
                            </div>






                        </div>
                        <div className='flex
                    '>
                            <p className='text-sm'>{e.time3}</p>
                            <div className='w-11/12 h-0.5 block ml-5 bg-slate-200   mt-3'></div>
                        </div>


                    </div>
                ))}
            </div>


            <div className='w-2/5 '><Calendar />
                {
                    dateaddd.map((e) => (
                        <div className='mt-10 gap-5  '>
                            <div className='flex ml-3 mb-4 font-semibold opacity-55  text-s'>
                            <p  >11.00</p>
                            <p className='w-3 h-3 bg-green-800 m-2 rounded-full'></p>
                                <p><del>{e.date1}</del></p>
                               
                            </div>
                            <div className='flex ml-3 mb-4  font-semibold  text-s'>
                            <p  >14.00</p>
                            <p className='w-3 h-3 mb-4 opacity-55 bg-blue-300 m-2 rounded-full'></p>
                                <p className='opacity-55 '>{e.dal2}</p>
                               
                            </div>
                            <div className='flex ml-3 mb-4  font-semibold text-s'>
                            <p  >16.00</p>
                            <p className='w-3 h-3 opacity-55 bg-yellow-300 m-2 rounded-full'></p>
                                <p className='opacity-55 text-base'>{e.olr3}</p>
                               
                            </div>
                            {/* <p className='ml-5 mt-3'><span>11.00</span><span className='w-3 h-3 bg-green-800 m-2'></span></p>
                            <p className='ml-5 mt-3'><span>14.00</span><span className='w-3 h-3 bg-blue-300  m-2'></span>{e.dal2}</p>
                            <p className='ml-5 mt-3'><span>16.00</span><span className='w-2 h-2 bg-yellow-300 m-2 '> </span>{C}</p> */}
                        </div>
                    ))


                }



            </div>

        </div>


        //         // <div className=''>
        //             // {/* <div className='  w-20  '>


        //                 <div className='mb-5'><span>13.00</span></div>
        //                 <div className='mb-5'><span>14.00</span></div>
        //                 <div className='mb-5'><span>15.00</span></div>
        //                 <div className='mb-5'><span>16.00</span></div>
        //                 <div className='mb-5'><span>17.00</span></div>
        //                 <div className='mb-5'><span>18.00</span></div>
        //                 <div className='mb-5'><span>19.00</span></div>


        //             </div>
        //             {second.map((s) => (

        //                 <div className=' h-36 w-96 pl-3 pt-3 rounded-xl border-8 bg-slate-400  border-l-lime-400 '>


        //                     <div>
        //                         <p> {s.hheading}</p>
        //                     </div>
        //                     <div className='flex'>
        //                         <div>
        //                             <img src="" alt="" />
        //                         </div>
        //                         <div><p>{s.nam}</p></div>
        //                     </div>
        //                     <div className='flex'>
        //                         <div>
        //                             <IoTimeOutline />
        //                         </div>
        //                         <div>
        //                             <span>{s.date}</span>
        //                         </div>

        //                         <div>
        //                             <CiLocationOn />
        //                         </div>
        //                         <div>
        //                             <span>{s.location}</span>
        //                         </div>
        //                         <div className='mb-5' ><span>12.00</span></div>

        //                     </div>

        //  */}


        // {/* 
        //                 </div>
        //             ))}

        //             <div><Calendar style={calendarStyles.calendar} /></div>

        //             <div>
        //                 {
        //                     dateaddd.map((x) => (
        //                         <div>
        //                             <p>{x.date1}</p>
        //                             <p>{x.dal2}</p>
        //                             <p>{x.olr3}</p>


        //                         </div>





        //                     ))
        //                 } */}

        //             </div>





        //         </div>
    )
}

export default Calender