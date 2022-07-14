import React from 'react'
import "./MessageComp.css";
import PhoneIcon from "@material-ui/icons/Phone";
import CloseIcon from "@material-ui/icons/Close";
import VideocamIcon from "@material-ui/icons/Videocam";
import MinimizeIcon from "@material-ui/icons/Minimize";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import GifIcon from "@material-ui/icons/Gif";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import SendIcon from "@material-ui/icons/Send";
import { useState } from 'react';
import GiphyData from './GiphyData';

function MesaageCom() {
  const [state, setState] = useState(false);
  const [text, setText] = useState("Welcome click on gif for gif search");
  let Giphy_data = JSON.parse(localStorage.getItem("giphy")) || [];
  console.log("giphy", Giphy_data);

  const handleChange = (e) => {
    setText(e.target.value);
  }
    return (
      <div className="container">
        <div className="Header">
          <div className="header-component-left">
            <div className="header-image">
              <img src="./user.png" alt="" />
            </div>
            <div className="header-name">
              <p>Sushil</p>
            </div>
          </div>
          <div className="header-right">
            <div className="phone">
              <PhoneIcon style={{ width: "38px", height: "50px" }} />
            </div>
            <div className="phone">
              <VideocamIcon style={{ width: "38px", height: "50px" }} />
            </div>
            <div className="phone">
              <MinimizeIcon style={{ width: "38px", height: "50px" }} />
            </div>
            <div className="phone">
              <CloseIcon style={{ width: "38px", height: "50px" }} />
            </div>
          </div>
        </div>

        <div className="Middle-container">
          {
            Giphy_data.map((el) => (
              <div className='append-middle-image'>
                <img src={el.url} alt="" />
              </div>
            ))
          }
          <p
            style={{
              fontsize: "1.2rem",
              textAlign: "center",
              FontFace:"cover"
            }}>{text}</p>
        </div>
        <div className="append-data">
          {state ? <GiphyData /> : ""}
        </div>


        <div className="bottom-container">
          <div className="bottom-left">
            <div className="bottom-phone">
              <ControlPointIcon style={{ width: "30px", height: "50px" }} />
            </div>
            <div className="bottom-phone">
              <AddPhotoAlternateIcon
                style={{ width: "30px", height: "50px" }}
              />
            </div>
            <div className="bottom-phone">
              <TagFacesIcon style={{ width: "30px", height: "50px" }} />
            </div>
            <div className="bottom-phone">
              <GifIcon
                style={{ width: "50px", height: "50px" }}
                onClick={() => setState(true)}
              />
            </div>
          </div>
          <div className="bottom-right">
            <div className="bottom-input">
              <input
                type="text"
                placeholder="Enter Message"
                onClick={() => setState(false)}
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div className="bottom-phone">
              <SendIcon
                style={{ width: "38px", height: "30px" }}
              
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default MesaageCom