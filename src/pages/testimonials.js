'use client';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

import {TESTIMONIALS} from "@/enums/testimonials";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {withBasePath} from "@/utils/basePath";

export default function Testimonials() {

    return (

        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Niaz</title>
                <link rel="icon" href="favicon.ico" type="image/x-icon" sizes="11x15"/>
                <meta name="next-size-adjust"/>
            </Head>

            <div className="main-content w-100">
                <main>
                    <div className="overflow-hidden">
                        <section className="pt-120 pb-120 br-bottom-n3 mt-10 mt-lg-0">
                            <div className="container">
                                <div>
                                    <div
                                        className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
                                        <div className="section-heading">
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="title-line"></div>
                                                <h2 className="display-four n5-color fw-semibold">Articles</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*            <div className="mt-8 mt-md-15 overflow-x-hidden">*/}
                                {/*                {TESTIMONIALS.filter(t => t.article === true).map((testimonial, idx) => (<div*/}
                                {/*                    key={idx}*/}
                                {/*                    className="px-5 px-md-8 py-3 py-md-5 mb-8 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4"*/}
                                {/*                >*/}
                                {/*                    <div className="d-flex gap-3 align-items-center mt-3 mt-md-5">*/}
                                {/*                        <div>*/}
                                {/*                <span style={{fontSize: '1.4rem'}} className="d-block n5-color">*/}
                                {/*    {testimonial?.name}*/}
                                {/*</span>*/}
                                {/*                            <Link*/}
                                {/*                                href={`/testimonials/${testimonial.id}`}*/}
                                {/*                                style={{*/}
                                {/*                                    fontSize: '1.1rem', color: '#0d6efd', cursor: 'pointer'*/}
                                {/*                                }}*/}
                                {/*                                className="d-block"*/}
                                {/*                            >*/}
                                {/*                                Read more →*/}
                                {/*                            </Link>*/}
                                {/*                        </div>*/}
                                {/*                    </div>*/}
                                {/*                </div>))}*/}
                                {/*            </div>*/}


                                <div className="mt-8 mt-md-15 overflow-x-hidden">
                                    {TESTIMONIALS.filter(t => t.article === true).map((testimonial, idx) => (
                                        <div
                                            key={idx}
                                            className="px-5 px-md-8 py-3 py-md-5 mb-8 bgn2-color box-shadow1 br-left-p1 position-relative mx-2 mx-md-4"
                                        >
                                            {/* Conditional badge: Paid or Free */}
                                            <span
                                                className={`position-absolute top-0 end-0 px-2 py-1 rounded-start fs-ten ${
                                                    testimonial.paid ? 'bg-success text-white' : 'bg-warning text-dark'
                                                }`}
                                                style={{fontSize: '0.75rem'}}
                                            >
        {testimonial.paid ? 'Paid Article' : 'Free Article'}
      </span>

                                            <div className="d-flex gap-3 align-items-center mt-3 mt-md-5">
                                                <div>
          <span style={{fontSize: '1.4rem'}} className="d-block n5-color">
            {testimonial?.name}
          </span>
                                                    <Link
                                                        href={`/testimonials/${testimonial.id}`}
                                                        style={{
                                                            fontSize: '1.1rem',
                                                            color: '#0d6efd',
                                                            cursor: 'pointer',
                                                        }}
                                                        className="d-block"
                                                    >
                                                        Read more →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>

                        </section>
                    </div>
                </main>
            </div>

        </>

    );

}

