
export function ButtonComponent(props) {
    const { index, btnText, onClick } = props;
    return (
        <>
            <button id={index} onClick={onClick}>{btnText}</button>
        </>
    )
}