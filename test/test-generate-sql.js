import toolkit from '../src/utils/toolkit.js';

const sql = 'select * from cf_alarm_ai where tenant_id = ? and deleted = ? and id = ?';
const template = '[3, 0, 1]';

const generatedSQL = toolkit.generateSQL(sql, template);
console.log(generatedSQL);
