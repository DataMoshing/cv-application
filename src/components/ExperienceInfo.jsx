export default function WorkExperience({ company, onCompanyChange, title, onTitleChange, workStartDate, onWorkStartDateChange, workEndDate, onWorkEndDateChange, responsibilities, onRespChange }) {
    return (
        <form>
            <h1>Work Experience</h1>
            <label htmlFor="title">
                <span className="label-text">Title / Position:  </span>
            </label>
            <input type="text"
                value={title}
                onChange={onTitleChange}
                id="title"
                name="title"
            />
            <label htmlFor="company">
                <span className="label-text">Company: </span>
            </label>
            <input type="text"
                value={company}
                onChange={onCompanyChange}
                id="company"
                name="company"
            />
            <label htmlFor="work-start-date">
                <span className="label-text">Start date:  </span>
            </label>
            <input type="text"
                placeholder="mm / yyyy"
                value={workStartDate}
                onChange={onWorkStartDateChange}
                id="work-start-date"
                name="workStartDate"
            />
            <label htmlFor="word-end-date">
                <span className="label-text">End date:  </span>
            </label>
            <input type="text"
                value={workEndDate}
                placeholder="mm / yyyy"
                onChange={onWorkEndDateChange}
                id="work-end-date"
                name="workEndDate"
            />
            <label htmlFor="cv-responsibilities">
                <span className="label-text">Responsibilities:  </span>
            </label>
            <textarea className="resp-textarea"
                value={responsibilities}
                onChange={onRespChange}
                id="cv-responsibilities"
                name="responsibilities"
            ></textarea>
        </form>
    )
}