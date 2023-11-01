// import { useState } from "react"

export default function EducationInfo({ degree, onDegreeChange }) {
    return (
        <>
            <form>
                <h1>Education</h1>
                <input type="text" placeholder="Degree"
                    value={degree} onChange={onDegreeChange} name="degree"
                />
                <input type="text" placeholder="College / University" />
                <h3>Start date</h3>
                <input type="text" placeholder="mm / yyyy" />
                <h3>End date</h3>
                <input type="text" placeholder="mm / yyyy" />
            </form>
        </>
    )
}