import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

export default function NewProject() {

    const navigate = useNavigate()

    function createPost(project) {

        // Inicializar cost e serviços
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', {
                    state: {
                        message: 'Projeto criado com sucesso!'
                    }
                })
            })
            .catch((err) => console.log("ERRO: " + err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar o serviço.</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}