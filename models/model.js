const mongoose = require('mongoose');
const crypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost:27017/tasked');
// const jwt = require('jsonwebtoken');

const taskedsch = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  em:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    validate(val){
      if(!validator.isEmail(val)){
        throw new Error('Invalid Email !!!!!');
      }
    }
  },
  pass:{
    type:String,
    required:true,
    trim:true,
    minLength:7,
    validate(val){
      if(val.toLowerCase().includes('password')){
        throw new Error('Password cannot be taken take another !!!');
      }
    }

  },
  tokens:[{
    token:{
      type:String
    }
  }],
  avt:{
    data: Buffer,
    contentType: String
  }
},{
  timestamps: true
});

taskedsch.virtual('taskss', {
  ref: 'tasks',
  localField: '_id',
  foreignField: 'owner'
});

taskedsch.statics.findlogincre = async function(em,pass){
    const user = await games.findOne({em:em});
  
    if(!user){
      throw 'Invalid Credentials !!!!';
    }
  
    const cr = await crypt.compare(pass,user.pass);
    if(!cr){
      throw 'Invalid Credentials Either email or password!!@@';
    }

    return user;
  }


taskedsch.pre('save',async function(next){
    const user = this;
    if(user.isModified('pass')){
      user.pass = await crypt.hash(user.pass,8);
    }

    next();
});

const games = mongoose.model('tasked', taskedsch);
module.exports = games;