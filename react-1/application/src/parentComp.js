export function ParentComp() {
    let count = 0;
    return (
        <>
            <button onClick={ ()=> {
                count = Math.round(Math.random()*100);
                console.log(count);
                }}>button</button>
            <ChildComp countc={count}/>
        </>
    )
} 

function ChildComp(props) {
    const { value } = props;
    console.log(value);
    return (
        <div>{value}</div>
    )
}