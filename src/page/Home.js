import { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import about1 from "./about1.jpg";
import about2 from "./about2.jpg";
import about3 from "./about3.jpg";
import imageb1 from "./imageb1.jpeg";
import imageb2 from "./imageb2.jpeg";
import libimg from "./libimg.jpg";
import imageb4 from "./imageb4.jpg";
import imageb5 from "./imageb5.jpeg";
import imageb6 from "./imageb6.jpeg";

const images = [
  { src: imageb1, text: "Bus Facilities" },
  { src: imageb2, text: "Classrooms" },
  { src: libimg, text: "Library" },
  { src: imageb4, text: "Lab" },
  { src: imageb5, text: "Training and Placement" },
  { src: imageb6, text: "Campus Vibrant" },
];

class Home extends Component {
  componentDidMount() {
    AOS.init({ duration: 1000 });
  }

  render() {
    return (
      <>
        {/* Hero Carousel */}
        <section>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={image1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Education</h3>
                <p>A small description here.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={image2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>College Background</h3>
                <p>Some description.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={image3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>

        {/* About Section */}
        <section className="container my-5" data-aos="fade-up">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                Our university is committed to providing a high-quality
                education and fostering an environment of innovation and
                creativity. Established in 2025, we offer a wide range of
                programs in various fields, including arts, science,
                engineering, and business. It has catered to 1200+ placements
                with the assistance of 120+ faculty members. The institute holds
                skill-based learning to higher prominence and poses this as the
                secret to the invincible journey.
              </p>
              <p>
                Bansal College of Engineering Mandideep strives to serve the
                students with top-notch facilities, impressive infrastructural
                norms, and a massive track record of placements.
              </p>
            </div>
            <div className="col-md-6">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={about1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={about2}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={about3}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Department Section */}
        <section className="container my-5" data-aos="zoom-in">
          <h2 className="text-center mb-4">Departments</h2>
          <div className="row">
            {[
              {
                title: "Computer Science",
                desc: "Learn the fundamentals of computer programming and software development.",
              },
              {
                title: "Business Administration",
                desc: "Understand the core principles of management, marketing, and entrepreneurship.",
              },
              {
                title: "Mechanical Engineering",
                desc: "Get hands-on experience with designing and analyzing mechanical systems.",
              },
              {
                title: "Biology",
                desc: "Explore the wonders of biology, from molecular biology to ecosystems.",
              },
              {
                title: "Civil Engineering",
                desc: "Explore structural, environmental, and construction engineering.",
              },
              {
                title: "Electronic & Communication",
                desc: "Dive into embedded systems, signal processing, and IoT.",
              },
            ].map((dept, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{dept.title}</h5>
                    <p className="card-text">{dept.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section */}
        <section className="container my-5" data-aos="fade-right">
          <h2 className="text-center mb-4">Facilities</h2>
          <div className="row">
            {images.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm h-100">
                  <img
                    src={item.src}
                    className="card-img-top"
                    alt={item.text}
                  />
                  <div className="card-body text-center">
                    <p className="card-text fw-bold">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="container my-5" data-aos="fade-left">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">
            If you have any questions or want to know more about our programs,
            feel free to reach out to us.
          </p>
          <ul className="list-unstyled text-center">
            <li>Email: info@university.com</li>
            <li>Phone: +1 123-456-7890</li>
            <li>Address: 123 University St, City, Country</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3 mt-5">
          <div className="mb-2">
            <a href="#" className="text-white mx-2">
              Home
            </a>
            <a href="#" className="text-white mx-2">
              About Us
            </a>
            <a href="#" className="text-white mx-2">
              Programs
            </a>
            <a href="#" className="text-white mx-2">
              Contact
            </a>
          </div>
          <p className="mb-0">
            &copy; 2025 Our University. All Rights Reserved.
          </p>
        </footer>
      </>
    );
  }
}

export default Home;
