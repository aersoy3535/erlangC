import { getNumberOfAgents } from 'erlang-c-js';
import { useState } from 'react';



const Input = () => {

    const [formValues, setFormValues] = useState({
        volumes: null,
        intervalLength: null,
        AHT: null,
        serviceLevel: null,
        ASA: null,
        occupancy: null,
        shrinkage: null,
    })

    const [employee, setEmployee] = useState(0)
    const [calculated, setCalculated] = useState(false)




    const handleSubmit = (event) => {
        event.preventDefault()

        var FTE = getNumberOfAgents(formValues.volumes, formValues.intervalLength, formValues.AHT, formValues.serviceLevel, formValues.ASA, formValues.occupancy, formValues.shrinkage)
        setEmployee(FTE)
        setCalculated(true)


    }

    const handleInputChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }



    return (
        <div className="input-overlay">
            <div className="input-container">
                <form className="input-form" onSubmit={handleSubmit}>
                    <label for="volumes">Çağrı Hacimi</label>
                    <input type="text" id="volumes" name="volumes" onChange={handleInputChange}></input>
                    <label for="intervalLength">Interval Uzunluğu (saniye cinsinden)</label>
                    <input type="text" id="intervalLength" name="intervalLength" onChange={handleInputChange}></input>
                    <label for="AHT">AHT</label>
                    <input type="text" id="AHT" name="AHT" onChange={handleInputChange}></input>
                    <label for="serviceLevel">Hedef Servis Seviyesi (Ondalık; 0.8 gibi)</label>
                    <input type="text" id="serviceLevel" name="serviceLevel" onChange={handleInputChange}></input>
                    <label for="ASA">Hedef ASA</label>
                    <input type="text" id="ASA" name="ASA" onChange={handleInputChange}></input>
                    <label for="occupancy">Maksimum Occupancy (Doluluk)</label>
                    <input type="text" id="occupancy" name="occupancy" onChange={handleInputChange}></input>
                    <label for="shrinkage">Shrinkage (Ondalık; 0.14 gibi)</label>
                    <input type="text" id="shrinkage" name="shrinkage" onChange={handleInputChange}></input>
                    <button type="submit">Hesapla!</button>
                    {calculated ? <div>Gereken agent {employee}</div> : null}
                </form>

            </div>
        </div>

    )
}

export default Input