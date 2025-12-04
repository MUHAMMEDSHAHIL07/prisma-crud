import { Request, Response } from "express";
import { createUserService, updateUserService, deleteUserService, getUserService } from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserService(req.body);
    res.json(user)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUserService()
    res.json(users)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.json({ message: "User deleted", user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
