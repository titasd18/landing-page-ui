import { useState } from "react"


const FaqItem = ({title, desc}) => {
    const [show, setShow] = useState(false)
  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
    <div onClick={()=>setShow(!show)} className="flex justify-between items-center">
      <h3 className='text-lg text-[#222D39]'>{title}</h3>
      <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H14V2H0V0Z" fill="#222D39"/>
</svg>

    </div>
    {show &&
        <p className='text-sm text-[#4B5563] mt-4'>{desc}</p>
    }
    </div>
  )
}

export default FaqItem
