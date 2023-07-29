import { UserDb } from "../model/regis.js";
import jwt from 'jsonwebtoken';
import passport from 'passport';
import bcrypt from 'bcryptjs';


const getLocal = async (email, password, done) => {
  try {
    let user = await UserDb.findOne({email}).select('-__v -token');
    if(!user) return done;
    if(bcrypt.compareSync(password, user.password)) {
      ({ password, ...useWithoutPassword } = user.toJson());
      return done(null, useWithoutPassword)
    }
  } catch(err) {
     done(err, null)
  }
  done();
}

export const login = async (req, res, next) => {

  passport.authenticate('local', async(err, user) => {
    if(err) return next(err);

    if(!user) return res.json({ message: 'Email atau Password salah' });

    let signed = jwt.sign(user, process.env.SECRET_KEY);

    await UserDb.findByIdAndUpdate(user._id, {$push: {token: signed}});

    res.json({
      message: 'Login Berhasil',
      user,
      token: signed
    })
  })(req, res, next)
 
  };

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

