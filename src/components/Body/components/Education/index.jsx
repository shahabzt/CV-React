import { ListEduCation } from "./utils/index";


export function Education() {
    return (
        <>
            <h2 className="mb-5">Education</h2>

            <ListEduCation title={"GeoMechanics Enginner / Shahrood University of Technology  2018-2021"}
                dec={"First rank student in master's degree"}
            />

            <ListEduCation title={"Mining Engineer / Arak University of Technology  2013-2017"}
                dec={"First rank student in bachelor's degree"}
            />
        </>
    )
}