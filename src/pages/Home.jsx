import React from "react";
import mainBg from "../assets/images/main-bg.png";
import dentalIcon from "../assets/images/dental.png";
import toothIcon from "../assets/images/tooth.png";
import toothBreakIcon from "../assets/images/tooth_break.png";
import childTooth from "../assets/images/childTooth.png";
import appointmentToday from "../assets/images/appointmentToday.png";
import mask_2 from "../assets/images/mask_2.png";
import man1 from "../assets/images/man1.png";
import doctorPic from "../assets/images/appointmentToday.png";

const Home = () => {
  return (
    <>
      <div
        className="hero__section"
        style={{
          background: `linear-gradient(rgba(255,255,255,.8), rgba(255,255,255,.9)),  url(${mainBg})`,
        }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12">
              <div className="nav__menu">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Dental Services</a>
                <a href="/">Reviews</a>
                <a href="/" className="text-white">
                  Blog
                </a>
                <a href="/" className="text-white">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="row " style={{ padding: "50px 0 150px 0" }}>
            <div className="col-md-6">
              <div className="hero__left">
                <h2>
                  Your New Smile <br /> Starts Here
                </h2>
                <p className="lead">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil vel exercitationem quasi officiis, fugiat eos quaerat
                  tempore, debitis veniam sit, dolorem laboriosam accusantium at
                  nam atque placeat a perspiciatis et.
                </p>
                <button className="site__btn">GET APPOINMENT</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hero__right">
                <img src={mainBg} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero__rightBg"></div>
      </div>

      <div className="hero__bottom">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="header__card__sm">
                <div>
                  <i className="far fa-clock"></i>
                </div>
                <div>
                  <h6>Opening Hour</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="header__card__sm"
                style={{ backgroundColor: "#3A4256" }}
              >
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6>Opening Hour</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="header__card__sm">
                <div>
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div>
                  <h6>Opening Hour</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* services area */}
      <div className="services__area">
        <div className="container">
          <div className="row my-5 pt-5">
            <div className="col-md-12 text-center">
              <h5 className="app__text">OUR SERVICES</h5>
              <h2>Services We Provide</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="service__box text-center">
                <img src={dentalIcon} alt="" />
                <h5>Fluoride Treatment</h5>
                <p>
                  Lorem Ipsum is simply dummy printing and typesetting indust
                  Ipsum has been the
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service__box text-center">
                <img src={toothBreakIcon} alt="" />
                <h5>Cavity Filling </h5>
                <p>
                  Lorem Ipsum is simply dummy printing and typesetting indust
                  Ipsum has been the
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service__box text-center">
                <img src={toothIcon} alt="" />
                <h5>Teath Whitening</h5>
                <p>
                  Lorem Ipsum is simply dummy printing and typesetting indust
                  Ipsum has been the
                </p>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-5">
              <img src={childTooth} className="img-fluid" alt="" />
            </div>
            <div className="col-md-7">
              <br />
              <br />
              <h2 className="display-4">
                Exceptional Dental Care, <br /> on Your Terms
              </h2>
              <p className="lead">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page{" "}
              </p>
              <br />
              <br />
              <button className="site__btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="appointment__today"
        style={{
          background: `linear-gradient(rgb(58 66 86), rgb(12 13 17 / 93%)),  url(${mask_2})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                src={appointmentToday}
                className="img-fluid doctor__img"
                alt=""
              />
            </div>
            <div className="col-md-7 text-white">
              <h5 className="pt-5 app__text">APPOINMENT</h5>
              <h1>MAKE YOUR APPOINMENT TODAY</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                molestias fugiat accusantium vitae esse quasi adipisci, omnis
                sed possimus facere velit praesentium ratione fugit architecto
                dolores! Tempore qui repudiandae animi!
              </p>
              <button className="site__btn mb-4">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* testimonail sectiON */}

      <div className="app__testimonial">
        <div className="container">
          <div className="row py-5 mt-5">
            <div className="col-md-12">
              <h5 className="app__text">TESTIMONAIL</h5>
              <h2>
                What's Our Patients <br /> Say's
              </h2>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-md-4">
              <div className="testimonial__box">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque optio unde nulla, nostrum soluta mollitia voluptas
                  est ex autem corrupti veritatis eveniet, sapiente impedit.
                  Molestias mollitia eum quia fugiat veritatis.
                </p>
                <div className="testimonial__user">
                  <div className="mr-3">
                    <img src={man1} alt="" />
                  </div>
                  <div>
                    <h5 className="app__text">Watson Henry</h5>
                    <span>California</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial__box">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque optio unde nulla, nostrum soluta mollitia voluptas
                  est ex autem corrupti veritatis eveniet, sapiente impedit.
                  Molestias mollitia eum quia fugiat veritatis.
                </p>
                <div className="testimonial__user">
                  <div className="mr-3">
                    <img src={man1} alt="" />
                  </div>
                  <div>
                    <h5 className="app__text">Watson Henry</h5>
                    <span>California</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial__box">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque optio unde nulla, nostrum soluta mollitia voluptas
                  est ex autem corrupti veritatis eveniet, sapiente impedit.
                  Molestias mollitia eum quia fugiat veritatis.
                </p>
                <div className="testimonial__user">
                  <div className="mr-3">
                    <img src={man1} alt="" />
                  </div>
                  <div>
                    <h5 className="app__text">Watson Henry</h5>
                    <span>California</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* blog section */}

      <div className="app__blog">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 text-center">
              <h5 className="app__text">OUR BLOG</h5>
              <h2>From Our Blog News</h2>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-4">
              <div className="blog__box">
                <div className="blog__top d-flex">
                  <div>
                    <img className="w-75" src={man1} alt="" />
                  </div>
                  <div>
                    <h6>Dr. Caudi</h6>
                    <span>23 April 2020</span>
                  </div>
                </div>
                <h4 className="my-3">
                  Lorem ipsum dolor, sit amet consectetur.
                </h4>
                <p className="text-muted m-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus eaque necessitatibus, doloremque voluptatum qui
                  placeat? Accusamus quaerat similique expedita laboriosam
                  ducimus repellendus incidunt necessitatibus vel a et
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog__box">
                <div className="blog__top d-flex">
                  <div>
                    <img className="w-75" src={man1} alt="" />
                  </div>
                  <div>
                    <h6>Dr. Caudi</h6>
                    <span>23 April 2020</span>
                  </div>
                </div>
                <h4 className="my-3">
                  Lorem ipsum dolor, sit amet consectetur.
                </h4>
                <p className="text-muted m-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus eaque necessitatibus, doloremque voluptatum qui
                  placeat? Accusamus quaerat similique expedita laboriosam
                  ducimus repellendus incidunt necessitatibus vel a et
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="blog__box">
                <div className="blog__top d-flex">
                  <div>
                    <img className="w-75" src={man1} alt="" />
                  </div>
                  <div>
                    <h6>Dr. Caudi</h6>
                    <span>23 April 2020</span>
                  </div>
                </div>
                <h4 className="my-3">
                  Lorem ipsum dolor, sit amet consectetur.
                </h4>
                <p className="text-muted m-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Delectus eaque necessitatibus, doloremque voluptatum qui
                  placeat? Accusamus quaerat similique expedita laboriosam
                  ducimus repellendus incidunt necessitatibus vel a et
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* doctors area */}
      <div className="doctors__area">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-12 text-center">
              <h5 className="app__text">Our Doctors</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={doctorPic} className="img-fluid" alt="" />
              <h5 className="mt-2 mb-0">Dr. Caudi</h5>
              <span>789589237758</span>
            </div>
            <div className="col-md-4 text-center">
              <img src={doctorPic} className="img-fluid" alt="" />
              <h5 className="mt-2 mb-0">Dr. Caudi</h5>
              <span>789589237758</span>
            </div>
            <div className="col-md-4 text-center">
              <img src={doctorPic} className="img-fluid" alt="" />
              <h5 className="mt-2 mb-0">Dr. Caudi</h5>
              <span>789589237758</span>
            </div>
          </div>
        </div>
      </div>

      {/* contact area */}

      <div className="contact__area mt-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-8 offset-md-2 text-center">
              <h5 className="app__text">CONTACT US</h5>
              <h3 className="text-white">Always Connect With Us</h3>
              <form className="mt-5">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address *"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject *"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    className="form-control"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="site__btn">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </div>


      {/* footer area */}
      <footer className="app__footer mt5 py-5">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3">
              <div className="footer__links">
                <a href="">Emergency Detal Care</a>
                <a href="">Check Up</a>
                <a href="">Treatment of Personal issue</a>
                <a href="">Tooth Extraction</a>
                <a href="">Check Up</a>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="app__text">Services</h5>
              <div className="footer__links">
                <a href="">Emergency Detal Care</a>
                <a href="">Check Up</a>
                <a href="">Treatment of Personal issue</a>
                <a href="">Tooth Extraction</a>
                <a href="">Check Up</a>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="app__text">Oral Health</h5>
              <div className="footer__links">
                <a href="">Emergency Detal Care</a>
                <a href="">Check Up</a>
                <a href="">Treatment of Personal issue</a>
                <a href="">Tooth Extraction</a>
                <a href="">Check Up</a>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="app__text">
                Our Services
              </h5>

            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">Copyright 2020 All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
