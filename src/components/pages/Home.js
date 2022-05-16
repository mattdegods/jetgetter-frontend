import lounge from "../assets/JetGetter_Lounge3.mp4";
import Header from "../Header";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.png";
import magiceden from "../assets/magiceden.png";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Header />
        <video
          src={lounge}
          muted
          autoPlay={"autoplay"}
          preload="auto"
          className="absolute z-10 w-full"
          // onClick={() => {
          //   transcendRef.current.scrollIntoView({ behavior: "smooth" });
          // }}
          loop
        >
          <source
            alt="clouds"
            type="video/mp4"
            // onClick={() => {
            //   transcendRef.current.scrollIntoView({ behavior: "smooth" });
            // }}
          />
        </video>
        <div className="absolute sm:top-20 top-[300px] left-0 right-0 z-30 mx-auto">
          <h1 className="text-lounge-gold text-center lg:text-[100px] md:text-[80px] sm:text-[60px] text-[80px]">
            JetGetter Club
          </h1>
        </div>
        <div className="absolute z-30 top-[420px] left-0 right-0 sm:hidden">
          <div className="flex items-center justify-center">
            {/* twitter */}
            <div className="rounded-lg mx-2">
              <a href="https://twitter.com/jetgetterclub">
                <img src={twitter} width={50} alt=""></img>
              </a>
            </div>
            {/* discord */}
            <div className="rounded-lg mx-2 opacity-50 hover:cursor-not-allowed">
              {/* <a href="http://www.discord.gg/degods"> */}
              <img src={discord} width={50} alt=""></img>
              {/* </a> */}
            </div>
            {/* magic eden */}
            <div className="rounded-lg mx-2 p-3 opacity-50 hover:cursor-not-allowed">
              {/* <a href="http://www.magiceden.io/marketplace/degods"> */}
              <img src={magiceden} width={45} alt=""></img>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
