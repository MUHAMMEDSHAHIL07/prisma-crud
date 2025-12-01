import { createProductService,getProductsService,getProductByIdService,updateProductService,deleteProductService,} from "../services/product.service.js";

export const createProduct = async (req, res) => {
    try {
        const product = await createProductService(req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await getProductsService();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await getProductByIdService(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await updateProductService(req.params.id, req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await deleteProductService(req.params.id);
        res.json({ message: "Product deleted", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
