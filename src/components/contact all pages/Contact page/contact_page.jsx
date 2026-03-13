import React from "react";
import "./contact_page.css";
import Contactform from "../contact_form/contact_form";
import ContactCardData from "./contact_data";
import { useEffect, useState } from "react";

function ContactPage() { 
  const [datas, setData] = useState([]);
  useEffect(() => {
    setData(ContactCardData);
  }, []);
  
  return (
    <>
      <div className="contact_page">
        <div className="contact_page_first_section">
          <h1>Get In Touch</h1>
          <p>
            Feel free to reach out if you want to collaborate, discuss a
            project, or just connect.
          </p>
        </div>
        <div className="more_info">
          <p>
            I'm always open to new opportunities, collaborations, and
            conversations related to web development and technology.
          </p>
          <p>
            Whether you want to discuss a project, share an idea, or simply
            connect, feel free to reach out-l'ill do my best to respond as soon
            as possible.
          </p>
        </div>
        <h2 className="GetInTouch">Get in touch</h2>
        <div className="ContactPageCardForm">
          <div className="contactPageCards">
            <div className="div_card_container">
{datas.map((data) => (
  <div key={data.id} className="card_body">
    <h2 className="card_heading">{data.title}</h2>

    <p className="card_discription">{data.text}</p>

    <input
      type="button"
      className="card_more_button"
      value={data.buttontext}
      onClick={() => window.open(data.url, "_blank")}
    />
  </div>
))}
            </div>
          </div>
        </div>

        <Contactform />

        <div className="ContactPageBuilding">
          <h2>Let's Build Something Together</h2>
          <p>
            I'm currently leaning and building web development projects. If you
            have an idea
          </p>
          <p>
            opportunity, or collaboraton in mind. I would be happy to connect
            and work together.
          </p>
          <input
            className="ContactPageBuildingButton"
            type="button"
            value="View My Projects"
          />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
