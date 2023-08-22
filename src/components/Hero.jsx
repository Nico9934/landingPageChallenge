import React from "react";
import Header from "./Header";
import VideoIcon from "./VideoIcon";

const Hero = ({menuVisible, setMenuVisible}) => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__container">
                    <Header
                        menuVisible={menuVisible}
                        setMenuVisible={setMenuVisible}
                    />

                    <div className="hero__contain">
                        <div className="hero__text">
                            <h3 className="hero__title">
                                Mejora tus ingresos con una Landing Page
                            </h3>
                            <div className="hero__description">
                                <p className="hero__description__text hero__description__text__first">
                                    Prepárate para el despegue de tus ventas con
                                    mi fórmula secreta en landing pages! Di
                                    adiós al derroche de tráfico y dinero en
                                    campañas vacías. Estoy aquí para convertir
                                    tu inversión en ganancias. ¿Listo para el
                                    cambio?
                                </p>
                                <p className="hero__description__text hero__description__text__second">
                                    ¡Todos mis trabajos incluyen campaña
                                    publicitaria por 15 dias!
                                </p>
                                <p className="hero__description__text hero__description__text__third">
                                    ¡PAGA tu Landing page en{" "}
                                    <span>3 MESES!</span>
                                </p>
                                <p className="hero__description__text hero__description__text__four">
                                    ¡Transforma cada visita en una venta exitosa
                                    y rentable!
                                </p>
                            </div>

                            <div className="hero__buttons">
                                <input type="button" value={"Agendar cita"} />
                                <div className="hero__checkicon">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="hero__clients">
                                <img
                                    className="hero__clients__img"
                                    src="https://criscreatyvo.ar/wp-content/uploads/2023/07/People-in-Banner-Jim-Fahad-Digital.png"
                                    alt=""
                                />
                                <div className="hero__clients__description">
                                    + 60 personas{" "}
                                    <span>crecieron su negocio</span>
                                </div>
                            </div>
                        </div>
                        <div className="hero__animation">
                            <img
                                src="https://criscreatyvo.ar/wp-content/uploads/2023/07/Hero-Banner-Img1-Jim-Fahad-Digital-1-600x703.png"
                                alt=""
                            />
                            <div className="hero__videoIcon">
                                <VideoIcon />
                                <p className="hero__videoIcon__text">
                                    ¡Mirar video!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
