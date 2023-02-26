import React from "react"

const SideButtonExperience = ({
  category,
  jobsSorted,
  education,
  volunteer,
  valueJobs,
  valueEducation,
  valueVolunteer,
  setValueJobs,
  setValueEducation,
  setValueVolunteer,
}) => {
  return (
    <div className="btn-container">
      {category === "experience"
        ? jobsSorted.map((job, index) => {
            return (
              <button
                key={job.jobOrder}
                onClick={() => setValueJobs(index)}
                className={`job-btn ${index === valueJobs && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })
        : null}
      {category === "education"
        ? education.map((coll, index) => {
            return (
              <button
                key={coll.title}
                onClick={() => setValueEducation(index)}
                className={`job-btn ${
                  index === valueEducation && "active-btn"
                }`}
              >
                {coll.title}
              </button>
            )
          })
        : null}
      {category === "volunteering"
        ? volunteer.map((vol, index) => {
            return (
              <button
                key={vol.eventTitle}
                onClick={() => setValueVolunteer(index)}
                className={`job-btn ${
                  index === valueVolunteer && "active-btn"
                }`}
              >
                {vol.eventTitle}
              </button>
            )
          })
        : null}
    </div>
  )
}

export default SideButtonExperience
