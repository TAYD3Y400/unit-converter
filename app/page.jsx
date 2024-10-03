import Form from "@components/Form";

const Home = () => {

  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Welcome to my
          <br className="max-md:hidden" />
          <span className="red_gradient text-center">Unit Converter Tool</span>
        </h1>
        <p className="desc text-center">
          A web app that can convert between different units of measurement. It
          can convert units of length, weight and temperature. The user can
          input a value and select the units to convert from and to.
        </p>
      </section>
      <br />
      <Form />
      <br />
    </div>
  );
};

export default Home;
