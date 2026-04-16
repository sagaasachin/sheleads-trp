import profile from "../../assets/images/w5.jpg";

const Contact = () => {
  return (
    < section
      // ✅ IMPORTANT FOR SCROLL
      className="min-h-screen flex items-center justify-center px-6 -pt-15 pb-20 bg-white"
    >
      <div className="relative flex flex-col items-center">

        {/* 🔥 ROPE */}
        <div className="w-[3px] h-24 bg-gradient-to-b from-gray-200 to-gray-500"></div>

        {/* 🔥 HOOK */}
        <div className="w-10 h-10 rounded-full border-[3px] border-gray-800 flex items-center justify-center bg-gray-900 shadow-lg">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>

        {/* 🔥 BACK CARD */}
        <div className="absolute top-[130px] left-[-50px] w-[320px] h-[440px] bg-gradient-to-br from-gray-900 to-black rounded-2xl rotate-[-10deg] shadow-2xl flex items-center justify-center">
          <p className="text-white rotate-90 text-2xl font-semibold tracking-widest opacity-70">
            SheLeads
          </p>
        </div>

        {/* 🔥 FRONT CARD */}
        <div className="relative mt-4 w-[320px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-200">

          {/* SLOT */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#312e81] rounded-full shadow-inner"></div>

          {/* HEADER */}
          <div className="bg-gradient-to-r from-purple-700 via-pink-600 to-purple-700 text-white text-center py-4">
            <h2 className="text-lg font-bold tracking-wide">
              SheLeads@TRP
            </h2>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center mt-6">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="text-center px-6 mt-4">
            <h3 className="text-lg font-semibold text-gray-800 tracking-wide">
              Your Name
            </h3>

            <p className="text-sm text-purple-700 mt-1 uppercase tracking-wider font-medium">
              Student / Faculty Member
            </p>
          </div>

          {/* DIVIDER */}
          <div className="w-16 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mx-auto my-4 rounded"></div>

          {/* MESSAGE */}
          <div className="px-6 text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Girl Students and Female Faculty Members are Welcome to join
              our empowering community.
            </p>
          </div>

          {/* BUTTON */}
          <div className="p-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZKOYILk1XFgcCUCVN7wygcWmSC1VUfpCGVNhhtinXSVjX6g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 rounded-xl bg-gradient-to-r from-purple-700 to-pink-500 text-white font-semibold shadow-lg hover:shadow-pink-300/40 hover:scale-105 transition duration-300"
            >
              Join the Team
            </a>
          </div>

          {/* FOOTER */}
          <div className="text-center text-xs text-gray-400 pb-4 font-mono tracking-widest">
            ||||| |||| |||||
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;