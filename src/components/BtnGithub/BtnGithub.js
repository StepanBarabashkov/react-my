import "./style.css"
import img2 from "./gitHub-black.svg"

const BtnGithub = ({link}) => {
    return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
        <img src={img2} alt="" />
        GitHub repo
    </a>
    );
}

export default BtnGithub;