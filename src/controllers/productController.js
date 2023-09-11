exports.create = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain product create information"
    })

 };


exports.read = async (req, res) => { 
    res.status(200).json({
        status:"success",
        data: "contain product read information"
    })
};


exports.delete = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain product delete information"
    })
 };


exports.update = async (req, res) => {
    res.status(200).json({
        status:"success",
        data: "contain product update information"
    })
};