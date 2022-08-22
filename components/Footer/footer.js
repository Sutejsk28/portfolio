import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'

import classes from './footer.module.css'
import {navLinks} from '../data/links'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg='6' className={`${classes.footer__top}`}>
                    <div className={`${classes.nav__menu}`} >
                        {
                            navLinks.map( (item,index)=>{
                                return (<Link href={item.path} key={index}>
                                    <a>{item.display}</a>
                                </Link>)
                            })
                        }
                    </div>
                </Col>

                <Col lg='6' >
                    <div className={`${classes.footer__created}`} >
                        <h6>Project by Sutej Kulkarni</h6>
                    </div>
                </Col>

            </Row>
        </Container>
    </footer>
  )
}

export default Footer