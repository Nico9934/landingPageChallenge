import {useState} from "react";
import "./App.css";
import Budget from "./components/Budget";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import Goals from "./components/Goals";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Menu from "./components/Menu";
import NewsLetter from "./components/NewsLetter";
import Questions from "./components/Questions";
import "./scss/app.scss";

function App() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            {/* <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible} /> */}
            <Hero menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
            <NewsLetter />
            <Info />
            <Goals />
            <Budget />
            <Questions />
            <Chat />
            <Footer />
        </>
    );
}

export default App;
