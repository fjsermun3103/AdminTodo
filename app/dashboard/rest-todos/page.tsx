import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/app/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'Esto es un listado de todos',
};


export default async function RestTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  
  return (
    <div>
      {/* TODO: Formulario para agregar */}
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos}/>
    </div>
  );
}