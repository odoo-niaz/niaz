'use client';
import Head from "next/head";
import {useRouter} from 'next/router';
import React from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import Link from "next/link";
import useResponsiveSizeForSwiper from "@/hooks/useResponsiveSizeForSwiper";
import useResponsiveDescription from "@/hooks/useResponsiveDescription";
import Markdown from 'markdown-to-jsx';
import {withBasePath} from "@/utils/basePath";
import projects from "@/enums/projects";
import {useState,useEffect} from 'react';

export default function PortfolioDetail() {
    const { query } = useRouter();
    const [project, setProject] = useState(null);
    const { width, height } = useResponsiveSizeForSwiper();
    const { width: widthDescription, height: heightDescription } = useResponsiveDescription();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


    useEffect(() => {
        const lastSegment = new URL(window.location.href).pathname.split('/').filter(Boolean).pop();
        console.log('Last segment:', lastSegment);

        // Use slug from query if available, otherwise fallback to lastSegment
        const slug = query?.slug || lastSegment;

        if (slug) {
            const foundProject = projects.find(p => p.id === slug);
            setProject(foundProject);
        }
    }, [query.slug]);



    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Niaz Portfolio</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
                <meta name="next-size-adjust"/>
            </Head>
            <div className="main-content w-100">
                <div className="overflow-visible">
                    <section className="pt-120 pb-120 mt-10 mt-lg-0 overflow-visible">
                        <div className="pb-60">
                            <div>
                                <div className="page-heading"><h3
                                    className="page-title fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">Project Title:
                                    {project?.title}</h3>
                                    <p className="fs-seven n5-color mb-4 mb-md-8 text-center"><Markdown>{project?.projectSummary}</Markdown></p>
                                    <a
                                        className="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                                        href={`${basePath}/contact`}>
                                        <svg fill="currentColor" height="1em" stroke="currentColor"
                                             strokeWidth="0" viewBox="0 0 256 256" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                                        </svg>
                                        Hire Me</a></div>
                            </div>
                        </div>
                        <div className="container my-8 my-md-15">
                            <div className="row g-6">
                                <div className="col-12 col-xl-3">
                                    <div className="position-sticky top-0">
                                        <div>
                                            <div className="d-flex flex-column gap-5  brn4 p-3 p-md-5 rounded">
                                                <div><span
                                                    className="n4-color fs-eight fw-medium d-block">Images Count:</span>
                                                    <span className="n5-color fs-six fw-medium">
                                                         <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">
                                                            {project?.galleryImages?.length}
                                                         </span>
                                                    </span>
                                                </div>
                                                <div><span
                                                    className="n4-color fs-eight fw-medium d-block">Technologies</span><span
                                                    className="n5-color fs-six fw-medium">{project?.techStack?.join(", ")}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-9">
                                    <div className="project-details-content">
                                        <div>
                                            <div className="overflow-hidden">
                                                <Swiper
                                                    modules={[Navigation,Autoplay]}
                                                    pagination={{ clickable: true }}
                                                    navigation
                                                    spaceBetween={20}
                                                    slidesPerView={1}
                                                    className="portfolio-swiper my-5"
                                                    autoplay={{
                                                        delay: 1000,
                                                        disableOnInteraction: true,
                                                    }}
                                                >
                                                    {project?.galleryImages.map((image, index) => (
                                                        <SwiperSlide key={index}>
                                                            <div
                                                                style={{
                                                                    width: '100%',
                                                                    height: `${height}px`,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    backgroundColor: '#f9f9f9',
                                                                    overflow: 'hidden',
                                                                }}
                                                            >
                                                                <Image
                                                                    alt={`project-${index + 1}`}
                                                                    loading="lazy"
                                                                    decoding="async"
                                                                    src={withBasePath(image)}
                                                                    width={width}
                                                                    height={height}
                                                                    style={{
                                                                        maxWidth: '100%',
                                                                        maxHeight: '100%',
                                                                    }}
                                                                />
                                                            </div>
                                                        </SwiperSlide>
                                                    ))}
                                                </Swiper>
                                            </div>
                                        </div>
                                        <div>
                                            {project?.sections?.map((section, index) => (
                                                <div key={index} className="mb-8 mb-md-15" data-aos="fade-up">
                                                    <h2 className="fs-two fw-semibold n5-color mb-2 mb-md-4">{section.heading}</h2>
                                                    <p className="text-seven n4-color mb-5 mb-md-10" style={{ whiteSpace: 'pre-line' }}>

                                                        <Markdown>{section.description}</Markdown>
                                                    </p>

                                                    {section.images?.length > 0 && (
                                                        <div className="row g-3 g-md-6">
                                                            {section.images.map((imgSrc, imgIndex) => (
                                                                <div className="col-sm-6 overflow-hidden" key={imgIndex}>
                                                                    <Image
                                                                        src={withBasePath(imgSrc)}
                                                                        alt={`project-section-${index + 1}-image-${imgIndex + 1}`}
                                                                        width={widthDescription}
                                                                        height={heightDescription}
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        className="w-100 object-fit-cover portfolio-details-img"
                                                                        style={{
                                                                            width: `${widthDescription}px`,
                                                                            height: `${heightDescription}px`,
                                                                            backgroundColor: "#f5f5f5",
                                                                            color: "transparent"
                                                                        }}
                                                                    />
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="next-project pt-120 pb-120">
                            <div>
                                <div
                                    className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
                                    <div className="next-project-content"><h3
                                        className="display-four n11-color fw-semibold mb-2 mb-md-4">Let’s Work together
                                        on
                                        your next Project</h3>
                                        <p className="fs-seven n11-color">I am available for freelance projects. Hire me
                                            and get
                                            your project done.</p></div>
                                    <a className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
                                       href={`${basePath}/contact`}>
                                        <svg fill="currentColor" height="1em" stroke="currentColor"
                                             strokeWidth="0" viewBox="0 0 256 256" width="1em"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                                        </svg>
                                        Let’s get in touch</a></div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </>
    );
}
