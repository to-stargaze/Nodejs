console.log('require');

module.exports = 'ㅋ';

require('../module/var');

console.log('require.cache');
console.log(require.cache);
console.log('require.main');
console.log(require.main === module);
console.log(require.main.filename);