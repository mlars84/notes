# General WP Notes:
- 


# Chris Black Wordpress Workshop
Intro to PHP, MySQL and Wordpress. We'll cover the steps required to get a Wordpress install up and running on localhost. After that, we'll walk through the components required to build a custom theme from scratch.

## Prerequisites

- Homebrew (Prime students with postgres should have this already)
- PHP (pre-installed on OS X)
- MySQL `brew install mysql`
- [Download Wordpress](https://wordpress.org/download/)
- Install [Sequel Pro](http://www.sequelpro.com/)

> If you're just looking to build a personal blog, I'd recommend checking out static site generators [here](https://www.sitepoint.com/6-nodejs-static-site-generators/), [here](https://www.staticgen.com/) or [this video tutorial](https://youtu.be/O_7p_jSuCqk). They are much faster to set up and can be hosted for free using GitHub. Wordpress is great when building websites for non-tech savy people who need to make updates on a regular basis.

## Brief Intro to PHP

1. Create a new folder
2. Add an `index.php` file

   ```PHP
   <?php
    echo '<h1>Hello World</h1>';
   ?>
   ```
3. Open terminal in that folder, type `php -S localhost:8000`
4. Navigate to [http://localhost:8000](http://localhost:8000) in your browser
5. You should see Hello World appear

   > Right click and view the source. Notice that the PHP code does not appear in the source on the client. PHP code is executed on the server, the resulting HTML is returned to the client. Unlike Node.js, PHP files are stored in the public HTML directory.

6. More PHP sample code

   ```php
   <?php
   // Unlike JavaScript, $items is NOT added to the global scope.
   $items = ['One', 'Two', 'Three'];

   // http://php.net/manual/en/language.functions.php
   function printData($items) {
     for($i = 0; $i < count($items); $i++) {
       ?>
         <div class='block'><? echo $items[$i] ?></div>
       <?php
     }
   }

   printData($items);
   ?>
   ```

7. Go back to terminal and type `ctrl-c` to stop the server

### PHP Notes

- $ for variables
- . for concatenating strings
- Anything in a PHP tag `<?php ... ?>` will be executed on the **server**
- Resulting HTML is rendered on the **client**
- http://php.net/manual/en/langref.php

> Spend a few minutes reviewing [PHP compared to JavaScript](https://www.lullabot.com/articles/learning-javascript-from-php-a-comparison)

## Brief Intro to MySQL

1. Start the MySQL service `brew services start mysql`
2. In terminal, set a password for your default MySQL account `mysqladmin -u root password 'root'`

   **WARNING: Using root as a password should only be done for a local dev environment. Never user 'root' as a password in a production environmnet!**

Connect to MySQL via terminal by typing `mysql -uroot -proot`. You should see `mysql>`. Type `exit` or `quit` at any point to exit (note: this doesn't stop the service). Connecting to MySQL allows you to create databases and run queries in terminal.

- `mysql> SHOW DATABASES;`
- `mysql> CREATE DATABASE blog;`

   > At this point we could set up Wordpress but we'll try out a few more commands before we move on.

- `mysql> CREATE DATABASE pets;`
- `mysql> USE pets`
- CREATE TABLE cats

   ```sql
   mysql> CREATE TABLE cats
   (
     id              INT unsigned NOT NULL AUTO_INCREMENT, # Unique ID for the record
     name            VARCHAR(150) NOT NULL,                # Name of the cat
     owner           VARCHAR(150) NOT NULL,                # Owner of the cat
     birth           DATE NOT NULL,                        # Birthday of the cat
     PRIMARY KEY     (id)                                  # Make the id the primary key
   );
   ```

- `mysql> SHOW TABLES;`
- `mysql> DESCRIBE cats;`
- INSERT INTO cats

   ```sql
   mysql> INSERT INTO cats ( name, owner, birth) VALUES
     ( 'Sandy', 'Lennon', '2015-01-03' ),
     ( 'Cookie', 'Casey', '2013-11-13' ),
     ( 'Charlie', 'River', '2016-05-21' );
  ```

- `mysql> SELECT * FROM cats`
- `mysql> QUIT`

Just like postgres! More resources can be founde [here](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing). We'll be using [Sequel Pro](http://www.sequelpro.com/) from here on out.

## Installing Wordpress

1. [Download Wordpress](https://wordpress.org/download/)
2. Unzip
3. Edit the following lines in your wp_config.php file:

   ```PHP
   // ** MySQL settings - You can get this info from your web host ** //
   /** The name of the database for WordPress */
   define('DB_NAME', 'blog');

   /** MySQL database username */
   define('DB_USER', 'root');

   /** MySQL database password */
   define('DB_PASSWORD', 'root');

   /** MySQL hostname */
   define('DB_HOST', '127.0.0.1');

   /** Database Charset to use in creating database tables. */
   define('DB_CHARSET', 'utf8');
   ```
   > `DB_HOST` would normally be **localhost**. We are using 127.0.0.1 to support MySQL running on brew services.
4. Add Unique Authentication Keys and Salts
5. Open terminal in your wordpress folder and type `php -S localhost:8000`
6. Follow the installation steps

> Spend a few minutes browsing around the admin panel.

## Build a Custom Wordpress Theme

- https://www.taniarascia.com/developing-a-wordpress-theme-from-scratch/

## Additional Condsiderations

- Always back up everything (database & files) before you make any changes to a live site.
- Heavily customized themes can be difficult to migrate away from.
- Keep your plug ins to a minimum, they can conflict with each other and take down a website.
- In an ideal world, you should only be making changes to the theme once a site is deployed. You can pull down updates to content but I wouldn't recommend replacing the live database after it goes live.
- Keep your Wordpress websites **up to date**!
- Disable comments to improve security.

## Resources

- [Learn PHP from JavaScript Reference](https://www.lullabot.com/articles/learning-javascript-from-php-a-comparison)
- [PHP Cheat Sheet](http://overapi.com/static/cs/php_cheat_sheet.pdf)
- [Wordpress Cheat Sheet](https://startbloggingonline.com/wordpress-cheat-sheet/)
- [Wordpress Developer Resources](https://developer.wordpress.org/)

## Deployment
Wordpress can be deployed to any LAMP server. I've seen some tutorials about getting Wordpress on Heroku but I don't think it's worth the effort.

### Digital River
It's unlikely that we'll get to this point in this intro lecture but here are some additional resources on deployment:

- https://www.digitalocean.com/community/tutorials/how-to-use-the-phpmyadmin-one-click-application-image
- https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-with-lamp-on-ubuntu-16-04

Once a Wordpress website has been deployed, changes should only be made to your theme. If you attempt to re-deploy, any changes made via the admin panel on the live site would be overriden.

### Wordpress.com
[Wordpress.com](https://wordpress.com/#plans) is an alternative to hosting a Wordpress website but is limited to the set of approved themes. Depending on the project, it may be the best alternative to getting a website up and running quickly.
