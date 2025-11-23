
const Banner = () => {
  return (
    <div className="relative w-full h-[350px] rounded-xl overflow-hidden">
      {/* Background Image */}
      <img
        src="/sports.jpg"
        alt="sports"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Glassy Text Card */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-lg p-6 rounded-xl max-w-sm shadow-md">
        <h3 className="text-xl font-bold text-white mb-2">
          The most amazing sports
        </h3>
        <p className="text-white text-sm line-clamp-3">
          The stat that pops out to me most is his 19 turnover-worthy plays
          according to PFF. That leads the entire NFL. Jones looks like he's
          completely lost confidence. It's not just a quarterback problem in New
          England — he bears responsibility for his mechanics falling apart.
        </p>
      </div>
    </div>
  );
};

export default Banner;
