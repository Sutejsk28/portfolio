import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'

import classes from '../../styles/about.module.css'

const About = () => {
  return (
    <section id='about'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle='About me'/>
                    <h3 className='mt-4'>I&apos;m here</h3>
                    <h3 className='mb-4'>to help in your next project</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque asperiores temporibus quo saepe odio, 
                    esse labore libero obcaecati quidem explicabo blanditiis deleniti ex vitae ratione ullam fugiat dicta eum sint officiis porro illum quia. 
                    Error quam cum excepturi beatae.
                    </p>

                    <div className='d-flex align-item-center gap-5' >
                        <div>
                            <h6 className='d-flex align-item-center gap-2 mt-3 fw-normal mb-0 ' >
                                <span className={`${classes.about__icon}`} >
                                <i className="ri-checkbox-circle-line"></i>
                                </span>
                                Problem Solving
                            </h6>
                            <h6 className='d-flex align-item-center gap-2 mt-3 fw-normal mb-0 ' >
                                <span className={`${classes.about__icon}`} >
                                <i className="ri-checkbox-circle-line"></i>
                                </span>
                                Researching
                            </h6>
                        </div>
                        <div>
                            <h6 className='d-flex align-item-center gap-2 mt-3 fw-normal mb-0 ' >
                                <span className={`${classes.about__icon}`} >
                                <i className="ri-checkbox-circle-line"></i>
                                </span>
                                Efficient Solution
                            </h6>
                            <h6 className='d-flex align-item-center gap-2 mt-3 fw-normal mb-0s ' >
                                <span className={`${classes.about__icon}`} >
                                <i className="ri-checkbox-circle-line"></i>
                                </span>
                                Quality code
                            </h6>
                        </div>
                    </div>
                    <div className='mt-5' >
                        <button className='primary__btn' >
                            <Link href='#projects'>
                                My projects
                            </Link>
                        </button>

                        <button className='secondary__btn' >
                            <Link href='#contact'>
                                <a>Download CV</a>
                            </Link>
                        </button>

                    </div>
                </Col>

                <Col lg='6' md='6' className={`${classes.social__link__container}`}>
                    
                        <Link href='https://www.linkedin.com/in/sutej-kulkarni-1206501b6/' >
                            <span className={`${classes.social__links}`} ><i className="ri-linkedin-fill"></i></span>
                        </Link>
                    
                        <Link href='https://github.com/Sutejsk28' >
                            <span className={`${classes.social__links}`} ><i className="ri-github-line"></i></span>
                        </Link>
                        <Link href='/' >
                            <span className={`${classes.social__links}`} ><i className="ri-instagram-line"></i></span>
                        </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default About