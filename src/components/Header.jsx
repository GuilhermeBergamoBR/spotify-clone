import logoImg from "../assets/Spotify_Primary_Logo_RGB_White.png";
import homeIcon from "../assets/Vector.svg";
import browseIcon from "../assets/icons/browse-icon.png";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center h-16 w-full p-2 relative bg-black">
      <div id="spotify-logo">
        <button className="p-2" onClick={() => {}}>
          <img src={logoImg} alt="Spotify" className="h-8" />
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <button className="flex items-center justify-center rounded-4xl p-3 bg-[#1F1F1F]">
          <img src={homeIcon} height={22} width={22} alt="Início" />
        </button>
        <input
          type="text"
          className="p-3 rounded-full w-lg bg-[#1F1F1F]"
          placeholder="O que você quer ouvir?"
        />
        <button>
          <img src={browseIcon} height={35} width={35} alt="Navegar" />
        </button>
      </div>
      <div className="right-menu">
        <button>Novidades</button>
        <button>Atividade de amigos</button>
        <button>Nome do usuário</button>
      </div>
    </header>
  );
}

export default Header;
