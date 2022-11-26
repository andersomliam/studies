import style from './Input.module.css'

function input({ type, text, name, placeholder, handleOnChange, value }) {
    
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type} 
                name={name} 
                id={name} 
                placeholder={placeholder} 
                OnChange={handleOnChange} 
                value={value} />
        </div>
    )
}

export default input