
export function NotesComponent({ obj, index}) {
    console.log({ noteComp: obj });
    return (
        <div id={index}>
            <h3>{obj.title}</h3>
            <p>{obj.description}</p>
        </div>
    )
}