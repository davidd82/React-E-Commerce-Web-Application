export default function Header() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="./img/car.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Lana Del Rey Online Store</h1>
          <p className="lead"><strong><i>"Did you know that there’s a tunnel under Ocean Blvd"</i></strong> is a haunting, cinematic journey 
            through love, memory, and longing. Explore the official collection inspired by Lana Del Rey’s most 
            intimate and atmospheric album—where vintage glamour meets raw confession.</p>
        </div>
      </div>
    </div>
  )
}