import { useState } from "react"

export default function Skills({ addSkill }) {
    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        addSkill(value)

        setValue("")
    }

    return (
        <form className="skillsForm" onSubmit={handleSubmit}>
            <h1>Skills</h1>
            <input type="text" className="skills-input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="skills"
                name="skills"
            >
            </input>
            <button type="submit">Add Skill</button>
        </form>
    )
}