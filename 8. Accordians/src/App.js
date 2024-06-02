import Accordion from "./Accordion";
import accordionData from "./utils/content.js";

const App = () => {
  return (
    <div>
      <h1 className="heading">Accordion Component</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => {
          return <Accordion title={title} content={content} key={Math.random() * 100} />;
        })}
      </div>
    </div>
  );
};

export default App;
