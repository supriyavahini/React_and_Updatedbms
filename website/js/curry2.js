const sendRequest = greet => name => message =>
`${greet} ${name}, ${message}`
sendRequest('Hello')('John')('Please can you add me to your Linkedin network?')