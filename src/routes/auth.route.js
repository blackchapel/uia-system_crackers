const express = require('express');
const auth = require('./../middlewares/authentication.middleware'); 
const {
    googleSignIn,
    signUp,
    login,
    verifyOtp,
    sendOtpEmail
} = require('./../controllers/auth.controller');

// Initializing router
const router = express.Router();

router.post('/google/signin', googleSignIn);

router.post('/cloudbind/signup', signUp);

router.post('/cloudbind/login', login);

router.post('/cloudbind/verify-otp', [auth.verifyJwt, auth.accountActivatedFalse, auth.loginProviderCloudBind], verifyOtp);

router.post('/cloudbind/send-otp-email', [auth.verifyJwt, auth.accountActivatedFalse, auth.loginProviderCloudBind], sendOtpEmail);

module.exports = router;