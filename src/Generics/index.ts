interface TodoItem {
  taskId: number;
  task: string | number;
  done: boolean | string;
}
{
  let id: number = 0;
  let todoList: Array<TodoItem> = [];

  function printTodos(): void {
    console.log(todoList);
  }

  function addTodo(item: string): void {
    todoList.push({ taskId: id++, task: item, done: false });
  }

  function addTodoNumber(item: number): void {
    todoList.push({ taskId: id++, task: item, done: false });
  }

  addTodo("Learn TypeScript");
  addTodoNumber(22);
  printTodos();
}

// Solution

let id: number = 0;
let todoList = [];

function addTodo<T, S>(item: T, status: S): void {
  todoList.push({ taskId: id++, task: item, done: status });
}
addTodo<string, boolean>("Learn TypeScript", true);
addTodo<number, string>(22, "false");

// function getData(data: string | number | boolen) {
//   return data;
// }
function getData<T>(data: T) {
  return data;
}

const s = getData<string>("Hello");
const n = getData<number>(23);

