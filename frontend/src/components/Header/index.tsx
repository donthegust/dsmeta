import logo from "../../assets/img/red-logo.svg";
import logoGit from "../../assets/img/github.svg";
import "./styles.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                {/* <p>
                    Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                </p> */}
                <p>
                    Desenvolvido por <a href="https://github.com/DonTheGust">DonTheGust <img src={logoGit} className="git" /></a>
                </p>
            </div>
        </header>
    )
}

export default Header;