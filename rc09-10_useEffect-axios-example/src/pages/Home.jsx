import AddTutorial from '../components/AddTutorial';
import TutorialList from '../components/TutorialList';
import axios from "axios";
import { useState, useEffect} from 'react';

const Home = () =>{
  const [tutorials, setTutorials] = useState();
  const url = 'https://tutorials-api-cw.herokuapp.com/api/tutorials';

  const getTutorials = async() =>{
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);  
    };
  };

  //! Sadece Component mount olduğunda istek yapar.
  useEffect(() => {
    getTutorials();
  }, []);
  
  return (
    <>
      <AddTutorial/>
      <TutorialList tutorials={tutorials}/ >
    </>
  );
};

export default Home;
