import jwt from 'jsonwebtoken'

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password != process.env.ADMIN_PASSWORD
    ) {
      return res.json({ sucess: false, message: "Invalid Credentials" });
    }

    const token = jwt.sign({email}, process.env.JWT_SECRET ) 
    res.json({sucess: true, token})
  } catch (error) {
        res.json({sucess: true, message: error.message})
  }
};

export default adminLogin;