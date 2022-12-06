import { parse, v4 as uuidv4 } from 'uuid'

import style from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    // console.log(data)
                    setProject(data)

                    // get services
                    setServices(data.services)
                })
                .catch((err) => console.log(err))
        }, 300)
    }, [])

    /* EDIT PROJECT */
    function editPost(project) {

        // zerar a message
        setMessage('')

        // budget validation
        if (project.budget < project.cost) {
            // message
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data)
                setProject(data)

                // Ocultar o Form
                setShowProjectForm(false)

                //message
                setMessage('Projeto atualizado com SUCESSO!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }
    /* END EDIT PROJECT */

    function createService(project) {

        // zerar a message
        setMessage('')

        // last service
        const lastService = project.services[project.services.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        // maximum value validation
        //TODO criar validação: valor ultilizado < orçamento 
        if (newCost > parseFloat(project.budget)) {
            setMessage('Orcamento ultrapassado! Verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }

        // add sevices cost to project total cost
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false)
                setMessage('Serviço adicionado com SUCESSO!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    function removeService(id, cost) {

        // zerar a message
        setMessage('')

        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        // update project
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setServices(servicesUpdated)
                setMessage('Serviço removido com SUCESSO!')
                setType('success')
            })
            .catch((err) => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? (
                <div className={style.project_details}>
                    <Container customClass="column">

                        {message && <Message type={type} msg={message} />}

                        <div className={style.details_container}>
                            <h1>Porjeto: {project.name}</h1>

                            <button className={style.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                            </button>

                            {!showProjectForm ? (
                                <div className={style.project_info}>
                                    <p>
                                        <span>Catergoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span> R$ {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span> R$ {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={style.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Concluir edição"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>

                        <div className={style.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={style.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                            </button>

                            <div className={style.project_info}>
                                {showServiceForm && (<ServiceForm
                                    handleSubmit={createService}
                                    btnText="Adicionar serviço"
                                    projectData={project}
                                />)}
                            </div>
                        </div>

                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                                // colocando cada serviço no seu card
                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))
                            }
                            {services.length === 0 && <p>Não há serviços cadastrados!</p>}
                        </Container>
                    </Container>
                </div>
            ) : (<Loading />)}
        </>
    )
}

export default Project