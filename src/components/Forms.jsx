import { useState } from "react"
import EducationInfo from "./EducationInfo"
import WorkExperience from "./ExperienceInfo"
import ContactInfo from "./ContactInfo"
import Skills from "./Skills"

export default function Forms() {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        degree: "", college: "",
        edStartDate: "",
        edEndDate: "",
        company: "",
        title: "",
        workStartDate: "",
        workEndDate: "",
        responsibilities: "",
        skills: ""
    })

    const [skills, setSkills] = useState([])

    function changeInfo(e) {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    function addSkill(skill) {
        setSkills([...skills, skill])
    }

    return (
        <div className="main">
            <div className="form-container">
                <ContactInfo
                    firstName={info.firstName}
                    onFirstNameChange={changeInfo}
                    lastName={info.lastName}
                    onLastNameChange={changeInfo}
                    email={info.email}
                    onEmailChange={changeInfo}
                    phoneNumber={info.phoneNumber} onPhoneNumberChange={changeInfo} />

                <WorkExperience
                    title={info.title}
                    onTitleChange={changeInfo}
                    company={info.company}
                    onCompanyChange={changeInfo}
                    workStartDate={info.workStartDate}
                    onWorkStartDateChange={changeInfo}
                    workEndDate={info.workEndDate} onWorkEndDateChange={changeInfo}
                    responsibilities={info.responsibilities}
                    onRespChange={changeInfo}
                />

                <EducationInfo
                    degree={info.degree}
                    onDegreeChange={changeInfo}
                    college={info.college}
                    onCollegeChange={changeInfo}
                    edStartDate={info.edStartDate}
                    onEdStartChange={changeInfo}
                    edEndDate={info.edEndDate}
                    onEdEndChange={changeInfo} />

                <Skills
                    addSkill={addSkill}
                />
            </div>
            <div className="main-container">
                <div className="resume-container">
                    <section className="contact-info">
                        <h1 className="resume-name">{info.firstName}{" "}{info.lastName}</h1>
                        <p className="cv-email">{info.email}</p>
                        <p className="cv-phone">{info.phoneNumber}</p>
                    </section>
                    <h2 className="work-header">Work Experience</h2>
                    <span className="work-exp-border"></span>
                    <section className="work-info">
                        <h2 className="work-title">{info.title}</h2>
                        <p className="cv-company">{info.company}{" "}{info.workStartDate}{" -"} {info.workEndDate}</p>
                        <p className="cv-responsibilities">{info.responsibilities}</p>
                    </section>
                    <h2>Education</h2>
                    <span className="education-info-border"></span>
                    <section className="education-info">
                        <h2 className="cv-degree">{info.degree}</h2>
                        <p className="cv-college">{info.college}</p>
                        <p className="cv-ed-start-date">{info.edStartDate}{" -"} {info.edEndDate}</p>
                    </section>
                    <h2>Skills</h2>
                    <span className="skills-info-border"></span>
                    <section className="skills-info">
                        {skills.map((skill) =>
                            <ul>
                                <li>{skill}</li>
                            </ul>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}
