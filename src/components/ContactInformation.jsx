export default function GeneralInfo() {
    return (
        <ContactInformation />
    )
}

function ContactInformation() {
    return (
        <form>
            <h2>Name</h2>
            <input type="text" placeholder="First Name" />
            <br />
            <input type="text" placeholder="Last Name" />
            <h2>Email</h2>
            <input type="email" placeholder="Enter email" />
            <h2>Phone number</h2>
            <input type="tel" placeholder="Enter phone number" />
            <h2>Address</h2>
            <input type="text" placeholder="City" />
        </form>
    )
}