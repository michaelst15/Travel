import User from "../model/regis.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


export const login = async (req, res, next) => {

  const jwtKey = "Secret_Key";

    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      });
  
      if (user) {

        let token = jwt.sign({ email: user.email }, 
            jwtKey, {
              algorithm: "HS256",
              expiresIn: 300,
            } 
          )

        if (bcrypt.compare(req.body.password, user.password)) {
          res.status(200).send({
            id: user.id,
            nama: user.nama,
            email: user.email,
            password: user.password,
            token,
          });
        }
      } else {
        res.status(404).json({
          message: 'Email atau password salah'
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Internal server error'
      });
    }
  };

export const Register = async(req, res, next) => {
         const { nama, email, password } = req.body;
         const alreadyUser = await User.findOne({ where: { email } })
         .catch((err) => {
            console.log("error", err);
         });

        if(alreadyUser) {
            return res.status(400).json({ message: "Email sudah dipakai" })
        }

        const newUser = new User({ nama, email, password });
        const saveUser = await newUser.save()
        .catch((err) => {
            console.log("error", err);
            res.status(500).json({ error: "Tidak dapat mendaftar pengguna" })
        })

        if(saveUser) {
            res.json({ message: "Registrasi berhasil" })
        }

}

export const logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ message: 'logout success' });
}

