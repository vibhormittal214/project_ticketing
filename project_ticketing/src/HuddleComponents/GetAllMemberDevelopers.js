import { useState, useEffect } from 'react';
import { GET_ALL_MEMBER_DEVELOPER_URL } from '../env.js';
export const GetAllMemberDevelopers = (props) => {
  const [developers, setAllDevelopers] = useState(null);

  // + adding the use
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },

    };
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch(GET_ALL_MEMBER_DEVELOPER_URL, requestOptions);
      const apiResponseData = await response.json();
      //console.log(apiResponseData);//remove this after use
      setAllDevelopers(apiResponseData);
    }
  }, []);
  let style = {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    marginTop: "30px",
    width: "70%"
  }
  return (
    props.bucketNameDropdown === true ? <>
      {developers && (
        <>
          {developers.map((developer, index) => (
            <option key={index} value={developer.developer_id}>{developer.developer_name}</option>
          ))}
        </>
      )}
    </> : <div>
      {developers && (
        <div className="projects">

          {developers.map((developer, index) => (
            <div style={style} className="card text-center" key={index}>
              <button style={{ backgroundColor: "teal" }} className="card-body">
                <p style={{ color: "white" }} className="card-text" onClick={() => { props.showAllTicketOfDev(developer.developer_id) }}>
                  {developer.developer_name}
                </p>

              </button>
            </div>

          ))}

        </div>
      )}
    </div>

  )
}