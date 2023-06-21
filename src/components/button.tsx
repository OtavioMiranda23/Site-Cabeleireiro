interface IButton {
    mensage: string,
    color: string,


}

export function Button(props: IButton) {
    return (
        <button className={`py-4 px-6 rounded-sm  ${props.color}  shadow-sm text-xl text-[#08090A] font-semibold`}>{props.mensage}</button>
    )
}