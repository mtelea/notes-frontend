import { useRef } from "react";
import useForm from "./UseForm";

const SERVER_ENDPOINT = "http://localhost:8888/add"; 

const Form = () => {
  const formElement = useRef(null);


  const { handleSubmit, status, message } = useForm({
    form: formElement.current
  });

  if (status === "success") {
    return (
      <>
        <div>Note created</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>An error occured</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={SERVER_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Note title"
          name="title"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Note content"
          name="content"
          required
        />
      </div>
      {status !== "loading" && (
        <div className="mb-3 pt-0">
          <button type="submit">
            Create note
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;