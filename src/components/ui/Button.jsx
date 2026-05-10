function Button ({text, variant = "primary"}){
    return (
        <button className="px-6 py-2 rounded-lg bg-yellow-400 font-semibold cursor-pointer">
            {text}
        </button>
    )
}

export default Button