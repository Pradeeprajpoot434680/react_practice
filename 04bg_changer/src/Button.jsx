function Button({ color })
{

   
    return (
        <button className={`border rounded pl-3 pr-3`} style={{backgroundColor:color}}>{color}</button>
    )
}

export default Button;