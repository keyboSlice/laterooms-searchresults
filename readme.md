# Laterooms Interview Challenge

## Setup and building 
Project requires docker and docker-compose, if both of those are present on the system then clone the repo and run `docker-compose up` in the project directory.
Project will then be accessible from localhost

## Aims

### Buildchain

In the interest of using as many shiny new toys as possible I've setup the buildchain using webpack 3, the whole project runs from webpack-dev-server and it was the first time I've used that particular tool, which I've got say I think is brilliant (the tool, not me using it for the first time :p).

### Testing

I set out with an idealistic intention of having perfect code coverage, although I've never really done frontend javascript testing before so it was quite alien to me.

It took me quite a while to get to grips with Ava + Enzyme and the whole testing environment, so I created my data layer in a TDD style but then time constraints forced me to abandon this pattern.
I'm sure I'd be much faster at with some more experience though :(

### Project Structure

I've attempted to adhere to a unidirectional flow of data, enabled by the brilliant Redux library. To componentise the application I used React, which works with Redux fantastically. For styling I followed the BEM naming pattern.

P.S. The colour schemes a bit weird - I used similar colours recently and really liked them, my versions ended up a little bit "Jack Nicholsons Joker" though - it's different at least!
