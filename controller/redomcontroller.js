const Product = require("../models/schima");
module.exports.createitem = async (req,res) =>{
    try {
        const {company , name , featured , sort , select} = req.query;

        const quartOBJ = {};
        
        if(company){
            quartOBJ.company = company;
        }
        if(name){
            quartOBJ.name = { $regex: name, $options : "i"};
        }
        if(featured){
            quartOBJ.featured = featured;
        }
        let apiData = Product.find(quartOBJ);
        if(sort){
            let sortFix = sort.split(",").join(" ");
            apiData = apiData.sort(sortFix);
        }
        if(select){
            let selectFix = select.split(",").join(" ");
            apiData = apiData.select(selectFix);
        }

        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 8;
        let skip = (page-1)*limit;
        apiData = apiData.skip(skip).limit(limit);
        const mydata =await apiData;
        const message = "WELCOME TO THE MY NEW PRODUCTS API";
       res.status(200).json({message,mydata}); 
    } catch (error) {
        console.error('Error in assigning create', error);
        res.status(500).json({ message: 'Create assignment failed' });
    }
}

module.exports.deleteitem = async (req,res) =>{
    try {
       res.status(200).json({massage : "hello guys delete api is still prepar for input taking"}) 
    } catch (error) {
        console.error('Error in assigning delete', error);
        res.status(500).json({ message: 'delete assignment failed' });
    }
}