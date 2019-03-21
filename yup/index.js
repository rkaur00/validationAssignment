const { send, json } = require('micro')
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

    schema.validate(data)
       .then(function(valid){
       
             send(res, 200, data)
            
          
       }).catch(function(err){
        send(res, 400, err.errors)
    })
}

