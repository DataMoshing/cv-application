export default function EducationInfo({ degree, onDegreeChange, college, onCollegeChange, edStartDate, onEdStartChange, edEndDate, onEdEndChange }) {
    return (
        <>
            <form>
                <h1>Education</h1>
                <label htmlFor="degree">
                    <span className="label-text">Degree: </span>
                </label>
                <input type="text"
                    value={degree}
                    onChange={onDegreeChange}
                    id="degree"
                    name="degree"
                />
                <label htmlFor="college">
                    <span className="label-text">College / University: </span>
                </label>
                <input type="text"
                    value={college}
                    onChange={onCollegeChange}
                    id="college"
                    name="college"
                />
                <label htmlFor="ed-start-date">
                    <span className="label-text">Start date:  </span>
                </label>
                <input type="text" placeholder="mm / yyyy"
                    value={edStartDate}
                    onChange={onEdStartChange}
                    id="ed-start-date"
                    name="edStartDate"
                />
                <label htmlFor="ed-end-date">
                    <span className="label-text">End date:  </span>
                </label>
                <input type="text" placeholder="mm / yyyy"
                    value={edEndDate}
                    id="ed-end-date"
                    onChange={onEdEndChange}
                    name="edEndDate" />
            </form>
        </>
    )
}