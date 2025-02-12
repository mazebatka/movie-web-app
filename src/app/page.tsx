type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getTodos = async () => {
  const res= await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
  }

const Home= async() => {
  const todos: Todo[] = await getTodos();
  
  return (
    <div 
    className="flex flex-col
    justify-center  ">
      {todos.length == 0?
      "Loading...":
      todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}:{todo.title}
        </div>
      ))}

    </div>
  );
};

export default Home;