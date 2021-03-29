const users = [{
    id :1,
    displayName : 'ThanhLee',
    email: 'thanhle@gmail.com',
    password: '$2b$10$kCYDJyGR1kFSeiFPHytoMOrlUJOqg7rewK.Ww1a2zWQ6/ABHZ4fDu',
}];

exports.findByEmail = function(email){
    return users.find(u => u.email === email);
};

exports.findByID = function(ID){
    return users.find(u => u.id === ID);
};

