import { useForm } from "react-hook-form";

function TaskFormPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
<div className="flex h-[calc(100vh-100px)] items-center justify-center">
<div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-2"
        ></textarea>
        <button>Save</button>
      </form>
    </div>
</div>
  );
}

export default TaskFormPage;
