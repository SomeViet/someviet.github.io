import "./Skills.scss";
import Carousel from "react-multi-carousel";
import { Row, Col, Container } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import javascriptimage from "../../assets/images/javascript.svg";
import reactimage from "../../assets/images/react.svg";
import nodejsimage from "../../assets/images/nodejs.svg";
import expressimage from "../../assets/images/express.svg";
import kneximage from "../../assets/images/knex.svg";
import colorSharp from "../../assets/images/color-sharp.png";
import htmlimage from "../../assets/images/html.svg";
import cssimage from "../../assets/images/css.svg";
import reduximage from "../../assets/images/redux.svg";
import vscodeimage from "../../assets/images/vscode.svg";
import gitimage from "../../assets/images/git.svg";
import postmanimage from "../../assets/images/postman.svg";
import passportimage from "../../assets/images/passport.svg";
import axiosimage from "../../assets/images/axios.png";
import mysqlimage from "../../assets/images/mysql.svg";

export default function Skills() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <section className="skills" id="skills">
                <Container>
                    <Row>
                        <Col>
                            <div className="skills__box">
                                <h2 className="skills__header">Skills</h2>
                                <p className="skills__description">
                                    Skilled in building dynamic user interfaces
                                    using JavaScript and ReactJS and creating
                                    efficient back-end systems using Node.JS,
                                    Express, Knex.js and MySQL.
                                </p>
                                <p className="skills__description">
                                    From my Accounting background, I also have
                                    strong analytical and problem-solving
                                    skills, attention to detail and ability to
                                    work under pressure. I can also communicate
                                    and collaborate productively and am able to
                                    work effectively in a team environment. Fast
                                    learner, dedicated to improving my skills
                                    and delivering exceptional results.
                                </p>
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className="skills__carousel"
                                >
                                    <div className="skills__item">
                                        <img
                                            src={htmlimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            HTML
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={cssimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            CSS
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={javascriptimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Javascript
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={reactimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            React
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={axiosimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Axios
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={reduximage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Redux
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={nodejsimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Node JS
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={kneximage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Knex.js
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={expressimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Express
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={passportimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Passport.js
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={mysqlimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            MySQL
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={vscodeimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Visual Studio Code
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={gitimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Git
                                        </h5>
                                    </div>
                                    <div className="skills__item">
                                        <img
                                            src={postmanimage}
                                            alt="Skills"
                                            className="skills__item-image"
                                        />
                                        <h5 className="skills__item-text">
                                            Postman
                                        </h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* Background image for after the hero component */}
                <img
                    className="absolute-background-left"
                    src={colorSharp}
                    alt="colorsharp"
                />
            </section>
        </>
    );
}
