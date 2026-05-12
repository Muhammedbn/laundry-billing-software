const Role = require('../models/Role');

exports.getRoles = async (req, res) => {
  try {
    let roles = await Role.find();
    
    // Seed default roles if none exist
    if (roles.length === 0) {
      roles = await Role.insertMany([
        { 
          name: 'Super Admin', 
          slug: 'super_admin', 
          isSystem: true,
          permissions: {
            dashboard: true, pos: true, orders: true, customers: true, 
            services: true, reports: true, expenses: true, accounts: true, 
            settings: true, users: true 
          }
        },
        { 
          name: 'Manager', 
          slug: 'manager', 
          isSystem: true,
          permissions: {
            dashboard: true, pos: true, orders: true, customers: true, 
            services: true, reports: true, expenses: true, accounts: true, 
            settings: true, users: true 
          }
        },
        { 
          name: 'Cashier', 
          slug: 'cashier', 
          isSystem: true,
          permissions: {
            dashboard: false, pos: true, orders: true, customers: true, 
            services: false, reports: false, expenses: false, accounts: false, 
            settings: false, users: false 
          }
        }
      ]);
    }
    
    res.json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRolePermissions = async (req, res) => {
  try {
    const { permissions } = req.body;
    const role = await Role.findByIdAndUpdate(
      req.params.id, 
      { permissions }, 
      { new: true }
    );
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
