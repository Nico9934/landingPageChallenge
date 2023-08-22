import React from "react";

const Budget = () => {
    return (
        <>
            <div className="budget">
                <div className="container">
                    <div className="budget__container">
                        <div className="budget__text">
                            <h3 className="budget__title">
                                Descargar Presupuesto
                            </h3>
                            <p className="budget__description">
                                ¡Detén la búsqueda y toma el control! Activa tu
                                presencia y desata una avalancha imparable de
                                clientes potenciales.
                                <span>¡Es hora de vender!</span>
                            </p>
                            <button className="budget__button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 640 512"
                                >
                                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
                                </svg>
                                Descargar
                            </button>
                        </div>

                        <div className="budget__target">
                            <h4>Económico y poderoso</h4>
                            <p>Ahorra tiempo y dinero</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="perfil">
                <div className="container">
                    <div className="perfil__container">
                        <div className="perfil__text">
                            <h4 className="perfil__title">¿Hola, quien soy?</h4>
                            <p className="perfil__description">
                                Cristian Soria, apasionado especialista en
                                Landing Pages con más de 15 años de experiencia
                                en diseño. Desbloqueo el poder de estas páginas
                                para impulsar la conversión y lograr resultados
                                asombrosos. Mi enfoque combina ingenio, diseño
                                cautivador y estrategias altamente efectivas.
                                Proyectos colaborados han alcanzado cifras de
                                facturación superiores a 150k con landing pages
                                que realmente funcionan. Mi meta es potenciar
                                emprendedores, infoproductores y dueños de
                                negocios físicos y digitales, para que alcancen
                                y superen sus objetivos más ambiciosos. Desata
                                el verdadero potencial de tu negocio con mi
                                experiencia en diseño web y marketing digital.
                                Juntos, haremos que tu éxito sea inevitable.
                            </p>
                        </div>
                        <img
                            className="perfil__img"
                            src="https://criscreatyvo.ar/wp-content/uploads/2023/07/Captura-de-pantalla-2023-07-13-a-las-21.17.22.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Budget;
