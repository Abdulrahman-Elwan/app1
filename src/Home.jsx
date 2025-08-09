import main_img from "./assets/image/main-image.jpg";

export default function Home() {
    return (
        <div className="container py-5 d-flex justify-content-center align-align-items-center text-center">
            <div className="py-5">
                <img
                    src={main_img}
                    alt="person"
                    width={"220px"}
                    className="rounded-circle mb-4"
                />
                <div className="text text-white">
                    <h1 className="text-uppercase fw-bold">start Framework</h1>
                    <div className="my-3 position-relative star">
                        <span>
                            <i class="fa-solid fa-star fs-3"></i>
                        </span>
                    </div>
                    <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </div>
    );
}
