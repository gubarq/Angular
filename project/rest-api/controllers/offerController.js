const { offerModel } = require('../models');
function getOffers(req, res, next) {
    offerModel.find()
        .populate('_ownerId')
        .then(offers => res.json(offers))
        .catch(next);
}

function getOffer(req, res, next) {
    const { offerId } = req.params;

    offerModel.findById(offerId)
        .populate({
            path : 'posts',
            populate : {
              path : '_ownerId'
            }
          })
        .then(offer => res.json(offer))
        .catch(next);
}

function createOffer(req, res, next) {
    const { title, category, imageUrl, description, requirements, salary } = req.body;
    const { _id: _ownerId } = req.user;

    offerModel.create({ title, _ownerId, category, imageUrl, description, requirements, salary })
        .then(offer => {res.status(200).json(offer)})
        .catch(next);
}



module.exports = {
    getOffers,
    createOffer,
    getOffer
}
