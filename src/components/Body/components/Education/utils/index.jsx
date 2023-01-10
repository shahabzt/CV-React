export function ListEduCation(props){
    return(
        <ul>
        <li>
            <h6 className="text-primary">{props.title}</h6>
            <p>

                {props.dec}
            </p>
        </li>
        
    </ul>
    )
}

