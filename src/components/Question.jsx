export default function Question(){
    return (
        <div className="question">
            <div className="question-and-options">
            <h2 className="question-text">How would one say goodbye in Spanish?</h2>
            <label className="option" htmlFor="option-1">Adiós</label>
            <input id="option-1" type="radio" name="choice"/>

            <label className="option" htmlFor="option-2">Hola</label>
            <input id="option-2" type="radio" name="choice"/>


            <label className="option" htmlFor="option-3">Au Revoir</label>
            <input id="option-3" type="radio" name="choice"/>

            <label className="option" htmlFor="option-4">Salir</label>
            <input id="option-4" type="radio" name="choice"/>
            </div>
        </div>
    )
}