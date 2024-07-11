import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
    const [form, setForm] = useState({
        Name: "",
        Age: "",
        Username: "",
        Password: "",
    });
    const [localDB, setDB] = useState([]);

    function handleSubmit() {
        setDB([...localDB, form]);
        setForm({
            Name: "",
            Age: "",
            Username: "",
            Password: ""
        });
    }

    return (
        <FormContext.Provider value={{ form, setForm, localDB, handleSubmit }}>
            {children}
        </FormContext.Provider>
    );
}

export function useForm() {
    return useContext(FormContext);
}