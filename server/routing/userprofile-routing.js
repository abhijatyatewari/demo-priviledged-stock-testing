/**
 * Created by Ramkumar on 12/20/2015.
 */
var express = require('express');
var jwt = require('jsonwebtoken');
var UserProfileService = require('../services/userprofile-service');

var authenticationRouter = new express.Router();
var userProfileService = new UserProfileService();

authenticationRouter.post('/',
    function (request, response) {
        var HTTP_UNAUTHORIZED = 401;
        var body = request.body;
        var userName = body.userName;
        var password = body.password;

        if (!userName && !password)
            throw new Error("Invalid Credentials Specified!");

        var authenticationStatus = userProfileService.validate(userName, password);

        if (!authenticationStatus) {
            response.status(HTTP_UNAUTHORIZED).send('Authentication Failed!');
            return;
        }

        var profile = userProfileService.getProfile(userName);
        var signature = jwt.sign(profile, globalSecretKey, {
            expiresIn: 10000
        });

        response.json({
            token: signature
        });
    });

module.exports = authenticationRouter;