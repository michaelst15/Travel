import mongoose from 'mongoose';

const db = mongoose.connection;

mongoose.connect(`mongodb+srv://misuto991:PWVJ5kQ6PwAVTCBa@cluster0.dcmjwb0.mongodb.net/user?retryWrites=true&w=majority`);

db.on('open', () => console.log('success connect'));
db.once('error', () => console.log('not connect'));

export default db;

