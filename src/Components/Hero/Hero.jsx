import React from 'react'
import HeroBg from "../../assets/Hero.jpg"

const style = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    hight: '100%',   
}
const Hero = () => {
  return (
    <section style={style}>
        <div className='xl:container py-12'>
            <div className='lg::w-1/2 mb-4 md:mb-0 p-10'>
                <h1 className='text-gray-900 font-medium text-4xl md:text-5xl leading-tight mb-2'>Panchal Flour Mill</h1>
                <p className='text-xl text-gray-600 mt-3 mb-6'>One stop solution for flour grinding services</p>
                <button className=' text-white px-6 py-3 bg-[#c8a876] font-medium rounded-full translation duration-300 hover:bg-[#c09858]'>Contact Us</button>
            </div>
        </div>

    </section>
  )
}

export default Hero