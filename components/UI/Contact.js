import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'

import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/contact.module.css'
import Form from './Form'

const Contact = () => {
  return (
    <section id='contact' className={`${classes.contact}`} >
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <SectionSubtitle subtitle='contact me' />
                    <h1 className='mt-4 mb-4' >Connect with me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt beatae ratione iusto cum. Doloremque suscipit eius provident error labore est reprehenderit, exercitationem corrupti earum deleniti!</p>
                
                    <ul className={`${classes.contact__info__list}`} >
                        <li className={`${classes.info__item}`} >
                            <span><i className="ri-map-pin-line"></i></span>
                            <p>Belagavi, Karnataka</p>
                        </li>
                        <li className={`${classes.info__item}`} >
                            <span><i className="ri-mail-line"></i></span>
                            <p>sutejsk28@gmail.com</p>
                        </li>
                        <li className={`${classes.info__item}`} >
                            <span><i className="ri-phone-line"></i></span>
                            <p>+918310298135</p>
                        </li>
                    </ul>
                </Col>

                <Col lg='6' md='6'>
                    <Form/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact