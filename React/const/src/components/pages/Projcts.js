import { useLocation } from 'react-router-dom'

import Message from "../layout/Message"

import Container from "../layout/Container"
import style from './Project.module.css'
import LinkButton from '../layout/LinkButton'

function Projects() {

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={style.project_container }>
            <div className={style.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message &&
                <Message type="error" msg={message} />}

            <Container customClass="start">
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects