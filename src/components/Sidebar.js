'use client';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import projects from "@/enums/projects";
import {usePathname} from 'next/navigation';
import {TESTIMONIALS} from "@/enums/testimonials";
import {withBasePath} from "@/utils/basePath";

const Sidebar = () => {
    const [theme, setTheme] = useState('light');
    const pathname = usePathname();
    console.log(pathname);

    const userPic = "/images/user-side.jpg";
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (newTheme) => {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(newTheme);
        root.style.colorScheme = newTheme;
    };

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };


    return (<div>
        <div className="side-menu">
            <div className="sidebar-btn close-btn cursor-pointer d-block d-lg-none"><i
                className="fs-two p1-color">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
            </i></div>
            <div className="d-flex">
                <div className="side-menu-left">
                    <div>
                        <div
                            className="d-flex flex-column gap-8 justify-content-center align-items-center mt-6">
                            <a className="side-icon p1-color bgn2-color brn4" href={`${basePath}/`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15"
                                     viewBox="0 0 11 15" fill="none">
                                    <g clipPath="url(#clip0_3569_434)">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M5.69145 8.43063L1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L5.69145 10.9887V8.43063Z"
                                              fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L1.72801 5.49387Z"
                                              fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M4.86328 6.5702L8.82672 9.5065L4.86328 12.4606V15.0004L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z"
                                              fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M4.86328 6.5702L8.82672 9.5065L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z"
                                              fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M8.72466 2.00391C9.52091 2.00391 10.1657 2.64912 10.1657 3.44491C10.1657 4.24115 9.52091 4.88591 8.72466 4.88591C7.92841 4.88591 7.2832 4.2407 7.2832 3.44491C7.2832 2.64912 7.92841 2.00391 8.72466 2.00391Z"
                                              fill="currentColor"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M1.83013 12.9972C1.03388 12.9972 0.388672 12.352 0.388672 11.5562C0.388672 10.7604 1.03388 10.1152 1.82967 10.1152C2.62546 10.1152 3.27067 10.76 3.27067 11.5562C3.27067 12.3525 2.62592 12.9972 1.82967 12.9972H1.83013Z"
                                              fill="currentColor"></path>
                                    </g>
                                    <defs>
                                        <clipPath>
                                            <rect width="10.5561" height="15" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <div className="d-flex flex-column align-items-center gap-1" onClick={toggleTheme}>
                                <div className="side-icon bg1-color">
                                    <div className="d-flex align-items-center gap-2">
                                        <button>
                                                <span
                                                    className="dark_btn d-flex justify-content-center align-items-center n11-color">
                                                  {theme === 'light' ? (
                                                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                           viewBox="0 0 256 256" height="1em"
                                                           width="1em" xmlns="http://www.w3.org/2000/svg">
                                                          <path
                                                              d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"></path>
                                                      </svg>

                                                  ) : (<svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                            viewBox="0 0 256 256" height="1em"
                                                            width="1em" xmlns="http://www.w3.org/2000/svg">
                                                      <path
                                                          d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
                                                  </svg>)}
                                                </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-menu-right overflow-y-auto">
                    <div
                        className="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
                        <div className="">
                            <div className="sidebar-profile">
                                <div className="position-relative">
                                    <div
                                        className="profile-img1 d-flex justify-content-center overflow-hidden mx-auto">
                                        <Image
                                            alt="user"
                                            loading="lazy"
                                            width={73}
                                            height={78}
                                            decoding="async"
                                            className="user"
                                            style={{color: 'transparent'}}
                                            src={withBasePath(userPic)}
                                        />
                                    </div>
                                    <span className="thumb">👋</span></div>
                                <h4 className="n5-color fw-semibold fs-five mt-2 text-center">Niaz Ahmed Raza</h4>
                                <span
                                    className="n5-color fs-nine d-block text-center">Senior Software Engineer Odoo</span>
                                <div className="d-flex justify-content-center gap-2 align-items-center mt-4">

                                    <a
                                        className="social-icon"
                                        href="https://www.linkedin.com/in/niaz-ahmed-raza-a587a7196/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="p1-color">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                            </svg>
                                        </i>
                                    </a>

                                    <a
                                        className="social-icon"
                                        href="https://github.com/odoo-niaz?tab=repositories"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <i className="p1-color">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                            </svg>
                                        </i>
                                    </a>
                                </div>

                            </div>
                            <div className="line-divider my-4 my-md-8"></div>
                            <div className="menu-list">
                                <ul className="d-flex flex-column gap-3">
                                    <li className="rounded-3">
                                        <a className={`d-flex justify-content-between align-items-center rounded-3 ${pathname === "/" ? 'active' : ''}`}
                                           href={`${basePath}/`}>
                                            <div
                                                className="menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2 ">
                                                <svg stroke="currentColor" fill="currentColor"
                                                     strokeWidth="0" viewBox="0 0 256 256" height="1em"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                                                </svg>
                                                About Us
                                            </div>
                                        </a></li>
                                    <li className="rounded-3">
                                        <a
                                            className={`d-flex justify-content-between align-items-center rounded-3 ${pathname === "/portfolio/" ? 'active' : ''}`}
                                            href={`${basePath}/portfolio`}>
                                            <div
                                                className="menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2 ">
                                                <svg stroke="currentColor" fill="currentColor"
                                                     strokeWidth="0" viewBox="0 0 256 256" height="1em"
                                                     width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M58.34,101.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,69.66,37.66L43.31,64,69.66,90.34a8,8,0,0,1-11.32,11.32Zm40,0a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0,0-11.32l-32-32A8,8,0,0,0,98.34,37.66L124.69,64,98.34,90.34A8,8,0,0,0,98.34,101.66ZM200,40H176a8,8,0,0,0,0,16h24V200H56V136a8,8,0,0,0-16,0v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"></path>
                                                </svg>
                                                Portfolio
                                            </div>
                                            <span
                                                className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">{projects?.length}</span>
                                        </a>
                                    </li>

                                    <li className="rounded-3"><a
                                        className={`d-flex justify-content-between align-items-center rounded-3 ${pathname === "/resume/" ? 'active' : ''}`}
                                        href={`${basePath}/resume`}>
                                        <div
                                            className="menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2 ">
                                            <svg stroke="currentColor" fill="currentColor"
                                                 strokeWidth="0" viewBox="0 0 256 256" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
                                            </svg>
                                            Resume
                                        </div>
                                    </a></li>

                                    <li className="rounded-3">
                                        <a className={`d-flex justify-content-between align-items-center rounded-3 ${pathname === "/testimonials/" ? 'active' : ''}`}
                                           href={`${basePath}/testimonials`}>
                                            <div
                                                className="menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
                                                </svg>
                                                Blog
                                            </div>
                                            <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">
  {TESTIMONIALS?.filter(t => t.article === true).length || 0}
</span>
                                        </a>
                                    </li>


                                    <li className="rounded-3"><a
                                        className={`d-flex justify-content-between align-items-center rounded-3 ${pathname === "/contact/" ? 'active' : ''}`}
                                        href={`${basePath}/contact`}>
                                        <div
                                            className="menu-item d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2 ">
                                            <svg stroke="currentColor" fill="currentColor"
                                                 strokeWidth="0" viewBox="0 0 256 256" height="1em"
                                                 width="1em" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                                            </svg>
                                            Contact
                                        </div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <a className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                           href={`${basePath}/contact`}><i className="ph ph-paper-plane-tilt">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                 viewBox="0 0 256 256" height="1em" width="1em"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                            </svg>
                        </i>Hire Me</a></div>
                </div>
            </div>
        </div>
        <div
            className="w-100 bgn1-color p-3 position-fixed z-3 top-0 d-lg-none d-flex align-items-center justify-content-between br-bottom-n5 box-shadow1">
            <a className="side-icon bgn2-color brn4" href={`${basePath}/`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15"
                     fill="none">
                    <g clipPath="url(#clip0_3569_435)">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M5.69145 8.43063L1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L5.69145 10.9887V8.43063Z"
                              fill="rgba(var(--p1))"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.72801 5.49387L5.69145 2.54023V0L0 4.21303V6.75919L1.72801 5.49387Z"
                              fill="rgba(var(--p1))"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.86328 6.5702L8.82672 9.5065L4.86328 12.4606V15.0004L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z"
                              fill="rgba(var(--p1))"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M4.86328 6.5702L8.82672 9.5065L10.5552 10.7864V8.24163L4.86328 4.01172V6.5702Z"
                              fill="rgba(var(--p1))"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M8.72466 2.00391C9.52091 2.00391 10.1657 2.64912 10.1657 3.44491C10.1657 4.24115 9.52091 4.88591 8.72466 4.88591C7.92841 4.88591 7.2832 4.2407 7.2832 3.44491C7.2832 2.64912 7.92841 2.00391 8.72466 2.00391Z"
                              fill="rgba(var(--p1))"></path>
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.83013 12.9972C1.03388 12.9972 0.388672 12.352 0.388672 11.5562C0.388672 10.7604 1.03388 10.1152 1.82967 10.1152C2.62546 10.1152 3.27067 10.76 3.27067 11.5562C3.27067 12.3525 2.62592 12.9972 1.82967 12.9972H1.83013Z"
                              fill="rgba(var(--p1))"></path>
                    </g>
                    <defs>
                        <clipPath>
                            <rect width="10.5561" height="15" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            </a>

            <div className="d-flex gap-3 align-items-center">
                <div className="side-icon bg1-color" onClick={toggleTheme}>
                    <div className="d-flex align-items-center gap-2">
                        <button>
        <span className="dark_btn d-flex justify-content-center align-items-center n11-color">
          {theme === 'dark' ? (// Sun Icon for Light Mode
              <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                      d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>
              </svg>) : (// Moon Icon for Dark Mode
              <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                      d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"/>
              </svg>)}
        </span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <div
            className="w-100 bgn1-color p-3 position-fixed z-3 bottom-0 d-block d-lg-none br-top-n5 box-shadow1">
            <div className="header-bottom-menu w-full">
                <ul className="d-flex gap-1 align-items-center justify-content-between">
                    <li className={`${pathname === "/" ? 'rounded-3 bg1-color' : 'false'}`}>
                        <a className="d-flex justify-content-between align-items-center" href={`${basePath}/`}>
                            <div
                                className={`d-flex align-items-center gap-2 fs-eight p-2 ${pathname === "/" ? 'n11-color' : 'n5-color'}`}>
                                <span
                                    className="fs-five d-flex align-items-center justify-content-center"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"></path></svg></span><span
                                className="d-none d-md-block">About Us</span></div>
                        </a></li>
                    <li className={`${pathname === "/portfolio/" ? 'rounded-3 bg1-color' : 'false'}`}>
                        <a className="d-flex justify-content-between align-items-center"
                           href={`${basePath}/portfolio`}>
                            <div
                                className={`d-flex align-items-center gap-2 fs-eight p-2 ${pathname === "/portfolio/" ? 'n11-color' : 'n5-color'}`}>
                                <span
                                    className="fs-five d-flex align-items-center justify-content-center"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M200,40H168a16,16,0,0,0-16-16H32A16,16,0,0,0,16,40v80a16,16,0,0,0,16,16h8v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM106.34,61.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L124.69,80Zm-64,24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,77.66,61.66L59.31,80,77.66,98.34a8,8,0,0,1-11.32,11.32ZM200,200H56V136h96a16,16,0,0,0,16-16V56h32Z"></path></svg></span><span
                                className="d-none d-md-block">Portfolio</span></div>
                            <span
                                className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3 d-none d-md-block">16</span></a>
                    </li>


                    <li className={`${pathname === "/resume/" ? 'rounded-3 bg1-color' : 'false'}`}>
                        <a className="d-flex justify-content-between align-items-center"
                           href={`${basePath}/resume`}>
                            <div
                                className={`d-flex align-items-center gap-2 fs-eight p-2 ${pathname === "/resume/" ? 'n11-color' : 'n5-color'}`}>
                                <span
                                    className="fs-five d-flex align-items-center justify-content-center"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path></svg></span><span
                                className="d-none d-md-block">Resume</span>
                            </div>
                        </a></li>

                    <li className={`${pathname === "/testimonials/" ? 'rounded-3 bg1-color' : 'false'}`}>
                        <a
                            className="d-flex justify-content-between align-items-center"
                            href={`${basePath}/testimonials`}>
                            <div
                                className={`d-flex align-items-center gap-2 fs-eight p-2 ${pathname === "/testimonials/" ? 'n11-color' : 'n5-color'}`}>
                                <span
                                    className="fs-five d-flex align-items-center justify-content-center">

                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z"></path>
                                                    </svg>
                            </span><span
                                className="d-none d-md-block">blog</span></div>
                        </a></li>

                    <li className={`${pathname === "/contact/" ? 'rounded-3 bg1-color' : 'false'}`}>
                        <a
                            className="d-flex justify-content-between align-items-center"
                            href={`${basePath}/contact`}>
                            <div
                                className={`d-flex align-items-center gap-2 fs-eight p-2 ${pathname === "/contact/" ? 'n11-color' : 'n5-color'}`}>
                                <span
                                    className="fs-five d-flex align-items-center justify-content-center"><svg
                                    stroke="currentColor" fill="currentColor" strokeWidth="0"
                                    viewBox="0 0 256 256"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path></svg></span><span
                                className="d-none d-md-block">Contact</span></div>
                        </a></li>
                </ul>
            </div>
        </div>
    </div>);
};

export default Sidebar;
