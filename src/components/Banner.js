import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/images/i1.gif" className="d-block w-100" width={600} height={260} alt="banner slide 1" />
        </div>
        <div className="carousel-item">
          <Image src="/images/i2.png" className="d-block w-100" width={600} height={260} alt="banner slide 2" />
        </div>
        <div className="carousel-item">
          <Image src="/images/i3.png" className="d-block w-100" width={600} height={260} alt="banner slide 3" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
