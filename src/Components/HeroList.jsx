function HeroList(props) {

    
    return <div style={{backgroundColor: props.bg}} className={` rounded-lg shadow-xl shadow-gray-500 w-60 h-32`}>
        <h1 className="text-3xl font-bold text-center pt-10">{props.title}</h1>
    </div>
}

export default HeroList