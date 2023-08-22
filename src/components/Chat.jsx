import React from "react";

const Chat = () => {
    return (
        <div className="chat">
            <div className="container">
                <div className="chat__container">
                    <div className="chat__text">
                        <h3 className="chat__title">¿Tienes alguna duda?</h3>
                        <p className="chat__description">
                            Charlemos y te ayudaré a lograr tus objetivos.
                            ¡Estoy aquí para acompañarte en este viaje!
                        </p>
                        <input
                            type="text"
                            className="chat__button"
                            value="Hablemos x WhatsApp"
                        />
                        <div className="chat__numbers">
                            <div className="chat__number">
                                <p className="chat__quantity">+64</p>
                                <p className="chat__quality">Landing Pages</p>
                            </div>
                            <div className="chat__number">
                                <p className="chat__quantity">85%</p>
                                <p className="chat__quality">
                                    Crecimiento de negocio
                                </p>
                            </div>
                        </div>
                    </div>
                    <video
                        className="chat__video"
                        controls
                        muted
                        autoPlay={"autoplay"}
                        src="https://criscreatyvo.ar/wp-content/uploads/2023/07/Webiner-video-Jim-Fahad-Digital.mp4"
                    ></video>
                </div>
            </div>
        </div>
    );
};

export default Chat;
