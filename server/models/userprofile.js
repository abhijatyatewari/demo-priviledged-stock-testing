/**
 * Created by Ramkumar on 12/20/2015.
 */
var objFormat = require('../utilities/obj-formatter');

function UserProfile(userName, password, email, workLocation, workType) {
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.workLocation = workLocation;
    this.workType = workType;
}

UserProfile.prototype.format = function() {
    return objFormat(this);
};

module.exports = UserProfile;