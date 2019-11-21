const BaseService = require('./base-service');
const TicketMachineModel = require('../models/ticketmachine');

class TicketMachineService extends BaseService {
    model = TicketMachineModel;
}

module.exports = new TicketMachineService();