import { BsGithub, BsLinkedin } from "react-icons/bs";
//will check between there two wich is better

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://linkedin.com/in/kujtim-sadiku-241973142"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/kujtimsadiku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
