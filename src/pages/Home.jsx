import Card from "../components/Card";

const Home = () => {
  return (
    <div className="page-container">
      <div className="home">
        <Card
          title="Article Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing..."
          imagePosition="left"
        />
        <Card
          title="Article Title"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing..."
          imagePosition="right"
        />
      </div>
    </div>
  );
};

export default Home;