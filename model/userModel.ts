import { model, Schema, Types } from "mongoose";

interface iUser {
  username: string;
  email: string;
  password: string;
  avater: string;
  avaterID: string;
  friends: Array<{}>;
  following: Array<{}>;
  follower: Array<{}>;
  posts: Array<{}>;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    avater: {
      type: String,
    },
    avaterID: {
      type: String,
    },
    friends: [
      {
        type: String,
      },
    ],
    following: [
      {
        type: String,
      },
    ],
    follower: [
      {
        type: String,
      },
    ],
    posts: [
      {
        type: Types.ObjectId,
        ref: "friends",
      },
    ],
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
