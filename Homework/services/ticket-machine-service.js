const BaseService = require('./base-service');
const TicketMachineModel = require('../models/ticketmachine');

class TicketMachineService extends BaseService {
    constructor() {
        super(TicketMachineModel, `${__dirname}/../ticket-machine-database.json`);
    }
}

module.exports = new TicketMachineService();