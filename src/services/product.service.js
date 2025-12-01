import prisma from "../prisma/client.js";

export const createProductService = async (data) => {
    return await prisma.product.create({ data });
};

export const getProductsService = async () => {
    return await prisma.product.findMany({
        include: { user: true }
    });
};

export const getProductByIdService = async (id) => {
    return await prisma.product.findUnique({
        where: { id: Number(id) },
        include: { user: true }
    });
};

export const updateProductService = async (id, data) => {
    return await prisma.product.update({
        where: { id: Number(id) },
        data,
    });
};

export const deleteProductService = async (id) => {
    return await prisma.product.delete({
        where: { id: Number(id) },
    });
};