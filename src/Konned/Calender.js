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
            <div className='w-11/12 h-96 -mt-40 overflow-x-hidden mr-2  '>
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
                                    <div className='mt-1 ' >
                                        <CiLocationOn className='' />
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
                            <div className='font-bold text-slate-500'>{e.hheading}</div>
                            <div className='flex mt-3'>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full text-slate-400 ' /></div>
                                <div className='ml-3 text-slate-500  text-sm'>{e.nam}</div>
                            </div>

                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div className='text-sm font-thin'>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1'>
                                        <CiLocationOn />
                                    </div>
                                    <div className='text-sm font-thin'>{e.location}</div>

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

                            <div className='font-bold text-slate-500'>{e.hheading}</div>
                            <div className='flex mt-3 '>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full ' /></div>
                                <div className='ml-3 text-sm text-slate-500'>{e.nam}</div>
                            </div>


                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div className='text-sm font-thin'>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1 '>
                                        <CiLocationOn />
                                    </div>
                                    <div className='text-sm font-thin'>{e.location}</div>

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
                            <p className='text-sm '>{e.time1}</p>
                            <div className=''></div>


                        </div>
                        <div className='flex relative top-12'>
                            <div className='text-sm'> 19.00</div>
                            <div className='w-11/12 h-1'></div>
                        </div>

                        <div className='w-4/5 h-32 border-l-8 -mt-5 border-blue-400 ml-16 pl-6 pt-3 bg-purple-200 rounded relative'>
                            <div className='w-3 h-3 bg-blue-400 absolute top-0 right-0 mr-3 rounded-full mt-3'></div>
                            <div className='font-bold text-slate-500'>{e.hheading}</div>
                            <div className='flex mt-3'>
                                <div><img src={e.imag} alt='no' className='h-7 w-7 mb-2 rounded-full text-slate-400 ' /></div>
                                <div className='ml-3 text-sm  text-slate-500'>{e.nam}</div>
                            </div>

                            <div className='flex mt-3 '>
                                <div className='flex'>
                                    <div className='mt-1'>
                                        <IoTimeOutline />
                                    </div>
                                    <div className='text-sm font-thin'>{e.date}</div>
                                </div>

                                <div className='flex ml-10'>
                                    <div className='mt-1'>
                                        <CiLocationOn />
                                    </div>
                                    <div className='text-sm font-thin'>{e.location}</div>

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


            <div className='w-2/5 t'>
<div class="flex items-center justify-center text-sm py-8 px-4 ">


            <div class="max-w-sm w-full text-sm shadow-lg">
                <div class="md:p-8 p-5 dark:bg-white bg-white rounded-t text-sm ">
                    <div class=" flex items-center    text-sm">
                        
                        <div class="flex items-center justify-evenly">     
                            <button aria-label="calendar backward" class="  border-2 rounded-full border-slate-300 dark:text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="15 6 9 12 15 18" />
                            </svg>
                        </button>
                        <div className='ml-10 mr-14'>
                        <span  tabindex="0" class="focus:outline-none   font-medium dark:text-slate-500 text-base text-slate-200">October 2020</span>
                        </div>
                        
                        <button aria-label="calendar forward" class="border-2 border-slate-300 dark:text-slate-500 rounded-full"> 
                              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler  icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <polyline points="9 6 15 12 9 18" />
                            </svg>
                        </button>

                        </div>
                    </div>
                    <div class="flex items-center justify-between pt-12 overflow-x-auto text-xs">
                        <table class="w-full">
                            <thead>
                                <tr>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">Mo</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">Tu</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">We</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">Th</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">Fr</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">Sa</p>
                                        </div>
                                    </th>
                                    <th>
                                        <div class="w-full flex justify-center">
                                            <p class=" font-medium text-center text-gray-800 dark:text-slate-500">Su</p>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-slate-500">1</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-slate-500 ">2</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">3</p>
                                        </div>
                                    </td>
                                    <td class="pt-6">
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">4</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">5</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">6</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">7</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="w-full h-full">
                                            <div class="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabindex="0" class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 w-8 h-8 flex items-center justify-center  text-white bg-slate-300 rounded-full">8</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="text-base text-gray-500 dark:text-slate-500 ">9</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">10</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">11</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">12</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">13</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">14</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 w-8 h-8 flex items-center justify-center  text-white bg-slate-300 rounded-full">15</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 w-8 h-8 flex items-center justify-center  text-white bg-indigo-500 rounded-full">16</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">17</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">18</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">19</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">20</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">21</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 w-8 h-8 flex items-center justify-center  text-white bg-slate-300 rounded-full">22</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">23</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">24</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500">25</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">26</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">27</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">28</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 w-8 h-8 flex items-center justify-center  text-white bg-slate-300 rounded-full">29</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="px-2 py-2 cursor-pointer flex w-full justify-center">
                                            <p class=" text-gray-500 dark:text-slate-500 font-medium">30</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               
            </div>
        </div>
                {
                    dateaddd.map((e) => (
                        <div className='mt-10 gap-5 text-base'>
                            <div className='flex ml-3 mb-4 font-semibold opacity-55  text-s'>
                            <p className='t' >11.00</p>
                            <p className='w-3 h-3 bg-green-800 m-2 rounded-full'></p>
                                <p><del>{e.date1}</del></p>
                               
                            </div>
                            <div className='flex ml-3 mb-4  font-semibold  text-s'>
                            <p  >14.00</p>
                            <p className='w-3 h-3 mb-4 opacity-55 bg-blue-300 m-2 rounded-full'></p>
                                <p className='opacity-55  '>{e.dal2}</p>
                               
                            </div>
                            <div className='flex ml-3 mb-4  font-semibold text-s'>
                            <p  >16.00</p>
                            <p className='w-3 h-3 opacity-55 bg-yellow-300 m-2 rounded-full'></p>
                                <p className='opacity-55 '>{e.olr3}</p>
                               
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