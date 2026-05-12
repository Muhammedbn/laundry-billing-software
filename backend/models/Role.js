const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true }, // e.g., 'super_admin'
  permissions: {
    dashboard: { type: Boolean, default: false },
    pos: { type: Boolean, default: false },
    orders: { type: Boolean, default: false },
    customers: { type: Boolean, default: false },
    services: { type: Boolean, default: false },
    reports: { type: Boolean, default: false },
    expenses: { type: Boolean, default: false },
    accounts: { type: Boolean, default: false },
    settings: { type: Boolean, default: false },
    users: { type: Boolean, default: false }
  },
  isSystem: { type: Boolean, default: false } // To prevent deleting default roles
}, { timestamps: true });

module.exports = mongoose.model('Role', roleSchema);
