import { apiKey, gameTitle as title } from "./util.js"; //Extension important in Vanilla JS but not in React
import variableContainingDefaultExport from './util.js';
import * as util from './util.js';

console.log('API Key: ', apiKey);
console.log('Aliased Title: ', title); //Use 'as' in the import for Aliasing/Renaming

console.log('Default Export: ', variableContainingDefaultExport);
console.log('Clubbed Import - API Key: ', util.apiKey);
console.log('Clubbed Import - Game Title: ', util.gameTitle);
console.log('Clubbed Import - Default Unnamed Export: ', util.default);
