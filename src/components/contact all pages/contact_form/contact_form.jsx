import "./contact_form.css"
function contact_form() {
  return (
    <>
      <div className="contact_form_container"> 

        <h2 className="contact_form_heading">Contact Me</h2>
        <form className="contact_form" method="post" action={"http://localhost:8000/register"}>
          <input type="text" name="name" placeholder="Your Name" className="contact_form_input" />
          <input type="email" name="email" placeholder="Your Email" className="contact_form_input" />
          <textarea placeholder="Your Message" name="message" className="contact_form_textarea"></textarea>
          <button type="submit"  className="contact_form_button">Send Message</button>
        </form>
      </div> 
      
    </>
  )
}   

export default contact_form
