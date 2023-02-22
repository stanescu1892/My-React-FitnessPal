import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getFilterData } from "../services/api";
import Card from "../components/card/card";

const Home = () => {
  const [filterCategories, setFilterCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getFilterInfo() {
      try {
        const res = await getFilterData();
        setFilterCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getFilterInfo();
  }, []);

  return (
    <>
      <div
        className="row fluid p-4 home-container"
        style={{ maxWidth: "70rem" }}
      >
        <div className="col-md-6">
          <p className="fs-1 text-decoration-underline">
            Welcome to my Fitness App
          </p>

          <p className="p-2">
            Introducing the ultimate fitness app for people who want to stay in
            shape, improve their health, and achieve their fitness goals! With
            our app, you'll have access to thousands of exercises and workouts
            that you can choose from based on your preferences, fitness level,
            and goals.
          </p>
          <p className="p-2">
            Whether you're into cardio, strength training, yoga, Pilates, or any
            other type of exercise, you'll find plenty of options in our app.
            We've partnered with top fitness experts and trainers to bring you
            the best exercises and workouts that are safe, effective, and
            enjoyable.
          </p>

          <p className="p-2">
            With our sign-in feature, you can create a personalized profile and
            save your workouts for easy access and tracking. No more scribbling
            notes on a piece of paper or trying to remember what you did last
            time. Our app will keep track of your progress, so you can see how
            far you've come and what you need to do next to achieve your goals.
          </p>

          <Link to="/login">Create Account</Link>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src="http://d205bpvrqc9yn1.cloudfront.net/0015.gif"
            alt="home exercise"
            width="100%"
          />
        </div>
      </div>
      <h4 className="text-center">
        Lots of exercises that can be filtered by{" "}
      </h4>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {filterCategories.map((obj) => (
          <Card
            key={obj.key}
            label={obj.label}
            gif={obj.gif}
            onClick={() => navigate(`/details/${obj.key}/${obj.label}`)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
