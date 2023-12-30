function SideParIcons(props) {
    return <div className="flex gap-4 pl-4 pt-7">
        <i class={`fa-solid text-4xl text-white ${props.icon}`}></i>
        <h1 className="text-4xl text-white">{props.title}</h1>
    </div>
}

export default SideParIcons