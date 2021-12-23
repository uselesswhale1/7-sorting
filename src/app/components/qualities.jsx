const Qualities = ({ qualities }) => {
    const array = qualities.map(({ name, color }) => {
        return [name, color]
    })
    return array.map((arr, index) => (
        <span className={`badge bg-${arr[1]} m-1`} key={index}>
            {arr[0]}
        </span>
    ))
}

export default Qualities
