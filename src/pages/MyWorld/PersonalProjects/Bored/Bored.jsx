import React, { useState } from "react";
import axios from "axios";
import './bored.scss'
import { CircularProgress } from "@mui/material";

const Bored = () => {

  const [formData, setFormData] = useState({
    type: "",
    participants: "",
  });
  const [loading, setLoading] = useState(false);
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { type, participants } = formData;

   
    const options = {
      method: "GET",
      url: `https://bored-api.appbrewery.com/filter?`,
      params: {
        ...(type && { type }), 
        ...(participants && { participants }), 
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "boredombuster.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLoading(true);
      setActivity(response.data); 
      setError(""); 
    } catch (err) {
      console.error(err);
      setError("Failed to fetch activities. Please try again later.");
      setActivity(null); 
    }
  };

  return (
    <div className="container">
      <h1>Let's find something for you to do ✌️</h1>
      
      <form onSubmit={handleSubmit} className="form">
      <section id="cards" className="cards">
        {activity && (
          <article className="card-item">
            <h2 className="card-activity">{activity.activity}</h2>
            <div className="card-info">
              <span className="card-type">Type: {activity.type || "N/A"}</span>
              <span className="card-participants">
                Participants: {activity.participants || "N/A"}
              </span>
            </div>
          </article>
        )}
        {error && <div className="tag-error">{error}</div>}        
        {loading && <CircularProgress/>}        
      </section>
        <select
          name="type"
          className="form-input"
          value={formData.type}
          onChange={handleInputChange}
        >
          <option value="">Random type</option>
          <option value="education">Education</option>
          <option value="charity">Charity</option>
          <option value="recreational">Recreational</option>
          <option value="relaxation">Relaxation</option>
          <option value="busywork">Busywork</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="music">Music</option>
        </select>

        <select
          name="participants"
          className="form-input"
          value={formData.participants}
          onChange={handleInputChange}
        >
          <option value="">Any number of people</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <button type="submit" className="addButton">
          Go
        </button>
      </form>

      
    </div>
  );
};

export default Bored;
