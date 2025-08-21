import React from "react";
import "../media.css";

const testimonials = [
  {
    text: "Increasy has been a game-changer for our team. We save hours each week and the collaboration tools are fantastic.",
    name: "Mike T.",
    role: "Project Manager",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    text: "The automation features alone have saved us so much time. Increasy is a must-have for any growing team.",
    name: "John P.",
    role: "Marketing Director",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    text: "Our productivity has never been higher. Increasy’s tracking tools keep us aligned and motivated.",
    name: "Phillip W.",
    role: "Operations Lead",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    text: "With Increasy, our productivity soared. I spend less time on repetitive tasks and more time on real development work.",
    name: "Carlos R.",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    text: "Since adopting Increasy, I’ve seen a big boost in my productivity. It keeps me organized and lets me focus.",
    name: "David K.",
    role: "Sales Executive",
    image: "https://i.pravatar.cc/100?img=5",
  },
];

const Testimonial: React.FC = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">Beoordelingen Van Klanten</h2>
      <div className="testimonial-container">
        {[0, 1].map((row) => (
          <div className="testimonial-row-wrapper" key={row}>
            {/* gradient overlays */}
            <div className="fade-left"></div>
            <div className="fade-right"></div>

            <div
              className={`testimonial-slider ${
                row === 1 ? "reverse" : ""
              }`}
            >
              {[...testimonials, ...testimonials].map((item, idx) => (
                <div className="testimonial-card" key={row + "-" + idx}>
                  <p className="testimonial-text">{item.text}</p>
                  <div className="testimonial-footer">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial-img"
                    />
                    <div className="testimonial-info">
                      <h4>
                        {item.name},{" "}
                        <span>{item.role}</span>
                      </h4>
                      <div className="testimonial-stars">
                        {"★".repeat(5)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
