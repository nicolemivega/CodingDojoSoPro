const Concert = require('../models/indie.model'); 

// const registerUser = (req, res) => {
//     try {
//         const {name, email, password} = req.body;
//         if(!name) {
//             return res.json({
//                 error: 'Please enter an artist/band name.'
//             })
//         };
//         if(!password || password.length < 8){
//             return res.json({
//                 error: 'Password must be at least 8 characters long.'
//             })
//         };
//         const exist = await Concert.findOne({email});
//         if(exist) {
//             return res.json({
//                 error: 'Email already in use.'
//             })
//         };
//         const user = await Concert.create({
//             name, email, password
//         })
//         return res.json(user)
//     } catch (error) {
//         console.log(error);
//     }
// };

module.exports = {
    findAll: (req, res) => {
        Concert.find()
            .then(allConcerts => res.json(allConcerts))
            .catch((err) => res.json(err))
    },

    findOne: (req, res) => {
        Concert.findById(req.params.id)
            .then(oneConcert => res.json(oneConcert))
            .catch((err) => res.json(err))
    },

    create: (req, res) => {
        Concert.create(req.body)
            .then(newConcert => res.json(newConcert))
            .catch((err) => res.status(400).json(err))
    },

    update: (req, res) => {
        Concert.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedConcert => res.json(updatedConcert))
            .catch((err) => res.status(400).json(err))
    },

    delete: (req, res) => {
        Concert.findByIdAndDelete(req.params.id)
            .then(deletedConcert => res.json(deletedConcert))
            .catch((err) => res.json(err))
    }
}
