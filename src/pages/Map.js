import React, {useEffect, useState} from 'react'
import axios from 'axios'

function Map() {

  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get("https://asia-southeast1-monday-club-48189.cloudfunctions.net/get-map-test",
    {
      method: "GET",
      headers: {
        "X-api-Key": "SEBGO59guINkCWHjIbfF6eydjuMMo6IljUpTTEmnetU",
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      }
    }
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log("responseData : ", responseData.map);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
      <div>
        <h3>Hook fetch data by id</h3>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <ul>
          <li key={post.id}>{post.title}</li>
        </ul>
      </div>
  )
}
  )
}
export default Map;