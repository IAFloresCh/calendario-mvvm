function Inputs({type, name, label, onChange, value}){

    return(
        <div>
            <label>{label + ": "}
            <input type={type}  name={name} value={value}  onChange={onChange} required={true} min={0}/>
            </label>
        </div>
    );
}
export default Inputs;