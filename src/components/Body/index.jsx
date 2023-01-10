import {Experience} from "./components/Exprience/index"
import {Education} from "./components/Education/index"
import {Skills} from  "./components/Skills/index"
import {RecentWork} from "./components/RecentWork/index"



export function Body(){
    return (
        <main className="container">
        <div className="row">
            <div className="col-6 mb-5">
                <Experience />
            </div>
            <div className="col-6 mb-5">
                <Education />
            </div>
        </div>
        <div className="row">
            <div className="col-6 mb-5">
                <Skills />
            </div>
            <div className="col-md">
                <RecentWork/>
            </div>
        </div>
    </main>
    )
}