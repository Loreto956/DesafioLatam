import { models } from "../models/queries.js"

const notFound = (req, res) => {
    res.status(404).send("Not found")
};

const home = (req, res) => {
    res.send("Bienvenido My Precious Spa")
}

const getJoyas = async (req, res) => {
    try {
        const { limits = 10, page = 1, order_by = 'id_asc' } = req.query
        const joyas = await models.getJoyas({ 
            limits: parseInt(limits), 
            page: parseInt(page), 
            order_by 
        });
        res.json({
            totalJoyas: joyas.results.length,
            stockTotal: joyas.stockTotal,
            results: joyas.results,
            
        });
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getFiltroJoyas = async (req, res) => {
    try {
        const { precio_min, precio_max, categoria, metal } = req.query
        const joyas = await models.getFiltroJoyas(parseInt(precio_min), parseInt(precio_max), categoria, metal)
        res.json(joyas)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

const getJoyaById = async (req, res) => {
    try {
        const { id } = req.params;
        const joya = await models.getJoyaById(id)
        if (joya) {
            res.json(joya);
        } else {
            res.status(404).json({ error: 'Joya no encontrada' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};


export const controllers = {
    notFound,
    home,
    getJoyas,
    getFiltroJoyas,
    getJoyaById
}