import React from 'react'
import "./About_section.css"
function About_section() {
  return (
    <div>
      {/* Hello! I'm Ayush Sharma, a B.Tech student with a strong interest in web development and modern technologies.
 
My journey into programming started with curiosity about how websites and applications work. Over time, that curiosity turned into a passion for building interactive and user-friendly web applications.

I enjoy learning new technologies and applying them to practical projects that help improve my development skills. Currently, I focus mainly on frontend development while also exploring backend technologies to become a full-stack developer.

I believe in continuous learning and improving through building projects, solving problems, and experimenting with new ideas. */}
    <div className='about_section_container'>
    <h1 className='about_section_heading'>About Me</h1>
    <div className='about_section_content'>
        <div className='card_about_section'>

        <ul className='about_text_ul' > 
            <li className='about_section_list_item'>Hello! I'm Ayush Sharma, a B.Tech student with a strong interest in web development and modern technologies.</li>
            <li className='about_section_list_item'>My journey into programming started with curiosity about how websites and applications work. Over time, that curiosity turned into a passion for building interactive and user-friendly web applications.</li>
            <li className='about_section_list_item'>I enjoy learning new technologies and applying them to practical projects that help improve my development skills. Currently, I focus mainly on frontend development while also exploring backend technologies to become a full-stack developer.</li>
            <li className='about_section_list_item'>I believe in continuous learning and improving through building projects, solving problems, and experimenting with new ideas.</li>
        </ul>
        </div>

        </div>
        <div className='about_section_other_cards'>

    
    </div>

    </div>
    </div>
  )
}

export default About_section
