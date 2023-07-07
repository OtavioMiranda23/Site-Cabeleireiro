interface IButton {
    mensage: string,
    color: string,


}

export function Button(props: IButton) {
    return (
        <button className={`py-4 px-4 rounded-xl  ${props.color}  shadow-sm text-xl text-background font-semibold`}>{props.mensage}</button>
    )
}