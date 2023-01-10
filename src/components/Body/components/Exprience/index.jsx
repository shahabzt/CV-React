import { ListExp } from "./utils/index";

export function Experience() {
    return (
        <>
            <h2 className="mb-5">Work Experience</h2>
            <ListExp title={" Web Admin / since 2010 to 2012"} dec={"Head Admin @ pnnc.ir"} />
            <ListExp title={" Web Admin / since 2011 to 2012"} dec={"Admin @ Rapsong.ir"} />
            <ListExp title={" Sales Manager /  since 2017 to 2018"} dec={"Sales manager @ DamasaEnergy-Arak branch"} />


        </>
    )
}