import './assets/css/App.css';
export default function Footer() {
    return (
            <footer class="text-white text-center text-lg-start pt-5 w-100 footer">
                <div class="container py-5">
                    <div class="row text-center text-md-start py-4">
                        <div class="col-md-4 mb-4 text-center">
                            <h5 class="fw-bold text-uppercase">LOCATION</h5>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                        <div class="col-md-4 mb-4 text-center">
                            <h5 class="fw-bold text-uppercase">AROUND THE WEB</h5>
                            <div class="d-flex justify-content-center gap-3 mt-3">
                                <a href="#" class="btn btn-outline-light btn-social rounded-circle">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="btn btn-outline-light btn-social rounded-circle">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="btn btn-outline-light btn-social rounded-circle">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                                <a href="#" class="btn btn-outline-light btn-social rounded-circle">
                                    <i class="fas fa-globe"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 text-center">
                            <h5 class="fw-bold text-uppercase">ABOUT FREELANCER</h5>
                            <p class="mb-0">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
                <div class="bg-dark text-center py-4">
                    <p class="mb-0">Copyright © Your Website 2021</p>
                </div>
            </footer>
        
    )
}
