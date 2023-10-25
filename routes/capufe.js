
import { Router } from 'express';

import {contenido1Get, contenidoGet, tokenGet,tokenPost} from '../controllers/capufe.js'

const routerCapufe=Router()


routerCapufe.get('/LoginRequest', tokenGet );
routerCapufe.get('/RFIDRequest', contenidoGet);
routerCapufe.get('/codeBarRequest', contenido1Get)


routerCapufe.post('/', tokenPost );









export default routerCapufe