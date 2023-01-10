export function List(props) {
    return (
        <div className="progress mb-4" style={{ "height": "25px" }}>
            <div className="progress-bar bg-primary text-left pl-2" role="progressbar" style={{ "width": "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">{props.name}</div>
        </div>
    )
}