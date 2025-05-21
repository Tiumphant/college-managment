import { Component } from "react"; 
import Carousel from 'react-bootstrap/Carousel'; 
import image1 from './image1.jpg'; 
import image2 from './image2.jpg'; 
import image3 from './image3.jpg'; 
import './style.css'; 
import about1 from './about1.jpg';  
import about2 from './about2.jpg'; 
import about3 from './about3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import imageb1 from './imageb1.jpeg'
import imageb2 from './imageb2.jpeg'
import libimg from './libimg.jpg'
import imageb4 from './imageb4.jpg'
import imageb5 from './imageb5.jpeg'
import imageb6 from './imageb6.jpeg'
const images = [
  { src: imageb1, text: "Bus  Facilities" },
  { src: imageb2, text: "Classrooms" },
  { src: libimg, text: "Library" },
  { src: imageb4, text: "Lab" },
  { src: imageb5, text: "Traning and placement" },
  { src: imageb6, text: "Campus vibrant" },
];
class Home extends Component {
  
    render() {
        return (
            <>
                <section>
                    
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100 h-50" src={image1} alt="First slide" />
                            <Carousel.Caption>
                                <h3>Education</h3>
                                <p>A small description here.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 h-50" src={image2} alt="Second slide" />
                            <Carousel.Caption>
                                <h3>College Background</h3>
                                <p>Some description.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100 h-50" src={image3} alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>

                <b><h2 className="main">About Us</h2></b> 
                <section className="about-section">
               
    <div className="about-content">
    
        <p>
         Our university is committed to providing a high-quality education and fostering an environment of innovation and creativity. 
         Established in 2025, we offer a wide range of programs in various fields, including arts, science, engineering, and business.
         It has catered to 1200+ placements with the assistance of 120+ faculty members. The institute holds skill-based learning to higher prominence and poses this as the secret to the invincible journey.
         Bansal College of Engineering Mandideep strives to serve the students with top-notch facilities, impressive infrastructural norms, and a massive track record of placements.</p>
    </div>

    <Carousel className="about-carousel">
        <Carousel.Item>
            <img className="d-block w-100" src={about1} alt="First slide" />
            <Carousel.Caption>
                <h3>Education</h3>
                <p>A small description here.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={about2} alt="Second slide" />
            <Carousel.Caption>
                <h3>College Background</h3>
                <p>Some description.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={about3} alt="Third slide" />
            <Carousel.Caption>
                <h3>College Background</h3>
                <p>Some description here.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</section>
    <section className="courses">
      <h2 className="main">Depatment</h2>
        <div className="course-list">
         <div className="course-item">
            <h3>Computer Science</h3>
            <p>Learn the fundamentals of computer programming and software development.</p>
                        </div>
                        <div className="course-item">
                            <h3>Business Administration</h3>
                            <p>Understand the core principles of management, marketing, and entrepreneurship.</p>
                        </div>
                        <div className="course-item">
                            <h3>Mechanical Engineering</h3>
                            <p>Get hands-on experience with designing, analyzing, and manufacturing mechanical systems.</p>
                        </div>
                        <div className="course-item">
                            <h3>Biology</h3>
                            <p>Explore the wonders of biology, from molecular biology to ecosystems.</p>
                        </div>
                        <div className="course-item">
                            <h3>Civil Engineering</h3>
                            <p>Explore the wonders of , from molecular biology to ecosystems.</p>
                        </div>
                        <div className="course-item">
                            <h3>Electronic and Communication Engineering</h3>
                            <p>Explore the wonders of biology, from molecular biology to ecosystems.</p>
                        </div>
                    </div>
                </section>

                {/*facilities*/}
        <b><h2 className="main">Facilities</h2></b>      
       <section className="container">
      <div className="image-grid">
        {images.map((item, index) => (
          <div key={index} className="image-container">
            <img src={item.src} alt={`image-${index}`} className="image" />
            <div className="overlay">
              <p className="animated-text">{item.text}</p>
            </div>
          </div>
        ))}c
      </div>
    </section>
    {/* Contact Information Section */}
               <b><h2 className="main">Contact us</h2></b>
                <section className="contact">
                    
                    <p>If you have any questions or want to know more about our programs, feel free to reach out to us.</p>
                    <ul>
                        <li>Email: info@university.com</li>
                        <li>Phone: +1 123-456-7890</li>
                        <li>Address: 123 University St, City, Country</li>
                    </ul>
                

                {/* Footer */}
                <footer className="footer">
                    <div className="footer-links">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Programs</a>
                        <a href="#">Contact</a>
                    </div>
                    <p>&copy; 2025 Our University. All Rights Reserved.</p>
                </footer>
                </section>
            </>
        );
    }
}

export default Home;