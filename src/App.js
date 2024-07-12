import { useState } from "react";
import data from "./components/data";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function App() {
  const [index, setIndex] = useState(0);

  const handleClick = (order) => {
    setIndex(order);
  };

  return (
    <>
      <h1 className="main-heading">Experience</h1>
      <div className="underline"></div>
      <main className="main-container">
        <nav className="nav-bar">
          {data.map((job) => {
            const { company, id, order } = job;
            return (
              <button
                className="nav-btn"
                key={id}
                onClick={() => handleClick(order)}
              >
                {company}
              </button>
            );
          })}
        </nav>
        <article className="art-container" key={data[index].id}>
          <h3 className="title">{data[index].title}</h3>
          <div className="company-container">
            <h5 className="company">{data[index].company}</h5>
          </div>
          <p className="dates">{data[index].dates}</p>
          {data[index].duties.map((duty) => {
            return (
              <div className="duty-container">
                <MdKeyboardDoubleArrowRight className="arrow-btn" />
                <p className="duty">{duty}</p>
              </div>
            );
          })}
        </article>
      </main>
    </>
  );
}

export default App;
