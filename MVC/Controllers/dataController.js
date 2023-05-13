import {listAll} from '../Models/dataModel.js'
import { dataView } from '../Views/dataView.js';
export async function getAll(res)
{   
    const products = await listAll();
    const view = await dataView(products);
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(view);
    res.end();
}