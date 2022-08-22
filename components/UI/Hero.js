import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import Link from 'next/link'

import classes from '../../styles/hero.module.css'
import SectionSubtitle from './SectionSubtitle'
import profileImage from '../../public/images/profile-image.jpg'

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className={`${classes.hero__content}`} >
                        <SectionSubtitle subtitle="Hello" />
                        <h2 className='mt-3 mb-3' >I&apos;m Sutej Kulkarni</h2>
                        <h5 className='mb-4' >Full Stack Developer</h5>
                        <p>
                        An enthusiastic Computer Science Engineering student of Gogte Institute of Technology.
                        Love creating and executing innovative software solutions to enhance business productivity. Keen on learning upcoming technologies every day.
                        </p>
                        <div className='mt-5' >
                            <button className='primary__btn' >
                                <Link href='#contact'>
                                    Hire me
                                </Link>
                            </button>

                            <button className='secondary__btn' >
                                <Link href='#contact'>
                                    <a>Download CV</a>
                                </Link>
                            </button>

                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className={`${classes.hero__img} d-flex justify-content-center`}>
                        <Image
                            alt='Profile-picture' 
                            src={profileImage}
                            width='400'
                            height='400'    
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero