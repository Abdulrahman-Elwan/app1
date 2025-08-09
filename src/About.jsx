import './assets/css/App.css';

export default function About() {
  return (
    <div className='container py-5 d-flex justify-content-center align-align-items-center text-center'>
      <div className="py-5">
        <div className="text-white d-flex flex-column align-items-center">
          <h1 className="text-uppercase fw-bold">about component</h1>
          <div className="my-3 position-relative star w-25">
            <span>
              <i class="fa-solid fa-star fs-3"></i>
            </span>
          </div>
        </div>
        <div className="w-75 mx-auto">
          <div className="row mt-3 text-start text-white">
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
