import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function ContactList() {
  return (
    <>
      <span className="w-full flex flex-row items-center mb-3">
        <FaLocationDot className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">
          Fianarantsoa, Matsiatra ambony, Madagascar
        </h1>
      </span>
      <span className="w-full flex flex-row items-center mb-3">
        <FaPhone className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">{"(+261) 34 92 787 61"}</h1>
      </span>
      <span className="w-full flex flex-row items-center mb-3">
        <FaPhone className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">{"(+261) 32 57 810 44"}</h1>
      </span>
      <span className="w-full flex flex-row items-center mb-3">
        <MdEmail className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">{"aidanecarlie@gmail.com"}</h1>
      </span>
      <a
        className="w-full flex flex-row items-center mb-3"
        href="https://github.com/FenoCarlie/"
      >
        <FaGithub className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">FenoCarlie</h1>
      </a>
      <a
        className="w-full flex flex-row items-center mb-3"
        href="www.linkedin.com/in/carlie-feno-516063240"
      >
        <FaLinkedin className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">Feno Carlie</h1>
      </a>
      <a
        className="w-full flex flex-row items-center mb-3"
        href="https://www.instagram.com/carliefeno/"
      >
        <FaInstagram className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">carliefeno</h1>
      </a>
      <a
        className="w-full flex flex-row items-center"
        href="https://www.facebook.com/aidane.feno"
      >
        <FaFacebook className="text-yellowClaire mr-3 h-8 w-8 " />
        <h1 className="text-grey1 text-md">Feno Carlie</h1>
      </a>
    </>
  );
}

export default ContactList;
