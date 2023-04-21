import { roles } from "../models/roles.js"

export const newRole = async (req, res) => {
    const { tipo } = req.body
    try {
        const rol = await roles.create({
            tipo
        })
        res.json(rol)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}