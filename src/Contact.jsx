import './assets/css/portfolio.css'
import './assets/css/contact.css'

export default function Contact() {


  function noLoad(e){
    e.preventDefault();
  }


  return (
    <div className="componanteProtfolio">
      <div className="container py-5 d-flex flex-column justify-content-center align-items-center">
        <div className="text text-center">
          <h1 className="text-uppercase fw-bold">conatct section</h1>
          <div className="my-3 position-relative star">
            <span>
              <i class="fa-solid fa-star fs-3"></i>
            </span>
          </div>
        </div>
        <div className="form w-50 py-4">
          <form>
            <div className="mb-3">
              <input type="text" className="form-control" id="userName" placeholder="userName" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" id="userAge" placeholder="userAge" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" id="userEmail" placeholder="userEmail" />
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="userPassword" placeholder="userPassword" />
            </div>
            <button type="submit" className="btn btn-success bg-success bg-opacity-75 px-4 py-2 border-0" onClick={noLoad}>send Message</button>
          </form>
        </div>
      </div>
    </div>

  )
}
