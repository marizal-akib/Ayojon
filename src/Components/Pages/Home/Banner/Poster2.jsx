import { Link } from "react-router-dom";

const Poster2 = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/c64WLsc/female-wedding-planner-working-with-bride-groom.jpg)",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
      <div className="hero-content lg:text-left text-center text-neutral-content">
        <div className="text-white space-y-7 w-4/5 lg:pr-36">
          <h2 className="lg:text-6xl text-4xl font-bold">
            Spark Joy, Celebrate Milestones
          </h2>
          <p>
            Life's special moments deserve grand celebrations. Whether it's a
            milestone birthday, a jubilant anniversary, or a festive gathering,
            we create celebrations that echo with joy, laughter, and
            unforgettable memories.
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

export default Poster2;
