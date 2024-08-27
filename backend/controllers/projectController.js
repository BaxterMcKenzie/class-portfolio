const Project = require('../models/projectModel')

const mongoose = require('mongoose')

// Get Project/s

const getProjects = async (req, res) => {
    const projects = await Project.find({}).sort({createdAt: -1})
    res.status(200).json(projects)
}

// Get Single Project // 

const getProject = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Project'})
    }

    const project = await Project.findById(id)

    if(!project) {
        return res.status(404).json({error: 'No such Project'})
    }

    res.status(200).json(project)

}

// Create Project // 

const createProject = async (req, res) => {
    const { project_name, project_img, author_name, author_img, description, github_repo, vercel_link, github_profile, user_id } = req.body

    try {
        const project = await Project.create({ project_name, project_img, author_name, author_img, description, github_repo, vercel_link, github_profile, user_id })
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// Delete Project // 

const deleteProject = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Project'})
    }

    const project = await Project.findOneAndDelete({_id: id})

    if(!project) {
        return res.status(404).json({error: 'No such Project'})
    }

    res.status(200).json(project)
}

// Update a Project // 

const updateProject = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No Such Project'})
    }

    const project = await Project.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!project) {
        return res.status(404).json({error: 'No such Project'})
    }

    res.status(200).json(project)
}


module.exports = {
    getProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
}