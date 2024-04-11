import { Link } from "react-router-dom";

const Poster1 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/Hng57xp/four-beautiful-girls-resting-party.jpg)",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
      <div className="hero-content lg:text-left text-center text-neutral-content">
        <div className="text-white space-y-7 w-4/5 lg:pr-36">
          <h2 className="lg:text-6xl text-4xl font-bold">
            Immerse in Unforgettable Experiences
          </h2>
          <p>
            From intimate gatherings to grand soirées, we curate bespoke private
            events that resonate with exclusivity and personal touch. Let's
            transform your vision into a captivating reality.
          </p>
          <div className="space-y-2">

            <Link to={'/services'} className="btn btn-primary border-none text-[#f100b9f4] bg-orange-400 mr-5">
              Discover Services
            </Link>
            <button className="btn btn-outline   btn-secondary">
              Create Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster1;
