

const Events = () => {
  const handleClick = () =>{
    alert("Btn Clicked");
  };
  return (
    <div className="container text-center mt-4">
      <button onClick={handleClick} className="btn btn-warning">Click</button>
    </div>
  );
};

export default Events;