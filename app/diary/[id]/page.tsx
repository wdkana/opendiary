import CreateCommentForm from "@/components/auth/CreateCommentForm";
import CommentList from "@/components/global/(diary)/CommentList";
import Wrapper from "@/components/global/Wrapper";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

type ParamsProps = {
  params: {
    id: number;
  };
};

const page = async ({ params }: ParamsProps) => {
  const { data, error } = await supabase
    .from("diaries")
    .select()
    .eq("id", params.id)
    .single();

  if (error) return <p>Please reload the page...</p>;

  const posted_at = new Date(data.created_at).toLocaleDateString();

  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col mx-auto justify-center">
          <Image src={data.avatar} alt={data.avatar} width={250} height={250} />
          <i className="text-center">posted at {posted_at}</i>
        </div>
        <h3 className="italic text-xl font-bold">
          ~{data.username || data.email}
        </h3>
        <p className="text-lg">{data.content}</p>

        <CommentList diary_id={data.id} />
        <CreateCommentForm diary_id={data.id} />
      </div>
    </Wrapper>
  );
};

export default page;
