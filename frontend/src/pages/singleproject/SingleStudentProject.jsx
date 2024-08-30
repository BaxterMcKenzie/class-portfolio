import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singlestudentproject.scss'
import { useProjectContext } from '../../hooks/useProjectContext'
import { FaGithub } from "react-icons/fa";

const SingleStudentProject = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const {projects} = useProjectContext()

  const project = projects.find(proj => proj._id === id)

  return (
    <div className='single-page-project'>

      <div className='button-div'>
        <button className='back-button' onClick={()=>navigate(-1)}>Go Back</button>
      </div>

      <div className='title'>
        <h2>{project.author_name}'s {project.project_name} Project</h2>
      </div>

      <div className='single-page-card'>

        <div className='left-overlay'>
          <img className='single-page-project-image' 
          src={`http://localhost:4000/public/uploads/${project.project_img}`} 
          alt={project.project_name} />
        </div>
        
        <div className='right-overlay'>
          <h3>{project.project_name}</h3><br/>
          <p>{project.description}</p><br/>
          <h4>{project.author_name}</h4><br/>

          <div className='socials'>
            <a href={project.github_repo} target="_blank" rel="noopener noreferrer">
              <p className='social-icons'>
                <FaGithub className='github'/>
              </p>
            </a>
          </div>

        </div>

        <div className='profile-pic-overlay'>
          <img className='single-page-project-image' 
          src={`http://localhost:4000/public/uploads/${project.author_img}`} 
          alt={project.author_name} />
        </div>

      </div>

    </div>
  )
}

export default SingleStudentProject