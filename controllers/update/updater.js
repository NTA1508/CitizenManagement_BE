const cron = require('node-cron');
const updateStaticalInfo = require('./updateStaticalInfo');
const updateAddresses = require('./updateAddresses');
cron.schedule(' 1 * * * *', function() { //every 1 hour
    console.log('running a task every hour');
    updateStaticalInfo.refreshStatisticsData();
    updateAddresses();
  });
  module.exports = cron;
// Real world : server update at 23:59: Line:4 cron.schedule(' 59 23 * *', function() { 
