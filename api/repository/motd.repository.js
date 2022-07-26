const { connect, disconnect } = require('../config/db.config');
const { Motd } = require('../model/motd.model');
const logger = require('../logger/api.logger');

class MotdRepository {

    constructor() {
        connect();
    }

    async getMotds() {
        const motds = await Motd.find({});
        console.log('motds:::', motds);
        return motds;
    }

    async createMotd(motd) {
        let data = {};
        try {
            data = await Motd.create(motd);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateMotd(motd) {
        let data = {};
        try {
            data = await Motd.updateOne(motd);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteMotd(motdId) {
        let data = {};
        try {
            data = await Motd.deleteOne({_id : motdId});
        } catch(err) {
            logger.error('Error::' + err);
        }
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new MotdRepository();