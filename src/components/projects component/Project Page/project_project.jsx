import "./project_page.css";
import Cards from "../../Cards/cards";
function project() {
  const Technologies = [
    {
      name: "HTML/CSS",
      img: "https://imgs.search.brave.com/wLjt9bMfWqAa7nSuz2yehLVIsY1wc2CZShZjr8xgt6E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzIwLzIvaHRtbDUt/bG9nby1wbmdfc2Vl/a2xvZ28tMjA2ODM0/LnBuZw",
    },
    {
      name: "JavaScript",
      img: "https://imgs.search.brave.com/4mPpTNuXrdSfqDrHmvl4x1SzPtUVduRenS_5xN0H7Wg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTEv/MzM2LzM5Ny9zbWFs/bC9qYXZhc2NyaXB0/LXRyYW5zcGFyZW50/LWxvZ28tZnJlZS1w/bmcucG5n",
    },
    {
      name: "React",
      img: "https://imgs.search.brave.com/SP8815zx7oKRZ0A6Ak3zvOZDSzs_YWn6JJfGAqALOuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmE3NGRkMTIyMzM0/M2ZiYzIyMDdkMDAu/cG5n",
    },
    {
      name: "Node.js",
      img: "https://imgs.search.brave.com/BGaQHQqfW7X-I6vKsvPbBnrY-eAe5ws1b7xgHPoHOTM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzI2LzIvbm9kZS1q/cy1sb2dvLXBuZ19z/ZWVrbG9nby0yNjky/NDIucG5n",
    },
    {
      name: "Git",
      img: "https://imgs.search.brave.com/qj79bYp7JLGXabHhrSmz29I9CxM2skCVoVvtJugkF1I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzMzLzIvZ2l0LWxv/Z28tcG5nX3NlZWts/b2dvLTMzNjkxNi5w/bmc",
    },
  ];

  const main_project = [
    {
      title: "weather App",
      img: "https://blogger.googleusercontent.com/img/a/AVvXsEgynAE29VjYbc5JOeTrnJGtU_Rq6YFzza2Lx5xt7NRPlLv1VW0hGZttR_Jl9piWsOo56qqfsIG5pqyjbhFZydQqTqFfuVfVY_SNwC3tMdlAuBZLCTOOcjTN91R1r5pjpCgITS54Qun-MNtJPb_DgbyzYHAbUuetdMuCOzvRgSoxTF7VhvQOFW-RpTK149g",
      discription:
        "A responsive weather application that allows users to search for real-time weather information for any city. The app fetches live weather data using a public API and displays temperature, humidity, wind speed, and weather conditions.",
      BtnValue: "View Live",
      BtnGithub: "View Code",
      GithubRepoLink:"https://github.com/bhardwajsahab101-boop/skyfetch-weather-dashboard01"
    },
    {
      title: "Todo App",
      img: "image.jpg",
      discription:
        "A modern e-commerce frontend interface designed to simulate an online shopping exjerience. The project includes product listings, responsive product cards, and a clean UI design focused on usability. ",
      BtnValue: "View Live",
      BtnGithub: "View Code",
    },
  ];
  return (
    <>
      {/* 

A modern e-commerce frontend interface designed to simulate an online shopping exjerience. The project includes product listings, responsive product cards, and a clean UI design focused on usability.

HTML

CSS

JavaScript

Weather API

React

CSS

JavaScript

View Live

View Code

View Live

View Code */}
      <div className="project_page_caintainer">
        <div className="project_card_caintainer">
          <h2 className="project_main_heading">My projects</h2>
          <p className="project_main_sub_heading">
            Here are some projects l've built while learning web development.
            Each project helped <br /> me improve my skills in frontend
            development, APIs, and building responsive <br /> user interfaces.
          </p>

          <div className="Project_card_container">
            {main_project.map((project, index) => (
              <div className="Project_card" key={index}>
                <img
                  src={project.img}
                  className="Project_page_img"
                  alt={project.title}
                />
                <div className="Project_card_text_content">
                  <h2 className="Project_page_card_title">{project.title}</h2>
                  <p className="Project_page_card_discription">
                    {project.discription}
                  </p>
                  <div className="projectPageButtonDiv">

                <a href={project.GithubRepoLink}><input type="button" className="github" value={project.BtnValue} /></a>
                <input type="button" className="live" value={project.BtnGithub} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Cards />
          <h2 className="Project_skill_cards_heading">
            Technologies I've Worked With
          </h2>
          <div className="Project_skills_tags">
            {Technologies.map((skills, index) => (
              <div className="skills_div">
                <div key={index} className="Project_skills_tag_div">
                  <img 
                    className=" Project_skills_img"
                    src={skills.img}
                    alt="image is here"
                    srcset=""
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default project;
