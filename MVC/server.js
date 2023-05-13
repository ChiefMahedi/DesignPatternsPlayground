
import http from 'http';
import {getAll} from './Controllers/dataController.js'

const server = http.createServer((req, res)=>{
    if(req.url==='/api' && req.method === 'GET')
    {
      getAll(res);
    }
    else
    {
        res.writeHead(404,{'Content-Type': 'application/json'});
        //WITHOUT JSON.stringyfy it will show error because it expects string arg but products is array of objects
        res.write(JSON.stringify({ErrorMessage: 'Wrong URL'}));
        res.end();
    }

});
const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log('Server Running on port:'+PORT));