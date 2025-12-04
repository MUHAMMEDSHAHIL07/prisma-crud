import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const createUserService = async (data: Prisma.UserCreateInput) => {
  return await prisma.user.create({ data });
};

export const getUserService = async () => {
  return await prisma.user.findMany();
};

export const updateUserService = async (id: string, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

export const deleteUserService = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};