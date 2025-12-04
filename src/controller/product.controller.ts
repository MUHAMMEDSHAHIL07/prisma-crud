import { Request, Response } from "express";
import { createProductService, getProductsService, getProductByIdService, updateProductService, deleteProductService } from "../services/product.service";

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await createProductService(req.body);
        res.json(product);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getProductsService();
        res.json(products);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await getProductByIdService(req.params.id);
        if (!product) {
            res.status(404).json({ error: "Product not found" });
            return;
        }
        res.json(product);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await updateProductService(req.params.id, req.body);
        res.json(product);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await deleteProductService(req.params.id);
        res.json({ message: "Product deleted", product });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
