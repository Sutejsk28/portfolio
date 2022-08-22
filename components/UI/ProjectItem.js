import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import classes from '../../styles/project-item.module.css'

const ProjectItem = (props) => {

    const {title, img, liveUrl, techStack } = props.item
    return (
    <div className={`${classes.project__item}`} >
        <div className='bg-transparent' >
            <h6>{title}</h6>
            {
                techStack.map( (item,index)=>{
                    return (<span className={`${classes.project__teckStack}`} key={index} >
                        {item}
                    </span>)
                } )
            }
        </div>
        <div className={`${classes.project__img } bg-transparent`} >
            <Image alt='project-image' src={img} width='300' height='250' />
        </div>

        <div className={`${classes.project__live} bg-transparent`} >
            <button className='primary__btn'>
                <Link href={liveUrl}>
                    <a>GitHub link</a>
                </Link>
            </button>
        </div>
    </div>
  )
}

export default ProjectItem