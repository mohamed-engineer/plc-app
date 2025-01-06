import React from 'react'
import Link from 'next/link'
const HeaderIndex = () => {
  return (
    <>
    <header id='headerIndex' className='text-center text-white relative  top-12'>
  
  <h1 className='text-5xl'>Welcome to PLC Academy website</h1>
  <h3 className='text-3xl'>Start your programming journey</h3>
<div className="btns top-10 relative  ">

  <h1 className="btn-link right-4 text-3xl relative  text-white"><Link className='text-white no-underline underline-offset-0	'  href={''}>Register Now</Link></h1>
  <h1 className="btn-link left-4 text-3xl relative text-white"><Link  className='text-white no-underline underline-offset-0	' href={''}> Explore our plans</Link></h1>

</div>
</header>
    </>
  )
}

export default HeaderIndex
