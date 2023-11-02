export default function EducationInfo({ degree, onDegreeChange, college, onCollegeChange, edStartDate, onEdStartChange, edEndDate, onEdEndChange }) {
    return (
        <>
            <form>
                <h1>Education</h1>
                <span className="label-text">Degree: </span>
                <input type="text"
                    value={degree} onChange={onDegreeChange} name="degree"
                />
                <span className="label-text">College / University: </span>
                <input type="text"
                    value={college} onChange={onCollegeChange} name="college"
                />
                <span className="label-text">Start date:  </span>
                <input type="text" placeholder="mm / yyyy"
                    value={edStartDate} onChange={onEdStartChange} name="edStartDate"
                />
                <span className="label-text">End date:  </span>
                <input type="text" placeholder="mm / yyyy"
                    value={edEndDate} onChange={onEdEndChange} name="edEndDate" />
            </form>
        </>
    )
}