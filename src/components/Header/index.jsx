import { Image } from "../../assets/index";



export function Header() {
    return (
        <header className="bg-primary bg-gradient text-white py-5">
            <div className="container">
                <div className="row">
                    <Image />
                    <div className="col-md-9">
                        <h2>{"Shahab Banijamali"}</h2>
                        <h5>{"Front-End Developer"} </h5>
                        <p className="border-top pt-3">{"Trainee @ MapsaHR"}
                            <br />
                            {"Shahrood University of Technology"}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}
