import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import SectionSubtitle from './SectionSubtitle'
import classes from '../../styles/projects.module.css'
import ProjectItem from './ProjectItem'
import projects from '../data/projects'

const Projects = () => {

    const [filter, setFilter] = useState('Web App')
    const [data, setData] = useState()

    useEffect( ()=>{
        if(filter === 'Web App'){
            const filteredData = projects.filter( item => item.category === filter )
            setData(filteredData)
        }
        if(filter === 'Mobile App'){
            const filteredData = projects.filter( item => item.category === filter )
            setData(filteredData)
        }
    } , [filter] )

    const active = `${classes.tab__button__active}`

  return (
    <section id='projects'>
        <Container>
            <Row>
                <Col lg='6' md='6' className="mb-5">
                    <SectionSubtitle subtitle='Projects'/>
                    <h4 className='mt-4' >Some of my notable projects</h4>
                </Col>

                <Col lg='6' md='6'>
                    <div className={` ${classes.tab__btns} text-end`} >
                        <button 
                            className={` ${filter === 'Web App' && active} secondary__btn text-white`}
                            onClick={()=>setFilter('Web App')}
                        >
                            Web Apps
                        </button>
                        <button 
                            className={` ${filter === 'Mobile App' && active} secondary__btn text-white`}
                            onClick={()=>setFilter('Mobile App')}
                        >
                            Mobile Apps
                        </button>
                    </div>
                </Col>

                {
                    data?.map( (item)=>{
                        return (<Col lg='4' md='4' key={item.id}>
                            <ProjectItem item={item} /> 
                        </Col>)
                    })
                }

            </Row>
        </Container>
    </section>
  )
}

export default Projects