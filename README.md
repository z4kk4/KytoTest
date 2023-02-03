## Kyto test notes:
i chose to go with vanilla JS because i simply didnt feel the need to use any libraries or frameworks.
the only challenge that i found was to find the right RegExps for my string, it took me most of the time.
The app runs well with example output and the app ensures:
*Data normalized each type to a call first to titles ... and last to emails
*That all data has name and surname or else it wont be shown
*All universal phones numbers and codes are accepted
*In my case i have built the regExp of the names depending on the existance of the titles, even though i believe there's a better approach 
but it works for the app.
*the duplicate people names will not be shown, the control was done on the names because they are the only obligatory fields. (duplicate emails and numbers will show normally ).
# To run the app simply open the index.html file in the browser, fill the data in the text input area, then click on save to normalize in a table.
