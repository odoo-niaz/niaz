'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import projects from '@/enums/projects';
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import ProjectCard from '@/components/ProjectCard';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import {TESTIMONIALS} from "@/enums/testimonials";
import {withBasePath} from '@/utils/basePath';

export default function Home() {
    const userPic = "/images/user.jpg";
    const laravelIcon = "/images/laravel.svg";
    const resumeIcon = "/images/resume-icon.png";
    const reactIcon = "/images/react.png";
    const vueIcon = "/images/vue.png";
    const tailwindIcon = "/images/tailwind-css.svg";
    const bootstrapIcon = "/images/bootstrap.svg";
    const vuetifyIcon = "/images/vuetify.svg";
    const javascriptIcon = "/images/javascript-js.svg";
    const typescriptIcon = "/images/typescript.svg";
    const jqueryIcon = "/images/jquery-plain-wordmark.svg";
    const reduxIcon = "/images/redux-original.svg";
    const vuexIcon = "/images/vue-dot-js.svg";
    const gitIcon = "/images/github.svg";
    const postmanIcon = "/images/postman.svg";
    const firebaseIcon = "/images/file-type-firebase.svg";
    const miroIcon = "/images/miro.svg";
    const basecampIcon = "/images/basecamp.svg";
    const jiraIcon = "/images/jira.svg";
    const phpIcon = "/images/php.png";
    const htmlIcon = "/images/html.png";
    const cssIcon = "/images/css.png";
    const pythonIcon = "/images/python.png";
    const postgresqlIcon = "/images/postgresql.png";
    const xmlIcon = "/images/xml.png";
    const dockerIcon = "/images/docker.png";
    const gcloudIcon = "/images/gcloud.png";
    const kubernatesIcon = "/images/kubernates.png";
    const cicdIcon = "/images/cicd.png";
    const gitlabIcon = "/images/gitlab.svg";
    const grafanaIcon = "/images/grafana.png";
    const incidentIcon = "/images/incident.svg";
    const restapiIcon = "/images/restapi.png";
    const soapapiIcon = "/images/soapapi.png";
    const notionIcon = "/images/notion.svg";
    const lucidIcon = "/images/lucid.svg";
    const rabbitmqIcon = "/images/rabbitmq.svg";
    const confluenceIcon = "/images/confluence.svg";
    const odooIcon = "/images/odoo.png";

    const featuredProjects = projects.filter(project => project.featured);
    const height = useResponsiveHeight();

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <title>Niaz Ahmed Raza – Software Engineer Odoo Portfolio</title>
                <meta name="description"
                      content="Explore Niaz Ahmed Raza's portfolio showcasing full-stack projects, client testimonials, and contact information."/>

                <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32"/>

                <meta property="og:title" content="Niaz Ahmed Raza - Software Engineer Odoo"/>
                <meta property="og:description"
                      content="Showcasing modern web and mobile development projects, with client testimonials from across the globe."/>
                <meta property="og:image" content="https://umeraslamraza.github.io/umer/images/user-side.jpg"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://umeraslamraza.github.io/umer/"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Niaz Ahmed Raza - Software Engineer Odoo"/>
                <meta name="twitter:description" content="Explore projects, testimonials, and contact details."/>
                <meta name="twitter:image" content="https://umeraslamraza.github.io/umer/images/user-side.jpg"/>

            </Head>


            <div className="main-content w-100">
                <main>
                    <div className="overflow-hidden">
                        <section className="pt-120 pb-60 br-bottom-n3  mt-10 mt-lg-0">
                            <div className="container">
                                <div
                                    className="d-flex flex-wrap gap-3 gap-md-12 align-items-center justify-content-between">
                                    <div className="section-heading">
                                            <span
                                                className="n5-color fs-five">Hi, I&#x27;M Senior Software Engineer
                                            </span>
                                        <h2 className="typing-text display-one p1-color mt-2 mb-3">
                                            <span>Odoo</span>
                                        </h2>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">
                                            As an Odoo developer, I build scalable, secure, and intelligent ERP
                                            solutions that transform complex processes into intuitive digital
                                            experiences. Whether it's sales, inventory, HR, or accounting — I make Odoo
                                            work the way your business works.Empowering businesses with smart,
                                            custom-built Odoo solutions. ERP development that actually fits your
                                            workflow.
                                            <br/>
                                        </p>
                                        <ul className="fs-seven n4-color mt-2 mt-md-4">
                                            <li>Need a quick MVP?</li>
                                            <li>Looking to revamp your current site?</li>
                                            <li>Want a developer who communicates well and meets deadlines?</li>
                                        </ul>
                                        <br/>
                                        <p className="fs-seven n4-color mt-2 mt-md-4">
                                            Let’s talk, I’m currently available for freelance or full-time roles and
                                            would love to hear what you're working on. Explore my
                                            <Link className="p1-color" href="/portfolio"> project portfolio </Link>and
                                            <Link className="p1-color" href="/resume"> online resume</Link>.
                                        </p>

                                        <div
                                            className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                                            <Link
                                                className="p-btn n11-color bg1-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                href="/portfolio">
                                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                     viewBox="0 0 256 256" height="1em" width="1em"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                                </svg>
                                                View Portfolio</Link>
                                            <Link
                                                className="p-btn n11-color bgn51-color fw-medium n1-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                                                href="/resume">
                                                <Image
                                                    alt="Resume Icon"
                                                    loading="lazy"
                                                    width={24}
                                                    height={25}
                                                    decoding="async"
                                                    style={{color: 'transparent'}}
                                                    src={withBasePath(resumeIcon)}

                                                />View Resume</Link>

                                        </div>
                                    </div>
                                    <div className="position-relative profile-img">
                                        <div className="user-bg"></div>
                                        <div className="bg-white">
                                            <Image
                                                alt="user-umer"
                                                loading="lazy"
                                                width={326}
                                                height={398}
                                                decoding="async"
                                                className="user-img"
                                                style={{color: 'transparent'}}
                                                src={withBasePath(userPic)}

                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
                                    <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                        className="display-two fw-semibold p1-color"><span>8</span></h2>
                                        <div className="line"></div>
                                        <span className="n5-color">Years of Experience</span></div>
                                    <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                        className="display-two fw-semibold p1-color"><span>40</span></h2>
                                        <div className="line"></div>
                                        <span className="n5-color">More than Projects Completed</span></div>
                                    <div className="d-flex align-items-center gap-2 gap-xl-4"><h2
                                        className="display-two fw-semibold p1-color d-flex gap-1"><span>10</span>
                                    </h2>
                                        <div className="line"></div>
                                        <span className="n5-color">More than Companies worked worldwide</span></div>
                                </div>
                            </div>
                        </section>
                        <section className="pt-120 pb-120">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">What I do</h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">I’m an Odoo Developer with 8+
                                                years of experience designing, customizing, and deploying ERP solutions
                                                that help businesses run smarter. From building custom modules to
                                                automating complex workflows, I specialize in making Odoo work
                                                seamlessly for companies across industries.

                                                My expertise spans key Odoo modules like Sales, Inventory, Accounting,
                                                and HR, as well as backend development using Python and the Odoo ORM. I
                                                also enjoy crafting intuitive user interfaces using XML, JavaScript, and
                                                QWeb templates. Whether it’s integrating third-party tools or optimizing
                                                performance, I focus on building scalable, maintainable solutions that
                                                deliver real business value. Want to
                                                find out
                                                more about my experience? Check out my <Link className="p1-color"
                                                                                             href="/resume">online
                                                    resume</Link> and <Link className="p1-color" href="/portfolio">project
                                                    portfolio</Link>.</p></div>
                                        <Link
                                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                            href="/contact">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            Let's talk</Link></div>
                                </div>
                                <div className="row g-3 g-md-6 pt-60">
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="python"
                                                            loading="lazy"
                                                            width={88}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(odooIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Odoo</h4>
                                                <p className="fs-seven n4-color">
                                                    Skilled in functional use and custom app development across Odoo
                                                    versions 11 to 17 and experienced in building tailored workflows,
                                                    reports, UI components, automations, and integrating
                                                    business-specific logic with third-party systems.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="python"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(pythonIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="css"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(postgresqlIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Python &amp;
                                                    PostgreSQL</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in using Python within the Odoo ORM framework to build
                                                    business logic and automate workflows. Skilled in PostgreSQL for
                                                    custom queries, performance tuning, and managing relational data in
                                                    Odoo.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="html"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(xmlIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="html"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(htmlIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="css"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(cssIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">XML,HTML &amp;
                                                    CSS</h4>
                                                <p className="fs-seven n4-color">
                                                    Proficient in using XML for defining Odoo views, reports, and UI
                                                    structures. Skilled in HTML and CSS to customize and enhance the
                                                    frontend experience within Odoo modules, ensuring responsive and
                                                    user-friendly designs.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="javascript"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(javascriptIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="jquery"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(jqueryIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="typescript"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(typescriptIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Javascript,
                                                    Jquery
                                                    &amp;
                                                    Typescript</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in enhancing Odoo's frontend with JavaScript and jQuery
                                                    for dynamic UI and custom widgets. Comfortable using
                                                    TypeScript for writing scalable, maintainable code in modern Odoo
                                                    web client.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="vue"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(dockerIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="react"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(kubernatesIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Docker &amp;
                                                    Kubernates
                                                </h4>
                                                <p className="fs-seven n4-color">
                                                    Skilled in containerizing Odoo environments using Docker for
                                                    consistent and seemless development and deployment. Experienced with
                                                    Kubernetes
                                                    for managing scalable Odoo deployments in cloud infrastructure.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="redux"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(gcloudIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="vuex"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(cicdIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">GCloud,
                                                    GCP
                                                    &amp;
                                                    CI/CD</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in deploying and managing Odoo instances on Google Cloud
                                                    Platform with scalable infrastructure. Familiar with implementing
                                                    CI/CD pipelines to automate testing, building, and deployment for
                                                    faster delivery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="Laravel"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(laravelIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="php"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(grafanaIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Odoo
                                                    Telemetry
                                                    &amp; Graphana</h4>
                                                <p className="fs-seven n4-color">
                                                    Skilled in using Odoo telemetry to collect performance and usage
                                                    data for monitoring system health. Experienced with Grafana to
                                                    create interactive dashboards for real-time visualization and
                                                    alerting.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="git"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(restapiIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="firebase"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(soapapiIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="postman"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(postmanIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Rest
                                                    Api, Soap Api
                                                    &amp; Postman</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in integrating Odoo with external systems using REST and
                                                    SOAP APIs for seamless data exchange. Proficient in using Postman
                                                    for API testing, debugging, and automation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="git"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(gitIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="postman"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(gitlabIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Git,
                                                    Github &amp; Gitlab</h4>
                                                <p className="fs-seven n4-color">
                                                    Proficient in version control using Git for efficient collaboration
                                                    and code management. Experienced with GitHub and GitLab platforms
                                                    for repository hosting, code reviews, and CI/CD integration.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="git"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(rabbitmqIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="postman"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(lucidIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="firebase"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(incidentIcon)}

                                                        />
                                                    </div>
                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Rabbitmq,
                                                    Lucid &amp; Incident.io</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in RabbitMQ for msgs queuing
                                                    & asynchronous task management in Odoo integrations. Skilled in
                                                    using Lucid for process mapping and Incident.io for efficient
                                                    incident tracking and resolution.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="jira"
                                                            loading="lazy"
                                                            width={29}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(jiraIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="basecamp"
                                                            loading="lazy"
                                                            width={30}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(basecampIcon)}

                                                        />
                                                    </div>

                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Jira &amp;
                                                    Basecamp</h4>
                                                <p className="fs-seven n4-color">
                                                    Experienced in using Jira for agile project management, issue
                                                    tracking, and sprint planning. Skilled in Basecamp for team
                                                    collaboration, task organization, and communication in software
                                                    development projects.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3">
                                        <div>
                                            <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                                                <div className="d-flex align-items-center gap-3">
                                                    <div>
                                                        <Image
                                                            alt="jira"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(notionIcon)}

                                                        />
                                                    </div>
                                                    <div>
                                                        <Image
                                                            alt="basecamp"
                                                            loading="lazy"
                                                            width={28}
                                                            height={28}
                                                            decoding="async"
                                                            className="service-icon"
                                                            style={{color: 'transparent'}}
                                                            src={withBasePath(confluenceIcon)}

                                                        />
                                                    </div>

                                                </div>
                                                <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">Notion &amp;
                                                    Conflunece</h4>
                                                <p className="fs-seven n4-color">
                                                    Proficient in using Notion and Confluence for documentation,
                                                    knowledge sharing & project organization. Skilled at creating
                                                    clear, collaborative workspaces to streamline team communication and
                                                    information.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <section className="next-project pt-120 pb-120">
                            <div>
                                <div
                                    className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
                                    <div className="next-project-content"><h3
                                        className="display-four n11-color fw-semibold mb-2 mb-md-4">Your Project
                                        Deserves the Right Developer</h3>
                                        <p className="fs-seven n11-color">Whether it’s freelance or full-time, I’m ready
                                            to contribute. Let’s make your next product a success.</p></div>
                                    <Link
                                        className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
                                        href="/contact">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                             viewBox="0 0 256 256" height="1em" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                        </svg>
                                        Let’s get in touch</Link></div>
                            </div>
                        </section>
                        <section className="pt-120 pb-120 br-bottom-n3">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">Featured
                                                    Projects
                                                </h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">Every project you see here was
                                                crafted with care, built to solve real-world challenges, and designed to
                                                leave a lasting impression. I treat each line of code as a step toward
                                                helping clients grow and innovate.</p></div>
                                        <Link
                                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                            href="/portfolio">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            View Portfolio
                                        </Link>
                                    </div>
                                </div>
                                <div className="row g-6 g-md-10 ">
                                    {featuredProjects.map(project => (
                                        <ProjectCard key={project.id} project={project} height={height}/>))}
                                </div>
                            </div>
                        </section>
                        <section className="pt-120 pb-120 br-bottom-n3">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">Testimonials</h2>
                                            </div>
                                            <p className="fs-seven n4-color mt-2 mt-md-4">Hear What My Clients Have to
                                                Say</p>

                                        </div>
                                        <Link
                                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
                                            href="https://www.linkedin.com/in/niaz-ahmed-raza-a587a7196/"
                                            target="_blank">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                            </svg>
                                            View on Linkedin
                                        </Link>
                                    </div>
                                </div>

                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    <Swiper
                                        modules={[Pagination, Navigation, Autoplay]}
                                        navigation
                                        pagination={{clickable: true}}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 1000, disableOnInteraction: true,
                                        }}
                                    >
                                        {TESTIMONIALS.filter(t => t.article === false).map((testimonial, idx) => (
                                            <SwiperSlide key={idx}>
                                                <div
                                                    className="px-5 px-md-10 py-6 py-md-12 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4">
                                                    <img
                                                        src={testimonial?.image}
                                                        alt={`Testimonial ${idx}`}
                                                        className="img-fluid"
                                                    />
                                                </div>

                                            </SwiperSlide>))}
                                    </Swiper>


                                    <Swiper
                                        modules={[Pagination, Navigation, Autoplay]}
                                        navigation
                                        pagination={{clickable: true}}
                                        spaceBetween={30}
                                        slidesPerView={1}
                                        autoplay={{
                                            delay: 3000, disableOnInteraction: true,
                                        }}
                                    >
                                        {TESTIMONIALS.filter(t => t.isVideo).map((testimonial, idx) => (
                                            <SwiperSlide key={`video-${idx}`}>
                                                <div
                                                    className="px-5 px-md-10 py-6 py-md-12 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4">
                                                    <video
                                                        controls
                                                        width="70%"
                                                        className="w-100 rounded-3"
                                                        style={{maxHeight: '450px'}}
                                                    >
                                                        <source src={withBasePath(testimonial.video)} type="video/mp4"/>
                                                        Your browser does not support the video tag.
                                                    </video>
                                                    <div className="d-flex gap-3 align-items-center mt-4 mt-md-7">
                                                        <div>
                                                            <span
                                                                className="fs-eight d-block n5-color">{testimonial?.name}</span>
                                                            <span
                                                                className="fs-nine d-block n5-color">{testimonial?.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>))}
                                    </Swiper>

                                </div>

                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <style global jsx>{`
                .project-thumb {
                    height: 220px !important;
                    display: block;
                }

                @media (min-width: 576px) {
                    .project-thumb {
                        height: 300px !important;
                    }
                }

                @media (min-width: 768px) {
                    .project-thumb {
                        height: 360px !important;
                    }
                }

                @media (min-width: 992px) {
                    .project-thumb {
                        height: 417px !important;
                    }
                }

                .w-100 {
                    width: 100% !important;
                    object-fit: cover !important;
                }
            `}</style>
        </>

    );

}

