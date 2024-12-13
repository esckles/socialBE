import { model, Schema } from "mongoose";

interface iComment {
  title: string;
  userID: string;
}

interface iCommentData extends iComment, Document {}

const commentPostModel = new Schema<iCommentData>(
  {
    title: {
      type: String,
    },
    userID: {
      type: String,
    },
  },
  { timestamps: true }
);

export default model<iCommentData>("posts", commentPostModel);
