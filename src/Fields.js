import React from "react";
import { useForm } from "./FormContext";

function Fields(props) {
    const { form, setForm } = useForm();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.fieldName}>
                {props.fieldName}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                name={props.fieldName}
                type={props.fieldType}
                value={form[props.fieldName]}
                onChange={handleChange}
                placeholder={`Enter your ${props.fieldName}`}
            />
        </div>
    );
}

export default Fields;