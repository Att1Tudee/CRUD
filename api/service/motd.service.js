const motdRepository  = require('../repository/motd.repository');

class MotdService {

    constructor() {}

    async getMotds() {
        return await motdRepository.getMotds();
    }

    async createMotd(motd) {
        return await motdRepository.createMotd(motd,);
    }

    async updateMotd(motd) {
        return await motdRepository.updateMotd(motd);
    }

    async deleteMotd(motdId) {
        return await motdRepository.deleteMotd(motdId);
    }

}

module.exports = new MotdService();