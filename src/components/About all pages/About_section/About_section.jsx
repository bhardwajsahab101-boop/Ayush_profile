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

        <ul className=''> 
            <li className='about_section_list_item'>Hello! I'm Ayush Sharma, a B.Tech student with a strong interest in web development and modern technologies.</li>
            <li className='about_section_list_item'>My journey into programming started with curiosity about how websites and applications work. Over time, that curiosity turned into a passion for building interactive and user-friendly web applications.</li>
            <li className='about_section_list_item'>I enjoy learning new technologies and applying them to practical projects that help improve my development skills. Currently, I focus mainly on frontend development while also exploring backend technologies to become a full-stack developer.</li>
            <li className='about_section_list_item'>I believe in continuous learning and improving through building projects, solving problems, and experimenting with new ideas.</li>
        </ul>
        </div>
        <div className='About_section_right_image'>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgChBzh9Vos-EC-V-zHK95vPdQxnJd1i8a_cTnsTSuzKxITJ8edhp8l62O0sTIMbIxIRacCnAuEua5aEGc2LdIP4hcmOc8Bih1YqOOrJe7ntsLm0Ay-owQNi_0_al1z1avxn3tWu7kj-GbDsBmqSt_X1qE2wiCjcorjNFVGONdkuMFQUimlwyibFxohvCY/s320/WhatsApp%20Image%202026-02-12%20at%2021.37.50.jpeg" alt="" srcset="" />
        </div>
        </div>
        <div className='about_section_other_cards'>
    {/* What I Enjoy
• Building responsive and interactive web interfaces
• Learning new technologies and frameworks
• Solving coding problems
• Turning ideas into real applications
My Current Focus
• Improving JavaScript and React skills
• Building real-world web projects
• Learning API integration
• Exploring backend development */}
    
    </div>

    </div>
    </div>
  )
}

export default About_section
