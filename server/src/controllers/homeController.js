
import {AddIrregularVerbs} from '../services/addIrregularVerbs'
import {GetIrregularVerbsPage} from '../services/getDataIrregularVerbsPage'
const getHomePage = (req, res) => {
    return res.send("Server is Running!");
    };
// const createNewUser = async (req, res) => {
//     let data = req.body; 
//     let result = await CreateUserServices(data.data);
//     return await res.status(200).json(result); 
// }
const addIrregularVerbs = async (req, res) => {
    let data = req.body;
    let result = await AddIrregularVerbs(data)
    return await res.status(200).json(result);
}

const getIrregularVerbsPage = async (req, res) => {
    let result = await GetIrregularVerbsPage()
    return await res.status(200).json(result);
}
    
module.exports = {
    getHomePage: getHomePage,
    addIrregularVerbs: addIrregularVerbs,
    getIrregularVerbsPage: getIrregularVerbsPage,
};
