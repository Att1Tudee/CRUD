const motdService  = require('../service/motd.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getMotds() {
        logger.info('Controller: getMotds')
        return await motdService.getMotds();
    }

    async createMotd(motd) {
        logger.info('Controller: createMotd', motd);
        return await motdService.createMotd(motd);
    }

    async updateMotd(motd) {
        logger.info('Controller: updateMotd', motd);
        return await motdService.updateMotd(motd);
    }

    async deleteMotd(motdId) {
        logger.info('Controller: deleteMotd', motdId);
        return await motdService.deleteMotd(motdId);
    }
}
module.exports = new TodoController();