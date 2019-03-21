const express = require('express')
const app = express()

const yup = require('yup');

const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer(),
  email: yup.string().email(),
  

});


module.exports = async (req, res) => {
    const data = await json(req)
    schema.isValid(data)
       .then(function(valid){
         if (valid){
             send(res, 200, data)}
             else{
                 send(res, 400, "The data does not match with the input fileds")
             }
          
       }); 
}

