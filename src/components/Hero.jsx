import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Hero = () => {

    const {setTheme} = useTheme();

  return (
    <div className='my-5 flex flex-col items-center gap-5 '>
        <h2 className='text-3xl font-bold text-center  '>Top 20 productive ideas for your next startup</h2>
        <h2 className='text-center my-2'> <strong className='text-secondary uppercase '>Like your favourite ideas.</strong> <br /> Write your best Ideas, No account neeeded</h2>
   
        <div className="">
        <select value="" onChange={(event) => setTheme(event.target.value) } className="select select-bordered border-primary w-full max-w-xs">
            <option disabled >Who shot first?</option>
            <option>light</option>
            <option>dark</option>
            <option>cupcake</option>
            <option>bumblebee</option>
            <option>corporate</option>
            <option>synthwave</option>
            <option>retro</option>
            <option>acid</option>
            <option>lemonade</option>
            <option>winter</option>
            <option>sunset</option>
        </select>

        </div>
    </div>
  )
}

export default Hero