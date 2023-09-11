exports.create = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain portfolio create information"
    })

 };


exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success",
        data: "contain portfolio read information"
    })
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain portfolio delete information"
    })
 };


exports.update = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain portfolio update information"
    })
};