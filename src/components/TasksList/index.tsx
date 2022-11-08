import './styles.css';

interface ITasksListProps{
    text: string;
}
export function TasksList(props: ITasksListProps) {
    return (
        <>
            <div className="card">
                <p>{props.text}</p>
                <div className="line2"></div>
                <span className="btn-card">X</span>
            </div>
        </>
    )
}