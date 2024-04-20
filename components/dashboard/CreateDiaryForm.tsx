import React from "react";
import { createDiaryAction } from "@/actions/createDiaryAction";

const CreateDiaryForm = (): React.ReactElement => {
  return (
    <form
      action={createDiaryAction}
      className="flex flex-col gap-4 max-w-xl mx-auto"
    >
      <textarea
        placeholder="isi diary kamu disini..."
        className="h-52 p-4 text-lg border border-primary textarea"
        name="content"
      />
      <button className="btn btn-primary" type="submit">
        Create Now
      </button>
    </form>
  );
};

export default CreateDiaryForm;
