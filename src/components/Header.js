import twitter from "./assets/twitter.png";
import discord from "./assets/discord.png";
import magiceden from "./assets/magiceden.png";

const Header = () => {
  return (
    // outer header container
    <div className="sticky top-0 z-50 shadow-lg bg-blue-300 flex p-4">
      {/* header left - social icons */}
      <div className="flex items-center p-1">
        {/* twitter */}
        <div className="rounded-lg mx-2">
          <a href="http://www.twitter.com/degodsnft">
            <img src={twitter} width={50} alt=""></img>
          </a>
        </div>
        {/* discord */}
        <div className="rounded-lg mx-2">
          <a href="http://www.discord.gg/degods">
            <img src={discord} width={50} alt=""></img>
          </a>
        </div>
        {/* magic eden */}
        <div className="rounded-lg mx-2 p-3">
          <a href="http://www.magiceden.io/marketplace/degods">
            <img src={magiceden} width={45} alt=""></img>
          </a>
        </div>
      </div>

      {/* header right: will be a Connect to Wallet button
      <div className="items-center p-1 justify-end hover:cursor-not-allowed">
          <div className="rounded-lg bg-white p-3">Connect Wallet</div>
      </div> */}
    </div>
  );
};

export default Header;