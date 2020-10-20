const { SearchControllers }=require('../controllers')

const prefix='/api/search/'
module.exports=(app)=>{

    app.post(
        `${prefix}add/`,
        SearchControllers.addSearch,

    )
}