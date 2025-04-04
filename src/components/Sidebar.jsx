import Avatar from "../img/avatar.jpg";
import "../styles/components/sidebar.sass";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

const Sidebar = () => {
  return <aside id='sidebar'>
    <img src={Avatar} alt="Caio Henrique" />
    <p className='title'>Desenvolvedor</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className='btn'>Download Curricolo</a>
    </aside>
}

export default Sidebar