import React from 'react'
import Images1 from "../../assets/WhyUS/Img1.png"
import Images2 from "../../assets/WhyUS/Img2.png"
import Images3 from "../../assets/WhyUS/Img3.png"
import Images4 from "../../assets/WhyUS/Img4.png"

const List = [
    {
        id:1,
        img : Images1,
        name : "Latest Milling Machinery"
    },
    {
        id:2,
        img : Images2,
        name : "Reasonable Rates"
    },
    {
        id:3,
        img : Images3,
        name : "Time Efficiency"
    },
    {
        id:4,
        img : Images4,
        name : "Expertise in Industry"
    },
]

const WhyUs = () => {
  return (
    <section className='2xl:container pt-12'>
        <div>
            <h1 className='text-3xl font-bold text-gray-800 text-center'>Why Us?</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 py-12'>
            {List.map((data, index)=>{
                return(
                    <div key={index} className='flex flex-col gap-y-2 items-center justify-center p-10 text-center hover:scale-110 tyranslation duration-300'>
                        <img src={data.img} alt="" className='h-28 '/>
                        <p>{data.name}</p>

                    </div>
                )
            })}

        </div>

    </section>
  )
}

export default WhyUs