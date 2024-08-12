import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


const Calender = () => {

    const second=[

        
        {
            hheading:"Move from graphic Designer",
            imag:"",
            date:"",
            location:"floor 6 195 dien bien"
        }
    ]
  return (
    <div className='flex mt-3'>
        <div className='  w-20  '>
            <div className='mb-5'><span>11.00</span></div>
            <div className='mb-5' ><span>12.00</span></div>
            <div className='mb-5'><span>13.00</span></div>
            <div className='mb-5'><span>14.00</span></div>
            <div className='mb-5'><span>15.00</span></div>
            <div className='mb-5'><span>16.00</span></div>
            <div className='mb-5'><span>17.00</span></div>
            <div className='mb-5'><span>18.00</span></div>
            <div className='mb-5'><span>19.00</span></div>

           
        </div>
        
       <div className=' h-36 pl-3 pt-3 rounded-xl border-8 bg-slate-400 w-3/5  border-l-lime-400'>
         {/* {second.map((e)=>(  */}
                  
            <div>
                <p> Move from Graphic Designer to UX DESIGNER</p>
            </div>
            <div className='flex'>
               <div>
                <img src="" alt="" />
              </div>
               <div><p>Herman wong</p></div>
            </div>
            <div className='flex'>
                <div>
                    <IoTimeOutline />
                </div>
                <div>
                    <span>16pm-18pm</span>
                </div>

                <div>
                    <CiLocationOn />
                </div>
                <div>
                    <span>floor 6,195 dien bien phu,w15</span>
                </div>

            </div>
            ))} 


            
            
        </div>
       
        

    </div>
  )
}

export default Calender