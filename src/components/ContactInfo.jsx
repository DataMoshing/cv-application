import { useState } from "react"

export default function ContactInfo() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    return (
        <>
            <form>
                <label htmlFor="first-name">
                    <span className="label-text">First name: </span>
                </label>
                <input type="text" className="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="last-name">
                    <span className="label-text">Last name: </span>
                </label>
                <input type="text" className="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <label htmlFor="email">
                    <span className="label-text">Email: </span>
                </label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="phone-number">
                    <span className="label-text">Phone number: </span>
                </label>
                <input type="tel" />
                <label htmlFor="location">
                    <span className="label-text">Location: </span>
                </label>
                <input type="text" />
            </form>
            <div className="resume-container">
                <h1>{firstName} {lastName}</h1>
                <span>{email}</span>
            </div>
        </>
    )
}
