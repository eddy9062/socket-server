import { Router, Request, Response} from "express";

export const route = Router();

route.get("/mensajes",( req: Request, res: Response) =>{
    res.json({
        ok: true,
        mensaje: "Todo esta bien!!"
    })
})

route.post("/mensajes",( req: Request, res: Response) =>{
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;

    res.json({
        ok: true,
        user: de,
        mensaje: cuerpo
    })
})

route.post("/mensajes/:id",( req: Request, res: Response) =>{
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id

    res.json({
        ok: true,
        id: id,
        user: de,
        mensaje: cuerpo
    })
})