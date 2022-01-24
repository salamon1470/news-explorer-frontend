import facebook from "../../images/facebook.png"
import github from "../../images/github.png"

function Footer(props) {
    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; 2022 Supersite, Powered by News API</p>
            <div className="footer__navbar">
                <div className="footer__navbar-links">
                    <a href="/home" className="footer__navbar-links-home">{props.footerNavbarHomeLink}</a>
                    <a target="_blank" href="https://practicum.yandex.com/" className="footer__navbar-links-practicum" rel="noreferrer">{props.footerNavbarPracticumLink}</a>
                </div>
                <div className="footer__navbar-social">              
                    <a target="_blank" href="https://github.com/salamon1470/news-explorer-api" className="footer__navbar-social-github" rel="noreferrer">
                        <img src={github} alt="Github link"></img>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/" className="footer__navbar-social-facebook" rel="noreferrer">
                        <img src={facebook} alt="Facebook link"></img>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;