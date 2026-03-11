
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './GlobalStyles.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // تسجيل الدخول
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='container'
    >
      <form onSubmit={handleSubmit}>
        <motion.div
          whileFocus={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className='input-group'
        >
          <label>البريد الإلكتروني</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className='input-group'
        >
          <label>كلمة المرور</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </motion.div>
        <motion.div
          whileFocus={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className='input-group'
        >
          <label>تأكيد كلمة المرور</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          type='submit'
          className='login-btn'
        >
          تسجيل الدخول
        </motion.button>
      </form>
    </motion.div>
  );
}

export default App;
