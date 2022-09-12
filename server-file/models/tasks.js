const mongo = require('mongoose');
const sch = mongo.Schema;

const tasksss = new sch({
  completed:{
    type:Boolean,
    required:true,
    default:false
  },
  status:{
    type:Boolean
  },
  desc:{
    type:String,
    required:true,
    minLength:5,
    maxLength:100,
    validate(val){
      if(val.length < 5){
        throw 'Enter more text should be greater than 5';
      }

      if(val.length > 100){
        throw 'Enter less text should be less than 100';
      }
      
    }
  },
  owner:{
    type:mongo.Schema.Types.ObjectId,
    required:true,
    ref:'tasked'
  }
});

const task = mongo.model('tasks',tasksss);

module.exports = task;