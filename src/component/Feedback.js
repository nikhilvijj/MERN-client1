import { useState } from "react"

export default function Feedback(){
    const [formData,SubmitFormData] = useState({
        name:"",
        roll:"",
        feedback:""

    })
    const [table,SubmitTable]=useState([])
    function HandleChange(e){
        const {name,value}=e.target;
        SubmitFormData({...formData,[name]:value});
    }
    function handleSubmit(){
        SubmitTable([...table,formData])
        SubmitFormData({
            name:"",
            roll:"",
            feedback:""
        })
    }
    return(
        <div>
            <input type="text"
            name="name"
            value={formData.name}
            onChange={HandleChange}
            placeholder="Name"
            />
             <input type="text"
            name="roll"
            value={formData.roll}
            onChange={HandleChange}
            placeholder="Roll Number"
            />
             <input type="text"
            name="feedback"
            value={formData.feedback}
            onChange={HandleChange}
            placeholder="Your Feedback"
            />
            <button onClick={handleSubmit}>Submit</button>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Roll Number</th>
                    <th>Feedback</th>
                </tr>
                </thead>
                <tbody>
                    {table.map((key,value)=>(
                        <tr>
                        <td>{key.name}</td>
                        <td>{key.roll}</td>
                        <td>{key.feedback}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}