const mongoose = require('mongoose');
const User = require('./models/Staff');

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/laundry_saas');
    console.log('Connected to MongoDB');

    // Remove any old admin with this ID or phone to avoid unique conflicts
    await User.deleteMany({ $or: [{ userId: '142' }, { phone: '+971547825153' }, { name: 'muhammed' }] });
    
    const admin = new User({
      name: 'muhammed',
      phone: '+971547825153',
      password: '0000',
      pin: '0000',
      role: 'super_admin',
      shopId: 'SHOP_01',
      userId: '142'
    });

    await admin.save();
    console.log('--- Super Admin "muhammed" set successfully ---');
    console.log('User ID: 142');
    console.log('Phone: +971547825153');
    console.log('Password: 0000');
    console.log('PIN: 0000');

    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (err) {
    console.error('Seeding error:', err);
  }
};

seedSuperAdmin();
