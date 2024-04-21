import { IComments, supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

type ParamsProps = {
  diary_id: number;
};

const CommentList = async ({ diary_id }: ParamsProps) => {
  const { data, error } = await supabase
    .from("diary")
    .select("comments")
    .eq("id", diary_id)
    .single();

  if (error) return <p>please reload the page...</p>;
  if (!data.comments?.length) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="divider"></div>
      {data.comments.map((comment: IComments) => {
        return (
          <div className="ml-4 card card-body card-bordered p-4 bg-base-200">
            <Image
              src={comment.avatar as string}
              alt={comment.avatar as string}
              width={50}
              height={50}
              className="rounded-full bg-primary"
            />
            <p>{comment.content}</p>
            <p>{comment.username || comment.email}</p>
          </div>
        );
      })}
      <div className="divider"></div>
    </div>
  );
};

export default CommentList;
