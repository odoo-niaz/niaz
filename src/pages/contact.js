'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    const [formStatus, setFormStatus] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        const response = await fetch("https://formspree.io/f/mdkzeydq", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            // Show success message on the same page
            toast.success("Message sent Successfully!");
            form.reset();
        } else {
            toast.error("Something went wrong, Please try to submit again.");
        }
    };

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Contact</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
            </Head>
            <div className="main-content w-100">
                    <section className="pt-120 pb-120 mt-10 mt-lg-0">
                        <div >
                            <div className="pb-60 br-bottom-n3">
                                <div className="page-heading"><h3
                                    className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Contact</h3>
                                    <p className="fs-seven n5-color mb-4 mb-md-8 text-center">Have an idea? Let’s bring it to life.
                                        If you're looking for a passionate developer to help with your next project or you just want to chat I’m only a message away.
                                        Use the form below or email me directly at <a className="p1-color" href="mailto:niazbscs2@gmail.com"> niazbscs2@gmail.com</a>. </p>
                                    <div className="d-flex flex-wrap justify-content-center gap-2 align-items-center mt-4">
                                        <a className="social-icon" href="https://www.linkedin.com/in/niaz-ahmed-raza-a587a7196/" target="_blank" rel="noopener noreferrer"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                        </svg>
                                    </i></a><a className="social-icon" href="https://github.com/odoo-niaz?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="p1-color">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28A8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24A8,8,0,0,0,69.07,28a59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                        </svg>
                                    </i></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-8 mt-md-15">
                            <div >
                                <div className="section-heading">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="title-line"></div>
                                        <h2 className="display-four n5-color fw-semibold">Contact Details</h2></div>
                                    <p className="fs-seven n4-color mt-2 mt-md-4">Feel free to reach out I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p></div>
                            </div>
                            <div >
                                <div className="d-flex flex-wrap gap-3 gap-md-6 align-items-center justify-content-between mt-8 mt-md-15">
                                    <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left"><i
                                        className="p1-color fs-one">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z"></path>
                                        </svg>
                                    </i>
                                        <div><span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">Phone</span><a
                                            className="n4-color fs-nine" href="tel:+4915214952887">+49 15214952887</a></div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left"><i
                                        className="p1-color fs-one">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"></path>
                                        </svg>
                                    </i>
                                        <div><span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">Location</span><span
                                            className="n4-color fs-nine">Germany</span></div>
                                    </div>
                                    <div className="d-flex gap-3 align-items-center p-3 p-md-5 br1-left"><i
                                        className="ph ph-envelope-open p1-color fs-one">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"></path>
                                        </svg>
                                    </i>
                                        <div><span className="n5-color fs-five fw-semibold d-block mb-1 mb-sm-2">Email</span><a
                                            className="n4-color fs-nine" href="mailto:niazbscs2@gmail.com">niazbscs2@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pb-120">
                        <div className="container">
                            <div >
                                <div className="section-heading">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="title-line"></div>
                                        <h2 className="display-four n5-color fw-semibold">Get In Touch</h2></div>
                                    <p className="fs-seven n4-color mt-2 mt-md-4">If you are going to use a passage of Lorem
                                        Ipsum, you need to be sure there isn&#x27;t anything embarrassing hidden in the
                                        middle of text.</p></div>
                            </div>
                            <div >
                                <form
                                    className="mt-8 mt-md-15 p-3 p-sm-5 p-md-10 rounded-5 brn4"
                                    onSubmit={handleSubmit}
                                >
                                    <input type="hidden" name="_redirect" value="https://yourdomain.com/thank-you" />
                                    <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6 mb-3 mb-md-6">
                                        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                                            <i className="ph ph-octagon p1-color fs-six mb-1"></i>
                                            <input
                                                className="n5-color border-0"
                                                placeholder="Your Name*"
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                            />
                                        </div>
                                        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                                            <i className="ph ph-envelope p1-color fs-six mb-1"></i>
                                            <input
                                                className="n5-color border-0"
                                                placeholder="Email address*"
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex flex-wrap flex-md-nowrap gap-3 gap-md-6">
                                        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                                            <i className="ph ph-device-mobile-camera p1-color fs-six mb-1"></i>
                                            <input
                                                className="n5-color border-0"
                                                placeholder="Phone*"
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                            />
                                        </div>
                                        <div className="d-flex align-items-center gap-2 py-2 py-md-4 rounded-2 brn4 w-100">
                                            <i className="ph ph-map-pin p1-color fs-six mb-1"></i>
                                            <input
                                                className="n5-color border-0"
                                                placeholder="Location*"
                                                type="text"
                                                id="location"
                                                name="location"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-3 mt-md-6">
                                        <textarea
                                            className="n5-color px-2 px-md-3 py-2 py-md-4 rounded-2 brn4 w-100 h-120"
                                            placeholder="Your Message:"
                                            id="message"
                                            name="message"
                                            required
                                        ></textarea>
                                    </div>

                                    <button className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill mt-5 mt-md-10" type="submit">
                                        Send Message
                                    </button>
                                </form>
                                <ToastContainer position="top-right" autoClose={3000} />
                            </div>
                        </div>
                    </section>

            </div>

        </>
    );
}
