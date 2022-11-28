import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import style from './NewProject.module.css'

function NewProject() {

    // fazer redirect nas páginas do sistema!
    const navigate = useNavigate()

    function createPost(project) {

        // initialize cost and services
        // Numa app real essas informações ficariam no backend!!
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',

            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                //console.log(data)
                //redirect
                navigate('/projects', {state: { message: 'Projeto criado com SUCESSO!' }})
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className={style.newprojct_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto, para depois adicionar os serviços.</p>

            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}

export default NewProject