import { Link } from "react-router-dom";

const EmptyStatePage = () => {
  return (
    <>
      <h1>Todo List</h1>
      <Link to="/addnewtodo">
        <button>add todo</button>
      </Link>
      <p>nothing to do yet</p>
    </>
  );
};

export default EmptyStatePage;
