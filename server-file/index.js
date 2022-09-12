const express = require('express');
const bodyParser = require('body-parser');
require('./mongodbconn/mongocon.js');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const coll = require('./models/model.js');
const taskdb = require('./models/tasks.js');
const taskz = require('./taskss.js');

// const tsk = require('./models/tasks.js');
const PORT = 5000;


// body parser for json request response
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//  using cors
app.use(cors());

app.use(taskz);

app.post('/reg', async (req, res) => {
    const user = new coll(req.body);

    // to see users abck deatils from database
    console.log(`andddddddddddd ->>>>>> ${user._doc.em}`);
    try {
        await user.save();
        let snd = user._doc;
        const tkk = snd._id.toString();
        let tokens = jwt.sign({ _id: tkk }, 'hello');

        res.send({ st: "ok saved to databased",tokens:tokens });
    }
    catch (err) {
        console.log(err);
        res.send(`Some error occured -> ${err}`);
    }
});

app.post('/login', async (req, res) => {
    try {
        const nm = await coll.findlogincre(req.body.em, req.body.pass);
        
        const users_det = nm._doc._id;
        let tokens = jwt.sign({ _id: users_det.toString() }, 'hello');
        res.header("auth-token", tokens).send({ "token": tokens,st:'ok' });

    }
    catch (err) {
        res.send({ st: `${err}` });
    }
});

// task view only
app.post('/dash',async (req,res) => {
    const tok = req.headers.authorization;
    const token = tok.split(' ')[1];

    try {
        const chk = jwt.verify(token, 'hello');
        const user = await coll.findOne({ _id: chk._id});
        const val = await user.populate({ path: 'taskss' });
        // console.log(` kelvan ::::::: ${typeof val.taskss} and  ${val.taskss[0].desc}`);
        if (!user) {
            throw new Error('Not authenticated');
        }
        
        const user_t_id = val.taskss;
        res.send({st:'ok',mess:user_t_id});
    }
    catch (err) {
        res.status(404).send({st:`authentication errorr ->${err}`});
    }
});

// task insertion
app.post('/dashh', async (req, res) => {
    const tok = req.headers.authorization;
    const token = tok.split(' ')[1];

    const chk = jwt.verify(token, 'hello');
    const al = req.body;

    const task = new taskdb({
        ...al,
        owner: chk._id
    });

    try {
        await task.save();
        res.send({st:'saved description to task',mess:"ok"});
    }
    catch (err) {
        res.status(405).send({st:`error occured -> ${err}`});
    }
});

// deleting task 
app.post('/delete', async (req,res) => {
    const val = req.body.param;
    const obj = {_id:val};
    try {
        taskdb.remove(obj,function(err,objs){
            if(!objs.acknowledged){
                throw new Error(`${err}`);
            };
            res.send({st:'ok',mess:objs.deletedCount});
        });
    }
    catch(err) {
        res.send({st:err});
    }
});

// delete all
app.post('/deleteall', async (req,res) => {
    const taskid = req.body.par;
    const obj = {_id:taskid};
    
    try {
        const user = await taskdb.findOne(obj);
        const userid = user.owner.toString();

        const user1 = await coll.findOne({ _id: userid});
        const val = await user1.populate({ path: 'taskss' });

        if(!val.taskss){
            throw new Error('Not Found');
        };

        let cnt = 0;
        val.taskss.map((ele) => {
            taskdb.deleteOne({_id:ele._id});
            cnt++;
        });

        res.send({st:'ok',mess:cnt});
    }
    catch(err) {
        res.send({st:err});
    }
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));