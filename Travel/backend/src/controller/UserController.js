import { UserDb } from "../model/regis.js";


export const login = async (req, res, next) => {

    try {
     const user = await UserDb.findOne({ email: req.body.email });
     if(user) {
      const result = req.body.password === user.password;
      if(result) {
        res.status(200).json({ message: 'login berhasil' });
      } else {
        res.status(400).json({ error: "password doesn't match" });
      } 
     } else {
        res.status(400).json({ message: "User doesn't exits" });
     }
  } catch(error) {
    res.status(400).json({ error });
  }
}

export const Register = async(req, res, next) => {
     try {
      const payload = req.body;
      let user = new UserDb(payload);
      await user.save();
      return res.json(user);

     }
    catch(err) {
        if(err && err.name === 'ValidationError'){
            return res.json({
                error: 1,
                message: err.message,
                fields: err.errors
            });
        }
        next(err);
    }

}

export const logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'logout success' });
}

