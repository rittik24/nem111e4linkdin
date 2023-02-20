const jwt = require("jsonwebtoken");
const { RegisterModel } = require("../models/user.model");
const authentication = (req, res, next) => {
    const { autharization } = req.headers;
    if (!autharization) {
        return req.status(401).send("not authorized")
    } else {
        const token = autharization.replace("Bearer", "");
        jwt.verify(token, "linkdinApp", (err, data) => {
            if (err) {
                console.log(err);
                return res.send("Login First")
            } else {
                const { _id } = data;
                RegisterModel.findById(_id).then(userData => {
                    req.user = userData;
                    next();
                })
            }
        })
    }
}
module.exports = {
    authentication
}