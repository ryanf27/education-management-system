import { Link, Head } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChalkboardTeacher,
    faFileAlt,
    faBookOpen,
    faUsers,
    faRocket,
    faUserGraduate,
    faMicroscope,
    faRobot,
    faPaintBrush,
    faTheaterMasks,
    faChartLine,
    faBriefcase,
    faHeartbeat,
    faUserNurse,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "@/Components/Footer";

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth} />
            <main>
                {/* hero section */}
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center  min-h-[75vh]">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-75 bg-black"
                        ></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-4xl">
                                        Transform Learning Experiences. <br />{" "}
                                        Unlock Student Potential.
                                    </h1>
                                    <hr />
                                    <p className="mt-1 text-lg  text-gray-300">
                                        Our comprehensive EMS platform
                                        streamlines administrative tasks,
                                        enhances communication, and drives
                                        data-driven insights.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="bg-slate-200 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </div>

                {/* section 1 */}
                <section className="pb-20 bg-slate-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center ">
                            <div className="lg:pt-12 pt-6 w-full md:w-[30%] px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <FontAwesomeIcon
                                                icon={faChalkboardTeacher}
                                            />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Course Management
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-500">
                                            Easily create, manage, and deliver
                                            courses and content, enabling a more
                                            effective learning environment.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-[30%] px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-500">
                                            <FontAwesomeIcon icon={faFileAlt} />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Online Examinations
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-500">
                                            Facilitate and enhance the
                                            examination process with secure and
                                            efficient online assessments,
                                            offering immediate feedback and
                                            insights.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 w-full md:w-[30%] px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <FontAwesomeIcon
                                                icon={faBookOpen}
                                            />
                                        </div>
                                        <h6 className="text-xl font-semibold">
                                            Digital Library
                                        </h6>
                                        <p className="mt-2 mb-4 text-gray-500">
                                            Access a vast digital library,
                                            enhancing learning through a wide
                                            range of e-books, journals, and
                                            educational resources.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-center mt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                                    <FontAwesomeIcon
                                        icon={faUsers}
                                        className="text-xl"
                                    />
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                    Transforming Educational Experiences
                                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                                    Enhance teaching and learning through our
                                    comprehensive Education Management System,
                                    designed to connect educators and students
                                    in a dynamic learning environment.
                                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                                    From course creation to assignment
                                    distribution and interactive lessons, our
                                    platform supports every aspect of the
                                    educational journey, enabling personalized
                                    learning experiences at scale.
                                </p>
                                <Link
                                    to="/"
                                    className="font-bold text-blueGray-700 mt-8"
                                >
                                    Discover More
                                </Link>
                            </div>

                            <div className="w-full md:w-[30%] px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-400">
                                    <img
                                        alt="Educational Collaboration"
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                                        className="w-full align-middle rounded-t-lg"
                                    />
                                    <blockquote className="relative p-8 mb-4">
                                        <svg
                                            preserveAspectRatio="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 583 95"
                                            className="absolute left-0 w-full block h-[95px] -top-[94px] text-blue-400"
                                        >
                                            <polygon
                                                points="-30,95 583,95 583,65"
                                                className="bg-blue-400 fill-current"
                                            ></polygon>
                                        </svg>
                                        <h4 className="text-xl font-bold text-white">
                                            Empowering Educators and Learners
                                        </h4>
                                        <p className="text-md font-light mt-2 text-white">
                                            Our platform is built on the
                                            principle of accessibility and
                                            inclusivity, ensuring that quality
                                            education is available to everyone,
                                            everywhere.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 2 */}
                <section className="relative py-20">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-white fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                <img
                                    alt="Innovative Learning"
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            </div>
                            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                <div className="md:pr-12">
                                    <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                                        <FontAwesomeIcon
                                            icon={faRocket}
                                            className="text-xl"
                                        />
                                    </div>
                                    <h3 className="text-3xl font-semibold">
                                        Empower Your Educational Journey
                                    </h3>
                                    <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                        Our Education Management System is
                                        designed to streamline the learning and
                                        teaching experience, providing tools for
                                        course management, student engagement,
                                        and resource allocation.
                                    </p>
                                    <ul className="list-none mt-6">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faUserGraduate
                                                            }
                                                            className="text-lightBlue-600"
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Student-Centric Learning
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <FontAwesomeIcon
                                                            icon={
                                                                faChalkboardTeacher
                                                            }
                                                            className="text-lightBlue-600"
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Interactive Course
                                                        Design
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                                                        <FontAwesomeIcon
                                                            icon={faBookOpen}
                                                            className="text-lightBlue-600"
                                                        />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-blueGray-500">
                                                        Comprehensive Resource
                                                        Library
                                                    </h4>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 3 Course */}
                <section className="pt-20 pb-48">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center text-center mb-24">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold">
                                    Explore Our Programs
                                </h2>
                                <p className="text-lg leading-relaxed m-4 text-gray-500">
                                    Dive into our comprehensive courses and
                                    innovative learning environment designed to
                                    empower the next generation of leaders,
                                    innovators, and educators.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            {/* Program 1 */}
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Science & Technology
                                        </h5>
                                        <p className="mt-1 text-sm  uppercase font-semibold">
                                            Cutting-edge Curriculum
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faMicroscope}
                                                />
                                            </button>
                                            <button
                                                className="bg-sky-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faRobot}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Program 2 */}
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Arts & Humanities
                                        </h5>
                                        <p className="mt-1 text-sm uppercase font-semibold">
                                            Creative Expression
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPaintBrush}
                                                />
                                            </button>
                                            <button
                                                className="bg-red-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faTheaterMasks}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Program 3 */}
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Business & Economics
                                        </h5>
                                        <p className="mt-1 text-sm  uppercase font-semibold">
                                            Leadership & Innovation
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className=" bg-purple-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faChartLine}
                                                />
                                            </button>
                                            <button
                                                className="bg-purple-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faBriefcase}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Program 4 */}
                            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                                <div className="px-6">
                                    <div className="pt-6 text-center">
                                        <h5 className="text-xl font-bold">
                                            Health & Wellness
                                        </h5>
                                        <p className="mt-1 text-sm  uppercase font-semibold">
                                            Care & Community
                                        </p>
                                        <div className="mt-6">
                                            <button
                                                className=" bg-orange-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faHeartbeat}
                                                />
                                            </button>
                                            <button
                                                className="bg-orange-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                                type="button"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUserNurse}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 4 */}
                <section className="pb-20 relative block bg-gray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-6/12 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Transform Your Learning Experience
                                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
                                    Empower educators and students with a
                                    comprehensive platform that enhances
                                    learning outcomes through dynamic courses,
                                    interactive content, and real-time
                                    analytics.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-12 justify-center">
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-gray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faChalkboardTeacher}
                                        className="text-xl"
                                    />
                                </div>
                                <h6 className="text-xl mt-5 font-semibold text-white">
                                    Interactive Courses
                                </h6>
                                <p className="mt-2 mb-4 text-gray-400">
                                    Engage students with dynamic course
                                    materials that cater to various learning
                                    styles.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faUsers}
                                        className="text-xl"
                                    />
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Student Engagement
                                </h5>
                                <p className="mt-2 mb-4 text-gray-400">
                                    Foster a collaborative and interactive
                                    learning environment that motivates
                                    students.
                                </p>
                            </div>
                            <div className="w-full lg:w-3/12 px-4 text-center">
                                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faChartLine}
                                        className="text-xl"
                                    />
                                </div>
                                <h5 className="text-xl mt-5 font-semibold text-white">
                                    Analytics & Reporting
                                </h5>
                                <p className="mt-2 mb-4 text-gray-400">
                                    Gain insights into course effectiveness and
                                    student performance with advanced analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* section 5 */}
                <section className="relative block py-24 lg:pt-0 bg-gray-800">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-6/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">
                                            Want to work with us?
                                        </h4>
                                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                            Complete this form and we will get
                                            back to you in 24 hours.
                                        </p>
                                        <div className="relative w-full mb-3 mt-8">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="full-name"
                                            >
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Full Name"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="email"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                placeholder="Email"
                                            />
                                        </div>

                                        <div className="relative w-full mb-3">
                                            <label
                                                className="block uppercase text-gray-600 text-xs font-bold mb-2"
                                                htmlFor="message"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                rows="4"
                                                cols="80"
                                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                placeholder="Type a message..."
                                            />
                                        </div>
                                        <div className="text-center mt-6">
                                            <button
                                                className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
