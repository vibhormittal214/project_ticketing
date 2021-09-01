import { useState, useEffect } from 'react';
import { GET_ALL_PROJECT_URL } from '../env.js';
export const GetAllProject = (props) => {
  const [projects, setAllProjects] = useState(null);

  // + adding the use
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

    };
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(GET_ALL_PROJECT_URL, requestOptions);
      const apiResponseData = await response.json();
      //console.log(apiResponseData);//remove this after use
      setAllProjects(apiResponseData);
    }
  }, []);
  let style = {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    marginTop: "20px",
    width: "70%"
  }
  return (
    <>
      {props.bucketNameDropdown === "true" &&
        <div>
          {projects && (
            <li className="nav-item dropdown">
              <div style={{ cursor: "pointer" }} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Project Bucket
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {projects.map((individualProject, index) => (
                  <li key={index}><div style={{ cursor: "pointer" }} className="dropdown-item" onClick={() => { props.showAllTicketOfBucket(individualProject.bucket_id) }}>{individualProject.bucket_name}</div></li>
                ))}
              </ul></li>
          )}
        </div>
      }
      {props.bucketNameDropdown === true &&
        <>
          {projects && (
            <>
              {projects.map((individualProject, index) => (
                <option key={index} value={individualProject.bucket_id}>{individualProject.bucket_name}</option>
              ))}
            </>
          )}
        </>
      }
      {props.bucketNameDropdown === undefined && <div>
        {projects && (
          <div className="projects">
            <ul className="list-group list-group-flush">
              {projects.map((individualProject, index) => (

                <div style={style} className="card text-center" key={index}>
                  <button style={{ backgroundColor: "teal" }} className="card-body">
                    <p style={{ color: "white" }} className="card-text" key={index} onClick={() => { props.showAllTicketOfBucket(individualProject.bucket_id) }}>
                      {individualProject.bucket_name}
                    </p>

                  </button>
                </div>

              ))}
            </ul>

          </div>
        )}
      </div>}
    </>
  )
}