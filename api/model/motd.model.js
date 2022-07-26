const mongoose = require('mongoose');

const motdSchema = new mongoose.Schema({ motd: 'string', 
                author: 'string', 
                status: 'string', 
                createDate: 'date', 
                updatedDate: 'date', 
                createdBy: 'string', 
                updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Motd = mongoose.model('motds', motdSchema);

module.exports = {
    Motd
}