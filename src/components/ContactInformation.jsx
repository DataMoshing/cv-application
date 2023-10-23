export default function ContactInformation() {
    return (
        <form>
            <h1>Contact</h1>
            <h3>Name</h3>
            <input type="text" placeholder="First Name" />
            <br />
            <br />

            <input type="text" placeholder="Last Name" />
            <h3>Email</h3>
            <input type="email" placeholder="Enter email" />
            <h3>Phone number</h3>
            <input type="tel" placeholder="Enter phone number" />
            <h3>Address</h3>
            <input type="text" placeholder="City" />
        </form>
    )
}