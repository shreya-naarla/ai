/*
Copilot Model: ChatGPT 4o 
Prompts:
 - I need to fetch data, how do i do it correctly?
 - (Gave it some code from DummyJSON and asked how to use it in this project)
 - (Gave it some errors shown in the terminal and asked how to fix it)
Output: Gave me the code below
*/

import fetch from 'node-fetch';
import fs from 'fs';

fetch('https://dummyjson.com/recipes')
  .then(res => res.json())
  .then(data => {
    fs.writeFileSync('./_data/recipes.json', JSON.stringify(data, null, 2));
    console.log('Data fetched and saved to _data/recipes.json');
  })
  .catch(err => console.error('Error fetching data:', err));