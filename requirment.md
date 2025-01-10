For this assessment, you are required to create a basic Angular application that demonstrates component interaction, routing, and conditional access to protected pages. Begin by creating a new Angular project and adding at least two components to showcase how data flows from a parent to a child component (prop drilling) and how the child component can communicate events back to the parent via an EventEmitter 


Next, implement a routing module that includes two distinct pages: one should be publicly accessible, while the other is protected and requires a simple conditional check to grant access. You can simulate this conditional requirement in any manner you prefer. Finally, fetch data from a dummy JSON API endpoint such as https://jsonplaceholder.typicode.com/posts and display this data on the protected page to illustrate both data retrieval and access restrictions.

ng g c child
ng g c parent
ng g s auth
ng g c privatePage

