"use server"

import { getUserData } from "@/utils/clerk"
import { IComments, supabase } from "@/utils/supabase"
import { randomUUID } from "crypto"
import { Redirect } from "next"
import { redirect } from "next/navigation"

export const createCommentAction = async (formData: FormData): Promise<Redirect> => {
    const content = formData.get("content") as string
    const diary_id = formData.get("diary_id")
    const comment_id = randomUUID()

    const { avatar, email, username } = await getUserData()

    const data: IComments = { comment_id, avatar, email, username, content }

    //! Memeriksa komen terahir terlebih dahulu
    const getComment = await supabase.from("diary").select("comments").eq("id", diary_id).single()

    const existingComment: Array<IComments> = getComment.data?.comments || []

    //! tambahkan komen baru ke object comment sebelumnya yang ada di database
    const newComment = [...existingComment, data]

    await supabase.from("diary").update({ comments: newComment }).eq("id", diary_id)

    redirect(`/diary/${diary_id}`)
}