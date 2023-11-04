export default function ContactInfo({ firstName, onFirstNameChange, lastName, onLastNameChange, email, onEmailChange, phoneNumber, onPhoneNumberChange }) {
    return (
        <form>
            <h1>Contact</h1>
            <label htmlFor="first-name">
                <span className="label-text">First name: </span>
            </label>
            <input type="text" className="firstName" id="first-name"
                name="firstName"
                value={firstName}
                onChange={onFirstNameChange}
            />
            <label htmlFor="last-name">
                <span className="label-text">Last name: </span>
            </label>
            <input type="text" className="lastName"
                id="last-name"
                name="lastName"
                value={lastName}
                onChange={onLastNameChange}
            />
            <label htmlFor="email">
                <span className="label-text">Email: </span>
            </label>
            <input type="email" className="email"
                id="email"
                name="email"
                value={email}
                onChange={onEmailChange} />
            <label htmlFor="phone-number">
                <span className="label-text">Phone number: </span>
            </label>
            <input type="tel"
                className="phone-number"
                id="phone-number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onPhoneNumberChange}
            />
        </form>
    )
}