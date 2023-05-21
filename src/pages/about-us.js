import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
    return (
        <div style={{
            backgroundImage: `url("/images/1414278.jpg")`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
          }}>
            <Image src='/images/about-us1.png' className="d-block w-100 navbar-bg" width={978} height={97} alt='' />
            <Image src='/images/2about.png' className="d-block w-100 mt-5" width={851} height={136} alt='' />
            <Image src='/images/about-us3.png' className="rounded mx-auto d-block mt-5" width={320} height={335} alt='' />
            <Image src='/images/111122.png' className="rounded mx-auto d-block mt-5" width={360} height={335} alt='' />
            <Image src='/images/4about.png' className="d-block w-100 mt-5" width={851} height={136} alt='' />
        </div>
    )
}
