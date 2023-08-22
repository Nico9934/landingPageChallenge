import ContactButton from "./ContactButton";

const Header = ({menuVisible, setMenuVisible}) => {
    const toogleMenu = () => {
        setMenuVisible(!menuVisible);
        console.log("Abriendo");
    };

    return (
        <>
            <div className="header_">
                <div className="header__container">
                    <div className="header__logo">
                        <img
                            className="header__logo__img"
                            src="https://criscreatyvo.ar/wp-content/uploads/2023/07/Cris.png"
                            alt="img_logo"
                        />
                    </div>
                    <div className="header__icon ">
                        <svg
                            onClick={toogleMenu()}
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 448 512"
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <ContactButton />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
