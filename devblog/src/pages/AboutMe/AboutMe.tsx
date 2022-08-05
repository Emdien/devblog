import React from "react"
import styles from './AboutMe.module.scss'

const AboutMe = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3>¿Quién soy?</h3>
                <p>Hola, soy Gonzalo Nicolás Martínez, conocido como Emdien o MdN por las redes. Soy un graduado en ingeniería del software en la Universidad de Murcia, con una gran pasión por la programación, ya sea del desarrollo de webs y aplicaciones webs, como de aspectos centrados en backend y DevOps.</p>
                <h3>¿Que es lo que se puede encontrar en este devblog?</h3>
                <p>En este devblog pretendo publicar distintas experiencias que he ido encontrando conforme he realizado distintos proyectos y experimentos a lo largo de los años. Todo esto se encuentra en el rango tanto de pequeños trucos de ciertas tecnologías, distintas formas de realizar algunas tareas las cuales es posible que sean difíciles de encontrar una solución en internet, así como el proceso de desarrollo de algunos de los proyectos que he ido realizado, los cuales puede proporcionar conocimientos de interés para personas que puedan realizar proyectos similares.</p>
                <h3>¿Por qué he desarrollado esta página?</h3>
                <p>Esta cuestión siempre se encuentra presente. Es mucho más fácil utilizar una plataforma ya desarollada con una amplia comunidad, tal como Dev.to o Medium, pero sinceramente quería desarrollar una página web desde 0 utilizando React, simplemente para poner en práctica los distintos conocimientos que he ido adquiriendo en los últimos años. Además, el realizar el proceso de desarrollo desde 0 y terminar desplegando el propio proyecto es increíblemente satisfactorio.</p>
                <h3>El objetivo</h3>
                <p>Sinceramente, esta página simplemente tiene como objetivo ser un lugar para escribir sobre mis experiencias. No me importa si llega a mucha o poca gente, o incluso si no le llega a nadie. Simplemente es un proyecto en el cual me he divertido aprendiendo, y espero que otras personas puedan hacer lo mismo.</p>
            </div>
        </div>
    )
}

export default AboutMe;