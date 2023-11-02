import { useState } from "react"
import EducationInfo from "./EducationInfo"
import WorkExperience from "./ExperienceInfo"
import ContactInfo from "./ContactInfo"

export default function Forms() {
    const [info, setInfo] = useState({ firstName: "", lastName: "", email: "", phoneNumber: "", degree: "", college: "", edStartDate: "", edEndDate: "", company: "", title: "", workStartDate: "", workEndDate: "", responsibilities: "" })

    function changeInfo(e) {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    return (
        <div className="main">
            <div className="form-container">
                <ContactInfo firstName={info.firstName} onFirstNameChange={changeInfo} lastName={info.lastName} onLastNameChange={changeInfo} email={info.email} onEmailChange={changeInfo} phoneNumber={info.phoneNumber} onPhoneNumberChange={changeInfo} />

                <EducationInfo degree={info.degree} onDegreeChange={changeInfo} college={info.college} onCollegeChange={changeInfo} edStartDate={info.edStartDate} onEdStartChange={changeInfo} edEndDate={info.edEndDate} onEdEndChange={changeInfo} />

                <WorkExperience />
            </div>
            <div className="resume-container">
                <h1 className="resume-name">{info.firstName}{" "}{info.lastName}</h1>
                <p>{info.email}</p>
                <p>{info.phoneNumber}</p>
                <p>{info.degree}</p>
                <p>{info.college}</p>
                <p>{info.edStartDate}</p>
                <p>{info.edEndDate}</p>
            </div>
        </div>
    )
}
