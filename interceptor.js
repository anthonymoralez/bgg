var interceptor = require('rest/interceptor');
var parser = require('xml2json-light');

module.exports = interceptor({
  success: function(response, config, client){
    return parser.xml2json(response.entity);
  }
});
