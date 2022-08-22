import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/skills.module.css'
import SkillsItem from './SkillsItem'

const Skills = () => {
  return (
    <section id='skills'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className={`${classes.skills__container}`}>

              <div>
                <SkillsItem title="App Development" icon="ri-apps-line" />
                <SkillsItem title="Web Development" icon="ri-reactjs-line" />
              </div>

              <SkillsItem title="Java Language" icon="ri-code-line" />

            </div>
          </Col>

          <Col lg='6' md='6' className={`${classes.skills__item}`} >
            <SectionSubtitle subtitle='Skills' />
            <h3 className='mb-0 mt-4' >Better Code</h3>
            <h3 className='mb-4' >Better Experience</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet culpa nobis corporis officiis, numquam cupiditate, enim expedita eveniet dolorum, aliquid nesciunt sapiente illo voluptatum! Dolores fuga mollitia atque, placeat minima quibusdam accusantium! Veniam, non distinctio dolorem rerum laboriosam deleniti.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills