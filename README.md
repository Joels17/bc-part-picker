# BC Part Picker
## Inspiration
We are all nerds that know how to build a computer and use the site PC partpicker. We thought why not apply that concept for other mediums as there is a clear lack of a universal system.
## What it does
The startup API compares the compatibility of the components of gear like guitars, skis and skateboards. For example if we choose a deck for a skateboard our API would narrow down what items are compatible with it from the total list of trunks/wheels, etc. For each part we pick, our API would run the same query and check that all the components are compatible.
## How we built it
We used a mixture of React for the front end and Ruby-on-Rails for the backend with mySQL for the database. All of this is running on a Vagrant virtual machine using Ubuntu 14.04 OS
## Challenges we ran into
Ruby is not the friendliest language to learn in under 24 hours and getting the backend situated properly took a lot of time. Setting up our development environments was a challenge.
## Accomplishments that we're proud of
We were able to get React and Ruby-on-Rails set up on multiple machines running Windows or Linux in a short amount of time
## What we learned
There is never enough time in 24 hours and that narrowing the scope is key. Our base model is best to be released for anyone to use then having a paid version where the client/user gets to add compatibility/items. 
## What's next for BC part picker
Making the API available for companies to purchase/use and add to the database with their inventory and compatibility. With some additions we could add a barcode reader in order to input almost any product.

