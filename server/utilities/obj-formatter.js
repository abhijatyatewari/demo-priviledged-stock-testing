/**
 * Created by Ramkumar on 12/19/2015.
 */
function format(obj) {
    var message = '';

    for(var property in obj) {
        if(obj[property] && typeof obj[property] !== 'function') {
            message += obj[property] + ', ';
        }
    }

    return message;
}

module.exports = format;