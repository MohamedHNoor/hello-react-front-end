import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/reducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  const GreetingStyle = {
    backgroundColor: 'white',
    color: 'lightgreen',
    fontSize: '2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
    padding: '25px',
    borderRadius: '5px',
  };

  const LoadingStyle = {
    color: 'lightgreen',
    fontSize: '2rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  };

  if (greeting.length === 0) return <h2 style={LoadingStyle}>loading...</h2>;

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Refresh the page to generate Random Greetings
      </h1>
      <div>
        <h2 style={GreetingStyle}>{greeting.greeting}</h2>
      </div>
    </>
  );
};

export default Greeting;
