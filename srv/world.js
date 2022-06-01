/**
 * using Node.js express.js handlers style
 */
module.exports = (say) => {
    say.on('hello', req => `Hello ${req.data.to}!`)
}


/**
 *  Node.js es6 classes style
 */
// module.exports = class say {
//     hello(req) { return `Hello ${req.data.to}!` }
// }