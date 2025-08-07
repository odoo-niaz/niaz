import Image from 'next/image';
import Link from 'next/link';
import {withBasePath} from "@/utils/basePath";

export default function ProjectCard({project, height}) {
    return (<div className="col-xl-6" key={project.id}>
        <div>
            <div className="project-card">
                <a
                    className="thumb d-block"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        height, display: 'block', color: 'transparent', width: '100%', objectFit: 'cover',
                    }}
                >
                    <div className="post-thumb">
                        <div className="post-thumb-inner">
                            <Image
                                alt={project.title}
                                loading="lazy"
                                width={620}
                                height={357}
                                decoding="async"
                                className="w-100 p-2"
                                style={{color: 'transparent'}}
                                src={withBasePath(project.thumbnail2)}
                            />
                        </div>
                    </div>
                    <div className="post-thumb">
                        <div className="post-thumb-inner">
                            <Image
                                alt={project.title}
                                loading="lazy"
                                width={620}
                                height={357}
                                decoding="async"
                                className="w-100 p-2"
                                style={{color: 'transparent'}}
                                src={withBasePath(project.thumbnail)}
                            />
                        </div>
                    </div>
                </a>


                <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                        <div className="d-flex flex-wrap gap-1 gap-sm-2 align-items-center">
                            {Array.isArray(project?.techStack) &&
                                project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                                    >
                {tech}
            </span>
                                ))}
                        </div>

                        <a
                            className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.title}
                        </a>

                    </div>
                    <a
                        className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="n5-color">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                                 height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                            </svg>
                        </i>
                    </a>

                </div>
            </div>
        </div>
    </div>);
}
