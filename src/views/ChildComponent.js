const ChildComponent = ({ onClick, count }) => {
    return (
      <button onClick={onClick}>
         Click me {count}
      </button>
    )
  };

  export default ChildComponent;
  