import NewTask from "./NewTask"

export default function Tasks(){
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-green-800">TASKS</h2>
      <NewTask/>
      <p className="text-green-800 my-4">This project does not have any tasks yet</p>
      <ul>

      </ul>
    </section>
  )
}