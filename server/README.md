# Database Configuration
    sudo psql postgres;
<!--  if it gives you any error -->
    psql postgres;
<!--  if it opens a postgres=# terminal  -->
    create database recruiterhub;
    \c recruiterhub postgres;
    \i server/database/table.db.sql; 
<!-- If the step aboves throws an error the compy the file path -->
    \i paste_the_path 
<!-- Test if the tables are created -->
    \d
<!-- Test if the roles are created -->
    SELECT * FROM roles;
<!-- Test if the user (admin) has been created -->
    SELECT * FROM users;

/Users/adelaide/Desktop/RecruiteerHub/server/database/table.db.sql