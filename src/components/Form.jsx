import React,{Fragment} from 'react';



const Form = () => {

    const submitName = () =>{
        console.log('Enviando')
    }

    return ( 
        <Fragment>
            <form
                onSubmit = {submitName}
            >
                <div className="form-group">
                    <label htmlFor="personaje">Nombre del Personaje</label>
                    <input type="text" id="personaje" className="form-control fntsz-secundary" autoCorrect placeholder="Nombre del Personaje"/>
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
