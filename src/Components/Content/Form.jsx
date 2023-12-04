import React, { useState } from "react";

function Form() {
    const [surNameValue, setSurNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [ageValue, setAgeValue] = useState("");
    const [adressValue, setAdressValue] = useState("");
    const [zippCodeValue, setZippCodeValue] = useState("");
    const [selectedOption, setSelectedOption] = useState("option1");
    const [isChecked, setIsChecked] = useState(false);
    const [messageValue, setMessageValue] = useState('')
    const [timeOfDay, setTimeOfDay] = useState({
        morning: true,
        afternoon: false,
        evening: false,
    });

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);

    };
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleTimeOfDayChange = (time) => {
        setTimeOfDay((prevTimeOfDay) => ({
            ...prevTimeOfDay,
            [time]: !prevTimeOfDay[time],
        }));
    };



    return (
        <>
            <fieldset className="form-order-fruit">
                <form className="form-label">
                    <label className="label" htmlFor="form-surname">
                        Voornaam:
                        <input
                            className='input'
                            type="text"
                            id="form-surname"
                            name="surname"
                            value={surNameValue}
                            placeholder="Je voornaam"
                            onChange={(e) => setSurNameValue(e.target.value)}
                        />
                    </label>
                    <label className="label" htmlFor="form-lastname">
                        Achternaam:
                        <input
                            className='input'
                            type="text"
                            id="form-lastname"
                            name="lastname"
                            value={lastNameValue}
                            placeholder="Je achternaam"
                            onChange={(e) => setLastNameValue(e.target.value)}
                        />
                    </label>
                    <label className="label" htmlFor="form-age">
                        Leeftijd:
                        <input
                            className='input'
                            type="text"
                            id="form-age"
                            name="lastage"
                            value={ageValue}
                            placeholder="Je leeftijd"
                            onChange={(e) => setAgeValue(e.target.value)}
                        />
                    </label>
                    <label className="label" htmlFor="form-adress">
                        Je adres:
                        <input
                            className='input'
                            type="text"
                            id="form-adress"
                            name="adress"
                            value={adressValue}
                            placeholder="Je adres"
                            onChange={(e) => setAdressValue(e.target.value)}
                        />
                    </label>
                    <label className="label" htmlFor="form-zippcode">
                        Postcode:
                        <input
                            className='input'
                            type="text"
                            id="form-zippcode"
                            name="zippcode"
                            value={zippCodeValue}
                            placeholder="Je postcode"
                            onChange={(e) => setZippCodeValue(e.target.value)}
                        />
                    </label>
                    <label className="label-dropdown" htmlFor="form-dropdown">
                        Bezorgfrequentie:
                        <select
                            id="form-dropdown"
                            name="dropdown"
                            value={selectedOption}
                            onChange={handleDropdownChange}
                        >
                            <option value="option1">Dagelijks</option>
                            <option value="option2">Wekelijks</option>
                            <option value="option3">Twee wekelijks</option>
                            <option value="option3">Maandelijks</option>
                        </select>
                    </label>
                    <label className="label-checkbox" htmlFor="time-of-day-checkbox">
                        Kies je bezorgtijdstip:
                        <div>
                            <input
                                className='input'
                                type="checkbox"
                                id="morning-checkbox"
                                name="morning"
                                checked={timeOfDay.morning}
                                onChange={() => handleTimeOfDayChange("morning")}
                            />
                            <label htmlFor="morning-checkbox">Ochtend</label>
                        </div>

                        <div>
                            <input
                                className='input'
                                type="checkbox"
                                id="afternoon-checkbox"
                                name="afternoon"
                                checked={timeOfDay.afternoon}
                                onChange={() => handleTimeOfDayChange("afternoon")}
                            />
                            <label htmlFor="afternoon-checkbox">Middag</label>
                        </div>
                        <div>
                            <input
                                className='input'
                                type="checkbox"
                                id="evening-checkbox"
                                name="evening"
                                checked={timeOfDay.evening}
                                onChange={() => handleTimeOfDayChange("evening")}
                            />
                            <label htmlFor="evening-checkbox">Avond</label>
                        </div>
                    </label>
                    <label className="label" htmlFor="form-message">
                        Bericht:
                        <textarea
                            rows="4"
                            cols="40"
                            id="form-message"
                            name="message"
                            value={messageValue}
                            placeholder="Stuur een berichtje"
                            onChange={(e) => setMessageValue(e.target.value)}
                        />
                    </label>

                    <label className="label-check" htmlFor="form-checkbox">
                        <input
                            type="checkbox"
                            id="form-checkbox"
                            name="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        Akkoord met de voorwaarden
                    </label>

                    <button className='button'>Bestellen</button>
                </form>
            </fieldset>
        </>
    );
}

export default Form;