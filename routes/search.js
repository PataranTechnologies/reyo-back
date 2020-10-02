const {SearchController}=require('../controllers')
const prefix='/api/search/'
module.exports=(app)=>{

    app.post(
        `${prefix}add/`,
        SearchController.addSearch,

    )
}