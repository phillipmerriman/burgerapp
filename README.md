# burgerapp
This live application allows you to see the burgers, add new burgers, devour the brugers, and delete the devoured burgers using Node.js, Express, Express-Handlebars, and MySQL.


## Getting Started
You need to set up your MySQL database before you can run the code: 

    1. Download and unzip the code, and install the prerequisites, as explained in the "Installing" section of this README.
    2. In your "employee-tracker-main" directory there is a "db" directory. In that directory there are two files: cms-schema.sql and cms-seeds.sql. 
        a. Open your MySQL Workbench and run cms-schema.sql to create the database and tables.
        b. Then run cms-seeds.sql to populate the database with some data. (Bonus points if you recognize some of the people in your database.)
    3. Now that your database is ready to be queried, open connections.js and replace the MySQL root password on line 13 with your MySQL root password.
    4. Open a Git terminal. Type "node app.js" to invoke the application.


## Built With
* [Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)
* [Visual Studio Code Extension "Live Server"] 
    * Open VS Code.
    * Open the extensions pane and search for Live Server.
    * Select the version written by Ritwick Dey and click Install.
* [Git Terminal](https://git-scm.com/downloads)
* [Node](https://nodejs.org/en/download/)
     * [express](https://www.npmjs.com/package/express)
     * [mysql](https://www.npmjs.com/package/mysql)
     * [express-handlebars](https://www.npmjs.com/package/express-handlebars)
       

## Contributing
This project is not open to contributions.

## Versioning
This project does not use versions at this time. 

## Authors
© 2020 [Phillip Merriman](https://github.com/phillipmerriman)

## License
MIT

## Acknowledgments
Thanks to the following:
* U of M Coding Bootcamp (https://bootcamp.umn.edu/coding/)
* Esterling Accime (https://www.youtube.com/channel/UC81OIFgbiCv9lE2ws07lsjA)
* Node (https://nodejs.org/en/download/)
     * mysql
* Git Terminal (https://git-scm.com/downloads)