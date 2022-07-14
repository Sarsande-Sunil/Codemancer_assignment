import React from 'react';
import axios from "axios";
import { useState } from 'react';
import "./Giphy.css"
function GiphyData({Url}) {
  const [input, setInput] = useState([]);
  function SetUrlData(Url) {
    let test = localStorage.getItem("giphy");
    let arr = [];
    if (test) {
      arr = JSON.parse(test);
    }
    arr.push({ url: Url });
    console.log("arr", arr)
    localStorage.setItem("giphy", JSON.stringify(arr));
  }
  
  const handleChange = async (e) => {
      console.log(e.target.value);
      const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=sZ0jpvO9IaupUuZ9GLI8UlZIraQnwuyL&q=${e.target.value}&limit=20&offset=0&rating=g&lang=en`
    );
   setInput(res.data.data);      
  }
  console.log(input);
  
  return (
    <div className="gipphy-container">
      <div className="input-gipphy">
        <input type="text" onChange={(e) => handleChange(e)}
          placeholder="Type something here" />
      </div>
      <div className="image-gipphy">
        {input.map((el) => (
          <div className="images-div">
            <img
              src={el.images.fixed_width.url}
              key={el.id}
              onClick={() => SetUrlData(el.images.fixed_width.url)}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GiphyData