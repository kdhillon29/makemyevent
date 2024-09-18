import { connectToDatabase } from "@/lib/database";
import { handleError } from "@/lib/utils";
import { CreateUserParams } from "@/types";
import User from "@/lib/database/models/user.model";

export async function createUser(user: CreateUserParams) {
  try {
    console.log("in create user");

    await connectToDatabase();

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("in create user error: " + error);

    handleError(error);
  }
}
