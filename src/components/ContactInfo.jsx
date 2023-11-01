import { useState } from "react"
import EducationInfo from "./EducationInfo"
import WorkExperience from "./ExperienceInfo"

export default function ContactInfo() {
    const [info, setInfo] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", degree: "" })

    function changeInfo(e) {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    return (
        <>
            <div className="form-container">
                <form>
                    <label htmlFor="first-name">
                        <span className="label-text">First name: </span>
                    </label>
                    <input type="text" className="firstName"
                        name="firstName"
                        value={info.firstName}
                        onChange={changeInfo}
                    />
                    <label htmlFor="last-name">
                        <span className="label-text">Last name: </span>
                    </label>
                    <input type="text" className="lastName" name="lastName"
                        value={info.lastName}
                        onChange={changeInfo}
                    />
                    <label htmlFor="email">
                        <span className="label-text">Email: </span>
                    </label>
                    <input type="email" className="email" name="email"
                        value={info.email}
                        onChange={changeInfo} />
                    <label htmlFor="phone-number">
                        <span className="label-text">Phone number: </span>
                    </label>
                    <input type="tel"
                        className="phone-number"
                        name="phoneNumber"
                        value={info.phoneNumber}
                        onChange={changeInfo}
                    />
                </form>
                <EducationInfo degree={info.degree} onDegreeChange={changeInfo}
                    name="degree" />
                <WorkExperience />
                <div className="resume-container">
                    <h1 className="resume-name">{info.firstName}{" "}{info.lastName}</h1>
                    <span>{info.email}</span>
                    <br></br>
                    <br></br>
                    <span>{info.phoneNumber}</span>
                    <p>{info.degree}</p>
                </div>
            </div>
        </>
    )
}
