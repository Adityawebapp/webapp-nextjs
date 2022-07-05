import Image from "next/image";
import Link from "next/link";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { RiFlutterFill, RiReactjsFill, RiAngularjsFill } from "react-icons/ri";
import {
  SiPhp,
  SiLaravel,
  SiDjango,
  SiFigma,
  SiAdobeindesign,
  SiPrivateinternetaccess,
  SiBlockchaindotcom,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { GiArtificialHive } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <a className="navbar-brand">
            <Image
              width={150}
              height={40}
              src="/images/logo.png"
              alt="webpp logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="main_nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown text-white">
                <a
                  className="nav-link dropdown-toggle text-white"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Company
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link href="/company/career">
                      <a className="dropdown-item">Who We Are?</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/company/WhoWeAre">
                      <a className="dropdown-item">About</a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown has-megamenu text-white">
                <a href="#"
                  className="nav-link dropdown-toggle "
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <div className="dropdown-menu megamenu" role="menu">
                  <div className="row">
                    <div className="col mb-4">
                      <div className="row">
                        <Link href="/career">
                          <a>
                            <div className="service_heading_nav d-flex justify-content-start align-items-center">
                              <Image
                                width="40px"
                                height="40px"
                                src="/images/clients/app-development.png"
                                alt=""
                              />
                              <h6 className="font-weight-bold text-uppercase d-flex mx-3">
                                Mobile App <br />
                                Development
                              </h6>
                            </div>
                          </a>
                        </Link>
                      </div>
                      <hr className="nav_line" />
                      <ul className="list-unstyled ">
                        <li className="nav-item">
                          <Link href="/services/mobile-app-development/ios-app-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center ">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillApple fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  IOS App Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/mobile-app-development/android-app-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillAndroid fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Android App Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item center-image-nav">
                          <Link href="/services/mobile-app-development/flutter-app-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <RiFlutterFill fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Flutter App Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/career">
                        <a>
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/browser-web-design-svgrepo-com.png"
                              alt=""
                            />
                            <h6 className="font-weight-bold text-uppercase d-flex mx-3">
                              Web <br />
                              Development
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line" />
                      <ul className="list-unstyled ">
                        <li className="nav-item">
                          <Link href="/services/web-app-development/reactjs-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <RiReactjsFill fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  ReactJs Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link href="/services/web-app-development/angular-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <RiAngularjsFill fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Angular Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/web-app-development/php-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiPhp fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  PHP Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/web-app-development/laravel-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiLaravel fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Laravel Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/web-app-development/nodejs-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <FaNodeJs fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  NodeJs Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/web-app-development/django-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiDjango fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Django/Python Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/career">
                        <a>
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/game-development.png"
                              alt=""
                            />
                            <h6 className="font-weight-bold text-uppercase d-flex mx-3">
                              Game <br />
                              Development
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line" />
                      <ul className="list-unstyled ">
                        <li className="nav-item">
                          <Link href="/services/game-app-development/ios-game-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillApple fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  IOS Game <br /> Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/game-app-development/android-game-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <AiFillAndroid fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  Android Game Development
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/services/game-app-development/ios-game-development">
                        <a>
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/Concept-design.png"
                              alt=""
                            />
                            <h6 className="font-weight-bold text-uppercase d-flex mx-3">
                              User <br />
                              Experience
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line" />
                      <ul className="list-unstyled ">
                        <li className="nav-item">
                          <Link href="/services/user-experience/wireframe-design">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiFigma fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">Wireframe</p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item center-image-nav">
                          <Link href="/services/user-experience/uiux-design">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiAdobeindesign fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">
                                  UI/UX Design
                                </p>
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col mb-4">
                      <Link href="/career">
                        <a>
                          <div className="service_heading_nav d-flex justify-content-start align-items-center">
                            <Image
                              width="40px"
                              height="40px"
                              src="/images/clients/latest tech.png"
                              alt=""
                            />
                            <h6 className="text-uppercase d-flex mx-3">
                              Latest <br />
                              Technologies
                            </h6>
                          </div>
                        </a>
                      </Link>
                      <hr className="nav_line" />
                      <ul className="list-unstyled ">
                        <li className="nav-item">
                          <Link href="/services/latest-app-trends/iot-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiPrivateinternetaccess fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">IOT</p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/latest-app-trends/blockchain-development">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <SiBlockchaindotcom fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">Blockchain</p>
                              </span>
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href="/services/latest-app-trends/augmented-virtual-reality">
                            <a className="nav-link text-small pb-0 d-flex align-content-center">
                              <span className="col-lg-3 col-sm-3 col-md-3 text-dark">
                                <GiArtificialHive fontSize={33} />
                              </span>
                              <span className="col-lg-9 col-md-9 d-flex justify-content-start">
                                <p className="fs-6 text-dark m-0">AR/VR</p>
                              </span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item text-white">
                <Link href="/projects">
                  <a className="nav-link">Product</a>
                </Link>
              </li>
              <li className="nav-item text-white">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>

              <li className="nav-item text-white">
                <Link href="/quote">
                  <a className="nav-link">Quote</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
