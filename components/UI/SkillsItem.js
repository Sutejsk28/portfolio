import React from 'react'
import classes from '../../styles/skills-item.module.css'

const SkillsItem = ({title,icon}) => {
  return (
    <div className={`${classes.skills__item}`} >
        <span>
            <i className={icon}></i>
        </span>
        <h5>{title}</h5>
    </div>
  )
}

export default SkillsItem