const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post('/protected', (req, res) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, 'JWT_SECRET_KEY', (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Invalid token' });
        } else {
          const userId = decoded.id;
          // Use the user ID to fetch user data or perform any other authorized action
          User.findById(userId).then(user => {
            res.json({ message: `Hello ${user.name}! This is a protected route.` });
          });
        }
      });
    } else {
      res.status(401).json({ error: 'Authorization header missing or invalid' });
    }
  });
  

module.exports = router;