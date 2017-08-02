/**
 * Created by Ramkumar on 12/19/2015.
 */
function generate(minimum, maximum) {
    minimum = minimum || 1;
    maximum = maximum || 1000;

    return Math.floor(
        Math.random() * (maximum - minimum) + minimum);
}

module.exports = generate;