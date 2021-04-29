# insertContent
Script to assist in creating HTML elements via JavaScript

If you create more than one element, previously use a variable to store its values,
and then the variable created as a parameter in the object is passed. 


** Ex: const elementos = 'div', 'div', 'h1';
** insertContent({parent: body, element: elementos});

It is necessary to pass the value of Parent and Element 


### Usage examples

    Keep the element inside the variable: 
    const input = insertContent({parent:body, element:'input', type:'text'});
    
    Directly calling the element:
    insertContent({parent:body, element:'input', type:'text'});
