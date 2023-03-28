import React from "react";
import css from '../Filter/Filter.module.css'


const Filter = ({value, onChange}) =>{
    return(
         <label htmlFor="name">Find contacts by name
        <input name="name" type="text"
        onChange={onChange} value={value}
        className={css.input}                
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                required
        />
    </label>
    )
   
}


export default Filter;