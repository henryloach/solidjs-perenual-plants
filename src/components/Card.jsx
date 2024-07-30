function Card(props) {
    const { rounded, flat, children } = props
    return (
        <div
            class="bg-white p-4 text-center rounded-md shadow-md"
            classList={{ "rounded-md": rounded, "shadow-md": !flat }}
        >
            {children}
        </div>
    )
}

export default Card;