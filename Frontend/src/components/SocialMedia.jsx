import { BsGithub, BsLinkedin } from "react-icons/bs";
//will check between there two wich is better

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
