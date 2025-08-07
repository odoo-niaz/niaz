'use client';
import Head from "next/head";
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import projects from "@/enums/projects";
import { useState } from "react";
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import ProjectCard from '@/components/ProjectCard';


export default function Portfolio() {
    const height = useResponsiveHeight();
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
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
                        <section className="pt-120 pb-120 mt-10 mt-lg-0">
                            <div>
                                <div className="pb-60 br-bottom-n3">
                                    <div className="page-heading"><h3
                                        className="page-title n5-color fs-onefw-semibold n5-color mb-2 mb-md-3 text-center">A
                                        collection of my best projects</h3>
                                        <p className="fs-seven n5-color mb-4 mb-md-8 text-center">
                                            With years of experience in frontend and backend development, I've crafted robust, user-friendly websites and web applications using modern frameworks and tools. Here are some highlights of my work, built with performance, usability, and clean code in mind.</p>
                                        <a className="w-max p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                                            href={`${basePath}/contact`}>
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                                 viewBox="0 0 256 256" height="1em" width="1em"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
                                            </svg>
                                            Hire Me</a></div>
                                </div>
                            </div>
                            <div className="container mt-8 mt-md-15">
                                <div>
                                    <div>

                                        <div className="mt-5 mt-md-10">
                                            <div id="headlessui-tabs-panel-:R6l6fnkv6ja:" role="tabpanel" tabIndex="0"
                                                 data-headlessui-state="selected" data-selected="">
                                                <div className="row g-5 g-md-10 mt-8 mt-md-15">
                                                    {projects.map(project => (
                                                        <ProjectCard key={project.id} project={project} height={height} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
        </>
    );
}
