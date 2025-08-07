'use client';
import Head from "next/head";
import Image from "next/image";
import React from 'react';
import Link from "next/link";
import {withBasePath} from "@/utils/basePath";

export default function Resume() {
    const userPic = "/images/user-side.jpg";
    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Niaz Resume</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
            </Head>
            <div className="main-content w-100">

                <section className="pt-120 pb-120 mt-10 mt-lg-0">
                    <div>
                        <div className="pb-60 br-bottom-n3">
                            <div data-aos="zoom-in" className="page-heading"><h3
                                className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Online
                                Resume</h3><Link href="/resume.pdf"
                                                 className="w-max p-btn bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                                                 download="">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256"
                                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z"></path>
                                </svg>
                                Download PDF Version</Link></div>
                        </div>
                    </div>
                    <div className="container mt-8 mt-md-15">
                        <div>
                            <div className="bgn2-color p-4 p-sm-8 p-md-15 rounded-5 brn4">
                                <div
                                    className="d-flex flex-wrap justify-content-between align-items-center gap-3 br-bottom-n3 pb-3 pb-md-6">
                                    <div><h2 className="display-three p1-color fw-semibold">Niaz Ahmed Raza</h2><span
                                        className="n4-color fs-six fw-medium">Senior Software Engineer Odoo</span></div>
                                    <div className="ps-5 br-left-n3">
                                        <ul className="d-flex flex-column gap-3">
                                            <li><a className="d-flex gap-2 align-items-center n4-color"
                                                   href="tel:+4915214952887">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
                                                </svg>
                                                +49 1521 4952887</a></li>
                                            <li><a className="d-flex gap-2 align-items-center n4-color"
                                                   href="mailto:niazbscs2@gmail.com">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
                                                </svg>
                                                niazbscs2@gmail.com</a></li>
                                            <li className="d-flex gap-2 align-items-center n4-color">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"></path>
                                                </svg>
                                                www.codewithumer.com
                                            </li>
                                            <li className="d-flex gap-2 align-items-center n4-color">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                                                </svg>
                                                Dusseldorf, Germany
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="d-flex flex-wrap flex-md-nowrap align-items-center gap-5 gap-md-10 pb-4 pb-md-8 br-bottom-n3 pt-60">
                                    <div className="resume-profile flex-shrink-0">

                                        <Image
                                            alt="profile"
                                            loading="lazy"
                                            width={145}
                                            height={159}
                                            decoding="async"
                                            className="object-fit-cover"
                                            style={{color: 'transparent'}}
                                            src={withBasePath(userPic)}
                                        />

                                    </div>
                                    <p className="n42-color fs-seven">I’m an Odoo Developer with 8+ years of experience
                                        designing, customizing, and deploying ERP solutions that help businesses run
                                        smarter. From building custom modules to automating complex workflows, I
                                        specialize in making Odoo work seamlessly for companies across industries. My
                                        expertise spans key Odoo modules like Sales, Inventory, Accounting, and HR, as
                                        well as backend development using Python and the Odoo ORM. I also enjoy crafting
                                        intuitive user interfaces using XML, JavaScript, and QWeb templates. Whether
                                        it’s integrating third-party tools or optimizing performance, I focus on
                                        building scalable, maintainable solutions that deliver real business value. </p>
                                </div>
                                <div className="resume-section row pt-60 pb-60 br-bottom-n3">
                                    <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                                        <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                            <div className="title-line2"></div>
                                            <h2 className="fs-three p1-color fw-semibold">Work Experiences</h2></div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span
                                                    className="n5-color fs-six fw-medium">METRO Markets GmbH – Germany 🇩🇪</span><span
                                                className="n4-color fs-eight fw-medium">Software Engineer Odoo (Level-4) | April 2023 – Present</span>
                                            </div>
                                            <p className="n42-color fs-seven my-2 my-md-5">Metro Markets is a German
                                                company where we manage warehouse operations across four countries:
                                                Germany, Spain, France, and Italy — with more expected to be added in
                                                the future. These warehouses utilize Odoo’s Sales, Inventory, and
                                                Barcode applications to handle daily operations. At Odoo we are
                                                fullfilling 15000+ Sales order per week.</p>

                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">MobileLive, Canada 🇨🇦</span><span
                                                className="n4-color fs-eight fw-medium">Senior Software Engineer Odoo | Oct 2022 – March 2023</span>
                                            </div>
                                            <p className="n42-color fs-seven">Mobilelive is a Canadian company where I
                                                worked on a well-known eCommerce business project called CellnTell,
                                                based in Canada. The entire operation was managed through Odoo,
                                                utilizing key modules such as Website, Sales, Purchase, eCommerce, CRM,
                                                Accounting, Inventory, Employees, and Approvals.

                                                Odoo was used to efficiently fulfill hundreds of orders daily,
                                                streamlining end-to-end business processes across departments.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span className="n5-color fs-six fw-medium">TEK Headquaters, EBizCharge USA 🇺🇸</span><span
                                                className="n4-color fs-eight fw-medium">Senior Software Engineer Odoo | June 2020 – Oct 2022</span>
                                            </div>
                                            <p className="n42-color fs-seven my-2 my-md-5">

                                                TEK Headquarters is a subsidiary of EBizCharge, a leading provider of
                                                integrated payment solutions in North America. EBizCharge helps
                                                businesses streamline electronic payment processing, improve transaction
                                                security, and boost profitability.

                                                In this project, as a team lead integrated the EBizCharge payment
                                                gateway deeply
                                                into Odoo — not just on the web interface, but also across the Sales,
                                                Accounting, and Purchase modules. EBizCharge now processes billions in
                                                transactions annually, serving over 400,000 users across the U.S. and
                                                Canada.</p>
                                        </div>

                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Dynexcel, Pakistan 🇵🇰</span><span
                                                className="n4-color fs-eight fw-medium">Senior Software Engineer Odoo | Jan 2020 – May 2020</span>
                                            </div>
                                            <p className="n42-color fs-seven">Dynexcel is an Odoo Silver Partner in
                                                Pakistan, providing tailored Odoo solutions to a wide range of clients.
                                                I led the Odoo development team across multiple ongoing projects,
                                                overseeing customizations, deployments, and client-specific
                                                implementations.

                                                In addition to leadership responsibilities, I independently developed
                                                several key integration projects, including:

                                                WhatsApp Integration with Odoo

                                                Fleet Management Integration

                                                Zoom Integration

                                                Currency Rate Auto-Sync

                                                Microsoft Teams Integration &

                                                Slack Integration.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span><span
                                                className="n4-color fs-eight fw-medium">Software Engineer Odoo | Dec 2017 – Dec 2019</span>
                                            </div>
                                            <p className="n42-color fs-seven">Techloyce is a Pakistan-based company and
                                                one of the top-selling vendors on the Odoo App Store, known globally for
                                                offering a wide range of high-quality Odoo integrations. During my time
                                                at Techloyce, I contributed to numerous integration projects, building
                                                and maintaining connectors that enhanced Odoo's functionality for
                                                various business needs.

                                                Key integrations I worked on include:

                                                Mailchimp Connector with Odoo

                                                ActiveCampaign Connector with Odoo

                                                SharePoint Connector with Odoo

                                                Dropbox Connector with Odoo

                                                Box Integration with Odoo

                                                Shanns Cosmetics – Complete Odoo Setup

                                                DocuSign Integration

                                                WooCommerce Integration

                                                Shopify Integration &

                                                Office 365 Connector.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">University Of Sargodha, Pakistan 🇵🇰</span><span
                                                className="n4-color fs-eight fw-medium">Lecturer Computer Science | Feb 2017 – Nov 2017</span>
                                            </div>

                                            <p className="n42-color fs-seven">As a Computer Science Lecturer at the
                                                university level, I was responsible for delivering engaging and
                                                practical lectures to undergraduate students. My primary teaching areas
                                                included Artificial Intelligence and Python Programming, where I focused
                                                on building strong foundational concepts and hands-on problem-solving
                                                skills.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Police IT Department Sargodha, Pakistan 🇵🇰</span><span
                                                className="n4-color fs-eight fw-medium">Data Processing Officer | Sep 2016 – Feb 2017</span>
                                            </div>

                                            <p className="n42-color fs-seven">As Data Processing Officer in Police
                                                Department, provided technical support and system management for several
                                                critical applications used across the department, including: Police
                                                Record Management System

                                                Complaint Management System

                                                Tenant Registration System

                                                Vehicle Verification System and

                                                Citizen Facilitation Center.

                                                In addition to technical responsibilities, completed a 3-month training
                                                at the Special Police Academy, which included IT workshops, professional
                                                discipline, physical training, and operational readiness.

                                            </p>
                                        </div>

                                    </div>
                                    <div className="col-md-4 col-lg-12 col-xl-4 col-xxl-3">
                                        <div className="ps-4 ps-xxl-7 br-left-n3 mt-5 mt-md-0">
                                            <div className="mb-8 mb-md-15">
                                                <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                                    <div className="title-line2"></div>
                                                    <h2 className="fs-three p1-color fw-semibold">Skills</h2></div>
                                                <div className="mb-3 mb-md-6"><h5
                                                    className="fs-six n5-color fw-medium mb-2 mb-md-4">Technical</h5>
                                                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                        <li className="n4-color fs-seven">Odoo Versions 11 to 17</li>
                                                        <li className="n4-color fs-seven">Python & PostgreSQL</li>
                                                        <li className="n4-color fs-seven">HTML & CSS</li>
                                                        <li className="n4-color fs-seven">XML,HTMX</li>
                                                        <li className="n4-color fs-seven">Javascript, Jquery &
                                                            Typescript
                                                        </li>
                                                        <li className="n4-color fs-seven">Flask & Selenium</li>
                                                        <li className="n4-color fs-seven">Docker & Kubernates</li>
                                                        <li className="n4-color fs-seven">GCloud, GCP & CI/CD</li>
                                                        <li className="n4-color fs-seven">Odoo Telemetry & Graphana</li>
                                                        <li className="n4-color fs-seven">Git, Github & Gitlab</li>
                                                        <li className="n4-color fs-seven">Rabbitmq, Lucid &
                                                            Incident.io
                                                        </li>
                                                        <li className="n4-color fs-seven">Jira & Basecamp</li>
                                                        <li className="n4-color fs-seven">Notion & Conflunece</li>

                                                    </ul>
                                                </div>
                                                <div><h5 className="fs-six n5-color fw-medium mb-2 mb-md-4">
                                                    Professional</h5>
                                                    <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                        <li className="n4-color fs-seven">Effective communication</li>
                                                        <li className="n4-color fs-seven">Team player</li>
                                                        <li className="n4-color fs-seven">Strong problem solver</li>
                                                        <li className="n4-color fs-seven">Good time management</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mb-8 mb-md-15">
                                                <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                    <div className="title-line2"></div>
                                                    <h2 className="fs-three p1-color fw-semibold">Languages</h2></div>
                                                <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                    <li className="n4-color fs-seven">English</li>
                                                    <li className="n4-color fs-seven">German A1</li>
                                                    <li className="n4-color fs-seven">Urdu</li>
                                                    <li className="n4-color fs-seven">Hindi</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center gap-2 mb-3 mb-md-6">
                                                    <div className="title-line2"></div>
                                                    <h2 className="fs-three p1-color fw-semibold">Interests</h2></div>
                                                <ul className="d-flex flex-column gap-3 ms-6 ms-lg-10">
                                                    <li className="n4-color fs-seven">Cricket</li>
                                                    <li className="n4-color fs-seven">Football</li>
                                                    <li className="n4-color fs-seven">Travelling</li>
                                                </ul>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                                        <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                            <div className="title-line2"></div>
                                            <h2 className="fs-three p1-color fw-semibold">Education</h2></div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span
                                                    className="n5-color fs-six fw-medium">MS/MPhill In Computer Sciences (2 Years)</span><span
                                                className="n4-color fs-eight fw-medium">University Of Lahore, Pakistan | 2019</span>
                                            </div>

                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span className="n5-color fs-six fw-medium">Bachelors In Computer Science (4 Years)</span><span
                                                className="n4-color fs-eight fw-medium">University Of Sargodha, Pakistan | 2016</span>
                                            </div>

                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span className="n5-color fs-six fw-medium">Bachelors In Education (1.5 Years)</span><span
                                                className="n4-color fs-eight fw-medium">Allama Iqbal Open Univeristy, Pakistan | 2018</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8 col-lg-12 col-xl-8 col-xxl-9">
                                        <div className="d-flex align-items-center gap-2 mb-5 mb-md-10">
                                            <div className="title-line2"></div>
                                            <h2 className="fs-three p1-color fw-semibold">Key Projects</h2></div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span
                                                    className="n5-color fs-six fw-medium">Warehouse Management System</span><span
                                                className="n4-color fs-eight fw-medium">METRO Markets GmbH, Germany 🇩🇪</span>
                                            </div>
                                            <p className="n42-color fs-seven my-2 my-md-5">At Metro Markets we manage
                                                warehouse operations across four countries:
                                                Germany, Spain, France, and Italy. These warehouses utilize Odoo’s
                                                Sales, Inventory, and
                                                Barcode applications to handle daily operations. At Odoo we are
                                                fullfilling 15000+ Sales order per week.</p>

                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">CellnTell Ecommerce Bussiness</span><span
                                                className="n4-color fs-eight fw-medium">MobileLive, Canada 🇨🇦</span>

                                            </div>
                                            <p className="n42-color fs-seven">Mobilelive is a Canadian company where I
                                                worked on a well-known eCommerce business project called CellnTell,
                                                based in Canada. The entire operation was managed through Odoo,
                                                utilizing key modules such as Website, Sales, Purchase, eCommerce, CRM,
                                                Accounting, Inventory, Employees, and Approvals.

                                                Odoo was used to efficiently fulfill hundreds of orders daily,
                                                streamlining end-to-end business processes across departments.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center">
                                                <span
                                                    className="n5-color fs-six fw-medium">EBizCharge Payment Gateway</span><span
                                                className="n4-color fs-eight fw-medium">TEK Headquaters, EBizCharge USA 🇺🇸</span>
                                            </div>
                                            <p className="n42-color fs-seven my-2 my-md-5">

                                                TEK Headquarters is a subsidiary of EBizCharge, a leading provider of
                                                integrated payment solutions in North America. EBizCharge helps
                                                businesses streamline electronic payment processing, improve transaction
                                                security, and boost profitability.

                                                In this project, as a team lead integrated the EBizCharge payment
                                                gateway deeply
                                                into Odoo — not just on the web interface, but also across the Sales,
                                                Accounting, and Purchase modules. EBizCharge now processes billions in
                                                transactions annually, serving over 400,000 users across the U.S. and
                                                Canada.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Migration</span><span
                                                className="n4-color fs-eight fw-medium">GLOBAL MINING COMPANY - GMC OMAN 🇴🇲</span>

                                            </div>
                                            <p className="n42-color fs-seven">Contributed to a large-scale Odoo project
                                                by integrating real-time currency updates from the Central Bank of
                                                Myanmar. Key contributions:

                                                Integrated live exchange rate feed into Odoo

                                                Automated multi-currency updates across the system

                                                Supported implementation and go-live process</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Shoparty – Odoo Implementation with Vend Integration</span><span
                                                className="n4-color fs-eight fw-medium">(Freelance Project) Saudi Arabia 🇸🇦</span>

                                            </div>
                                            <p className="n42-color fs-seven">Led the integration of Vend platform with
                                                Odoo to synchronize sales, inventory, and product data. Key
                                                contributions:

                                                Implemented Sales, Purchase, Manufacturing, and Inventory modules

                                                Integrated Vend for real-time data sync with Odoo

                                                Provided 3 months of post-implementation support and optimization</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                 <span
                                                     className="n5-color fs-six fw-medium">Multi Currency Updation (Central Bank Of Myanmar)</span><span
                                                className="n4-color fs-eight fw-medium">Dynexcel, Myanmar 🇲🇲</span>

                                            </div>
                                            <p className="n42-color fs-seven">Contributed to a large-scale Odoo project
                                                by integrating real-time currency updates from the Central Bank of
                                                Myanmar. Key contributions:

                                                Integrated live exchange rate feed into Odoo

                                                Automated multi-currency updates across the system

                                                Supported implementation and go-live process</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                 <span
                                                     className="n5-color fs-six fw-medium">Microsoft Teams Integration</span><span
                                                className="n4-color fs-eight fw-medium">Dynexcel, Pakistan 🇵🇰</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Zoom meetings directly from Odoo. Key features include:
                                                Create and schedule Teams meetings from Odoo
                                                Allow users to join, start, or manage meetings
                                                Custom options: meeting links, passwords, roles, and permissions</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Zoom Integration</span><span
                                                className="n4-color fs-eight fw-medium">Dynexcel, Pakistan 🇵🇰</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Zoom meetings directly from Odoo. Key features include:
                                                Create and schedule Teams meetings from Odoo
                                                Allow users to join, start, or manage meetings
                                                Custom options: meeting links, passwords, roles, and permissions</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Slack Integration</span><span
                                                className="n4-color fs-eight fw-medium">Dynexcel, Pakistan 🇵🇰</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Slack communication directly from Odoo. Key features include:
                                                Create Meetings via odoo.
                                                Allow acess to other users to Send, Recieve the messages.
                                                Real time messaging, files etc using slack bot</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Whatsapp Integration</span><span
                                                className="n4-color fs-eight fw-medium">Dynexcel, Pakistan 🇵🇰</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Shopify Connector</span>
                                                <span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>

                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Office 365 Integration</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo WooCommerce Integration</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Docusign Connector</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo Box Integration</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo DropBox Integration</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo SharePoint Integration</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo ActiveCampaign Connector</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                        <div className="mb-4 mb-md-6">
                                            <div
                                                className="d-flex flex-wrap gap-1 gap-sm-3 justify-content-between align-items-center mb-2 mb-md-4">
                                                <span
                                                    className="n5-color fs-six fw-medium">Odoo MailChimp Connector</span><span
                                                className="n4-color fs-eight fw-medium">Techloyce, England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
                                            </div>
                                            <p className="n42-color fs-seven">Developed a custom integration to manage
                                                Whatsapp communication directly from Odoo. Key features include:
                                                Send WhatsApp Messges via Odoo Models
                                                Send Reports, SaleOrders, PurchaseOrders, Invoices
                                                Send Recipts, Credit Notes, Payments Etc. Real time messaging &
                                                files/photos sharing.</p>
                                        </div>
                                    </div>


                                </div>
                                <div
                                    className="d-flex flex-wrap gap-2 gap-md-3 gap-md-5 align-items-center justify-content-center mt-4 mt-md-8">
                                    <a className="d-flex gap-1 align-items-center resume-icon"
                                       href="https://github.com/odoo-niaz?tab=repositories" target="_blank"
                                       rel="noopener noreferrer">
                                        <div className="social-icon">
                                            <i className="p1-color">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28A8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24A8,8,0,0,0,69.07,28a59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                                                </svg>
                                            </i>
                                        </div>
                                        <span className="fs-eight n4-color">github.com/odoo-niaz</span>
                                    </a>
                                    <a className="d-flex gap-1 align-items-center resume-icon"
                                       href="https://www.linkedin.com/in/niaz-ahmed-raza-a587a7196/" target="_blank"
                                       rel="noopener noreferrer">
                                        <div className="social-icon">
                                            <i className="p1-color">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                                                </svg>
                                            </i>
                                        </div>
                                        <span className="fs-eight n4-color">linkedin.com/in/niaz-ahmed-raza</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>);
}
