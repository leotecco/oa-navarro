const User = require("./../models/user");

exports.post = (data) => {
  const user = new User(data);

  return user.save();
};

exports.get = () => {
  return User.find();
};

exports.getById = (id) => {
  return User.findById(id);
};

exports.put = (id, data) => {
  return User.findByIdAndUpdate(
    id,
    {
      $set: {
        email: data.email,
        password: data.password,
      },
    },
    { new: true }
  );
};

exports.delete = (id) => {
  return User.findByIdAndDelete(id);
};
