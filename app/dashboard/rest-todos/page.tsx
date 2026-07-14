import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos";

export const metadata = {
  title: 'Listado de Todos',
  description: 'Esto es un listado de todos',
};


export default async function RestTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  
  return (
    <div>
      {/* TODO: Formulario para agregar */}
      <TodosGrid todos={todos}/>
    </div>
  );
}