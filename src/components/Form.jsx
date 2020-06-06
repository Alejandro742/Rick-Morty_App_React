import React,{Fragment, useState} from 'react';



const Form = ({saveName}) => {

    //state para obtener nombre del form
    const [name,getName] = useState('');
    // state para manejar error
    const [error,updateError] = useState(false);

    const actualizarState = (e) =>{
        getName(e.target.value);
    }

    const submitName = (e) =>{
        e.preventDefault();
        //verofy if the form is not empty
        if(name.trim()===''){
            updateError(true);
            return;
        }
        //clear error state
        updateError(false);

        //save name in app hooks
        saveName(name);
        //clean form
        getName('');
    };

    return ( 
        <Fragment>
            <form
                onSubmit = {submitName}
            >
                <div className="form-group">
                    <label htmlFor="personaje">Nombre del Personaje</label>
                    <input type="text" name="name" className="form-control fntsz-secundary"
                    autoFocus placeholder="Nombre del Personaje"
                    onChange={actualizarState}
                    value = {name}
                    
                    />
                </div>
                <div className="form-group">
                    <button
                        type='submit' className = "form-group btn btn-primary btn-block fntsz-primary"
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </Fragment>
     );
}
 
export default Form;
