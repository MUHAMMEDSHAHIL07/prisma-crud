import { Prisma } from "@prisma/client";
import prisma from "../prisma/client";

export const createProductService = async (data: Prisma.ProductCreateInput) => {
    return await prisma.product.create({ data });
};

export const getProductsService = async () => {
    return await prisma.product.findMany({
        include: { user: true }
    });
};

export const getProductByIdService = async (id: string) => {
    return await prisma.product.findUnique({
        where: { id },
        include: { user: true }
    });
};

export const updateProductService = async (id: string, data: Prisma.ProductUpdateInput) => {
    return await prisma.product.update({
        where: { id },
        data,
    });
};

export const deleteProductService = async (id: string) => {
    return await prisma.product.delete({
        where: { id },
    });
};