1. movie.js
    - line 29, 33
        - added '.belongsToMany()' relationship with 'models.Person' as the "many"...
        - 'as' is the alias; if this is ommitted, Sequelize tries it's best to pluralize your model name--in this case, it would have associated 'Person' with 'People'--this is important for later...
        - 'through' is required; 'through' defines the name of the JOIN table that Sequelize uses to relate two tables
            - **!! IMPORTANT: the many-to-many tables must have the same 'through' value; they're sharing the same JOIN table
2. person.js
    - line 29, 33
        - added '.belongsToMany()' relationship to 'models.Movie' as the "many"...
        - 'as' is the alias; if this is ommitted, Sequelize tries it's best to pluralize your model
          name--in this case, it would have associated 'Movie' with 'Movies'--this is important for later...
        - 'through' is required; 'through' defines the name of the JOIN table that Sequelize uses to relate
          two tables
            - **!! IMPORTANT: the many-to-many tables must have the same 'through' value; they're sharing the same JOIN table
            
3. app.js
    - line 19,20
        - added two more movie global variables for variety; not needed
    - line-79,88
        - added the two new movie records to the Movie table
    - line-95
        - added the two new global movie variables to the destructuring method
    - line-98,102
        - here is where we add the actual glue between the two tables...
        
                movie(s) <---JOIN_table---> actor(s)
        - **!! IMPORTANT: when you create a many-to-many relationship, as we did on line 29 of movie.js and person.js, Sequelize automatically creates "Magic" functions... basically Setters and Getters
        
        To view a list of these, console log the following "console.log(Object.keys(currentUser.\_\_proto\_\_));"
        
        - we use the '.addActors()' method to add instances of the 'Person' model to specific movie instances; the method name is auto-generated by Sequelize using that 'through' value we talked about above; if we did not include a 'through' value, the method would have been named ".addPeople()"

        NOTE: it's important that you return the result(Promise) of this addition process; I tried adding 'Person(s)' to movies, then returning a resolved Promise object and the additions didn't carry over. Make sure to use Promise.all()
    
    - line-115,118
        - the rest is regular querying...
            - 'model' is the type for the value of array objects in the many-to-many relationship, in this case it's 'Person'
            - 'as' is the alias we used for the many-to-many property/key, in this case it's 'actors'
    - line-133,136
        - the rest is regular querying...
            - 'model' is the type for the value of array objects in the many-to-many relationship, in this case it's 'Movie'
            - 'as' is the alias we used for the many-to-many property/key, in this case it's 'movies'

*Lastly,
    I've commented out some console.log statements in the original app.js to reduce clutter on the console output. The important logs remain-- Movies.findAll() and Person.findAll()	

