
import './App.css'

function App() {

  const name = "Radhey Bhaiya ";
  const profession= "FUll Stack Developer";
  const projects = [
    {
      title : "Project One",
      description : "A portFoliyo web application built using Node JS and React JS ",
      link : "##"
    },
    {
      title : "Project Two",
      description : "An ecommerce web site build using Spring Boot framework in java ",
      link : "##"
    }
  ]

  return (
    <>
    <div className="App" >
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id= 'about' className='about-Section'>
          <h2>About me</h2>
          <p>Hello! I am {name}, a passionate {profession}. A "full stack developer" is a software engineer proficient in both the front-end and back-end development of a website or application, meaning they can build the user interface that users see and interact with, as well as the server-side logic that processes data behind the scenes, allowing them to handle the entire development process from start to finish with a comprehensive understanding of the whole system.</p>
      </section>

      {/* Projects Section */}
      <section id='projects' className='projects-section'>
         <h2>Projects</h2>
         <div className='projects-list'>
           {projects.map((project,index)=> (
             <div key={index} className='project-item' >
               <h3>{project.title}</h3>
               <h3>{project.description}</h3>
               <a href={project.link} target= '_blank' rel="noopener no proferrer">View Project</a>
             </div>
            ))}
         </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='contact-section'>
        <h2> Contact Me </h2>
        <p>If you would lik to get in touch,feel free to contact me on email at <a href='mailto:ravi.kant@entics.com'>ravi.kant@entics.com</a> .</p>
      </section>

      {/*Footer Section*/}
      <section id ='footer'className='footer-section'>
        <footer>
          <p>2025.All Right Reserved</p>
        </footer>

      </section>

    </div>
    </>
  )
  
}

export default App
