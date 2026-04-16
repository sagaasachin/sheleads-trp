import banner from "../../assets/banner.png";
import mvImage from "../../assets/images/mission.jpg";
import vImage from "../../assets/images/vission.jpg";

const About = () => {
  return (
    <section className="w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 md:py-24 font-[Poppins]">

      {/* 🔥 TOP IMAGE */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-center mb-16 md:mb-20">
        <img
          src={banner}
          alt="SRM TRP"
          className="w-full max-w-5xl md:max-w-6xl object-contain drop-shadow-xl"
        />
      </div>

      {/* 🔥 ABOUT */}
      <div className="max-w-5xl mx-auto text-center mb-24 md:mb-32 px-4 md:px-6">

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 md:mb-8 bg-gradient-to-r from-purple-900 via-pink-600 to-purple-800 text-transparent bg-clip-text">
          About SheLeads@TRP
        </h1>

        <p className="text-gray-800 text-base sm:text-lg md:text-2xl leading-relaxed font-medium">
          SheLeads@TRP is a dynamic student community dedicated to empowering women 
          through innovative leadership development and holistic growth.
        </p>

        <p className="mt-5 md:mt-6 text-gray-700 text-base sm:text-lg md:text-2xl leading-relaxed">
          Our mission is to ensure every member flourishes, leveraging her unique 
          talents to make meaningful contributions to her community and beyond.
        </p>

        <div className="mt-8 md:mt-10 w-24 md:w-28 h-[3px] bg-gradient-to-r from-purple-700 to-pink-500 mx-auto rounded-full"></div>
      </div>

      {/* 🔥 STACK SECTION */}
      <div className="space-y-16 md:space-y-32">

        {/* 🔥 MISSION */}
        <div className="relative md:sticky md:top-28 z-10 w-full">

          <div className="w-full bg-white shadow-xl md:shadow-2xl py-10 md:py-16 px-4 md:px-6">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={mvImage}
                  alt="Mission"
                  className="w-[95%] sm:w-[85%] md:w-[75%] rounded-xl shadow-md md:shadow-lg"
                />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-purple-800 to-pink-500 text-transparent bg-clip-text">
                  Our Mission
                </h2>

                <p className="text-gray-700 text-sm sm:text-base md:text-xl leading-relaxed">
                  At SheLeads@TRP, our goal is to motivate and enable women leaders 
                  in becoming confident leaders and change-makers in their respective 
                  domains and communities.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 🔥 VISION */}
        <div className="relative md:sticky md:top-36 z-20 w-full">

          <div className="w-full bg-gradient-to-br from-purple-900 via-pink-600 to-purple-800 text-white shadow-xl md:shadow-2xl py-10 md:py-16 px-4 md:px-6">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">

              {/* TEXT */}
              <div className="order-2 md:order-1">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 md:mb-4">
                  Our Vision
                </h2>

                <p className="text-sm sm:text-base md:text-xl leading-relaxed text-white/90">
                  Our vision for SheLeads@TRP is to foster an enabling environment 
                  that is inclusive and empowering to promote women as leaders and innovators.
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center order-1 md:order-2">
                <img
                  src={vImage}
                  alt="Vision"
                  className="w-[95%] sm:w-[85%] md:w-[75%] rounded-xl shadow-md md:shadow-lg"
                />
              </div>

            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default About; 