function List({item}){
    return (
        <>
            <h1>Problem Statement :- 4</h1>
            <ul>

         {item.map((item) => (
        <li >{item} </li>
        ))}
        </ul>

        </>
    )
}

export default List
