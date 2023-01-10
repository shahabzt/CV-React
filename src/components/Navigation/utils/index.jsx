export function NavigationItems(props){
    return (
        <div className="col-md text-md-right">
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d={props.icon} />
            </svg>
            <a href="#" className="text-white ml-2">{props.item}</a>
        </div>
    )
}