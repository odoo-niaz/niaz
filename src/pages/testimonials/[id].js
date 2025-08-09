'use client';
import Head from "next/head";
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {TESTIMONIALS} from '@/enums/testimonials';
import {withBasePath} from "@/utils/basePath";
import Link from "next/link";

export default function TestimonialPage() {
    const router = useRouter();
    const {id} = router.query;
    const [testimonial, setTestimonial] = useState(null);

    useEffect(() => {
        if (id) {
            const found = TESTIMONIALS.find(t => t.id === parseInt(id));
            setTestimonial(found);
        }
    }, [id]);

    if (!id || !testimonial) return <p className="text-center mt-5">Loading...</p>;


    const price = testimonial.price ?? 3.99;

    return (<>
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{testimonial.name} – Testimonial</title>
        </Head>

        <div className="main-content w-100 px-3 px-md-5">
            <section className="pt-120 pb-120 mt-10 mt-lg-0 overflow-visible">
                <div className="w-100">
                    <div className="page-heading text-center mb-8 mb-md-15">
                        <h1 className="fs-one fw-semibold n5-color mb-3">{testimonial.name}</h1>
                        {!testimonial.article && (<p className="fs-six n4-color">Location: {testimonial.location}</p>)}
                    </div>

                    <div
                        className="fs-five n4-color"
                        style={{fontSize: "1.1rem", lineHeight: "1.8"}}
                    >
                        {/* Section 1: Text */}
                        {testimonial.text && (<pre className="whitespace-pre-wrap break-words" style={{
                            whiteSpace: "normal",
                        }}>
    <code>{testimonial.text}</code>
  </pre>)}

                        {/* Section 2: Code */}
                        {testimonial.code && testimonial.code.trim() && (<pre
                            style={{
                                background: "#f5f7fa",
                                border: "1px solid #e6e9ee",
                                padding: "12px",
                                borderRadius: 8,
                                marginTop: 12,
                                overflowX: "auto",
                                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Courier New', monospace",
                                fontSize: "0.95rem",
                                lineHeight: "1.5",
                                whiteSpace: "pre-wrap",
                            }}
                        >
      {testimonial.code}
    </pre>)}

                        {/* Section 3: Image */}
                        {testimonial.image && (<div className="text-center my-4">
                            <Image
                                src={withBasePath(testimonial.image)}
                                alt={testimonial.name || "Article Image"}
                                width={1000}
                                height={600}
                                className="rounded"
                                style={{maxWidth: "100%", height: "auto"}}
                            />
                        </div>)}

                        {/* Section 4: Extra Text */}
                        {testimonial.text2 && testimonial.text2.trim() && (testimonial.text2.split("\n\n").map((para, i) => (
                            <p key={`text2-${i}`} style={{margin: i === 0 ? "1rem 0 0 0" : "0 0 1rem 0"}}>
                                {para}
                            </p>)))}

                        {/* Section 5: Extra Code */}
                        {testimonial.extraCode && testimonial.extraCode.trim() && (<pre
                            style={{
                                background: "#f5f7fa",
                                border: "1px solid #e6e9ee",
                                padding: "12px",
                                borderRadius: 8,
                                marginTop: 12,
                                overflowX: "auto",
                                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Courier New', monospace",
                                fontSize: "0.95rem",
                                lineHeight: "1.5",
                                whiteSpace: "pre-wrap",
                            }}
                        >
      {testimonial.extraCode}
    </pre>)}

                        {/* Section 6: Final Notes */}
                        {testimonial.text3 && (<pre className="whitespace-pre-wrap break-words" style={{
                            whiteSpace: "normal",
                        }}>
    <code>{testimonial.text3}</code>
  </pre>)}
                        {testimonial.paid === true && (<div
                                            className="incomplete-notice mt-4 mb-4 p-4 text-center rounded"
                                            style={{
                                                backgroundColor: '#fff3cd',
                                                border: '1px solid #ffeeba',
                                                color: '#856404',
                                                fontStyle: 'italic',
                                                userSelect: 'none',
                                            }}
                                        >
                                            🚧 This article is incomplete. To access the full article, please contact us.
                                            Price: ${price.toFixed(2)} USD
                                        </div>)}

                    </div>


                    <div className="text-center">
                        <Link
                            className="p-btn bg1-color fw-medium n11-color px-3 px-md-6 py-2 py-md-4 rounded-pill align-items-center gap-2 h-100 text-nowrap"
                            href="/contact"
                        >
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
                                    d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                            </svg>
                            Let's talk
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    </>);
}
