# day-planner
a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.




# Pseudo Code

1. save button onclick function adding contents of textarea to local storage; use for loop to apply event handler function to each save button using a class selector 
2. function to add saved contents back into the textarea onload of each textarea using for loop
3. dynamically add attrubute/class of past, present or future that applies styling to each hour row based on its time relative to currenttime/moment() using is adding methods in moment api; use conditionals to compare current to fixed hour of each row.
4. 