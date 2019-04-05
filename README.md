<h1>Let's Go byBike</h1>

ByBike is a application which solves, potentially time consuming and dangerous routing problems such as diversion into disfavored areas which are inaccessible,  heavily trafficked or require excessive energy to overcome such as an uphill road. The aim is to improve cyclist’s routes to their destination so the user can have more enjoyable journeys and keep them safe by bringing to attention any obstructions or potential problems on their route. ByBike plans to grant navigation advice primarily based on community feedback, allowing the user to self-verify which route they want to take.

Legend:

<br>Student ID - GitHub Name</br>
<br>UP827158 - Chtzmre</br>
<br>UP864461 - 864461</br>
<br>UP821837 - 821837/8212837</br>
<br>UP837518 - UP837518/rehanchughtai97</br>
<br>UP914294 - up914294</br>
<br>UP858239 - BradS0</br>

How to run the web application:

Download and install latest stable versions of node.js<br/>
Open Command Line and <code>cd</code> into the directory that will contain the web platform.<br/>
Install on your system Angular with <code>npm install -g @angular/cli</code>

git clone https://github.com/OpenClassrooms-Student-Center/5614116-front-end-app.git bybike

Open the backend folder

Ctrl - shift - right click

Open Windows Powershell

npm init

npm install --g

.
.
.
.
.

How to run the program:

1.Open Backend folder
2.Ctrl - Shift - Right Click
3.Open Windows Power Shell
4.Type nodemon server
5.Leave it open in background and open frontend folder
6.Ctrl - Shift - Right Click
7.Open Windoes Power Shell
8.Type ng serve
9.On a browser, go to localhost:4200
10. Website can now be accessed

You can register if you desire

Login Details to access straight away:

Email Address - a@a.com
Password - a

-----------------------------------------------------------------------------------------------------------
Based from previous submissions, we intended to write this program in HTML,CSS, JavaScript and PHP. We then opted to using A mean stack due to team members not being well versed in Javascript. Initially, we were going to use minimal javascript and work mainly on html, css and php. However, when it came to implement and write the code for the prototype, we found it would be a lot more effecient and appropriate to include AngularJS, especially based on the fact that it helps to communicate backend and frontend. 

The register and login functions were the first to be implemented due to the fact that being logged in is necessary in order to use other functionalities of our web application . These were fairly straightforward to implement based on being a very basic function to use. AngularJS was new for almost all of us so getting to grips with it took us some time, but once comfortable with it, we were able to implement a login and register system, both front and backend communicating well with each other. The next step was to create a view reviews of locations page which is what you would be presented with after you have logged in where the location is for top reviewed places are shown. In our navigation panel, you are able to see a favourites page which loads all of your favourite routes with again any feedback provided by users. Essential to this web application was a report page in which users could write down any problems they were having and we could assess that as the admin as mentioned in previous documents, this would allow us to work on bugs and upcoming features in the near future. The final thing we were able to implement in this time was our log out page which was simple as we reverse engineer what we did for the log in authentication allowing the user to be presented with the login screen as default once they log out.

Functions which were not implemented are first, the functions that we are to work on as soon as possible. The location search is of highest priority in this list as the location search allows the user to search for their desired shop they wish to travel to. We had an initial plan with Add rating and feedback. However, we did not manage to get to it on time based on the time consumed in learning, understanding and implementing AngularJS as, mentioned before, we were already working on this project with a different approach but, this had to be changed into AngularJS as this was better for us. Account deletion was a feature that would be very good to implement and something we also mentioned that we plan to do in our previous documents. However we could not come around to it due to the same reason stated above. This will be continued on however, to become fully functional and meet the requirements stated in our documents.

For automated testing we only included testing scripts we wrote, meaning we didn't commit the modules which contained autogenerated code.

![alt text](https://github.com/up914294/bybike/commit/100867ba70db69b32314ee705a640142634af745#diff-fb2177ffc292350c76c9abf659554075)
![alt text](https://github.com/up914294/bybike/commit/100867ba70db69b32314ee705a640142634af745#diff-bc3258d1840c6f3b936e88f51e723d7b)




One final thing to mention, We have a map api which shows maps, routes and directions. However, the api itself requires a key. To obtain said key, we had to purchase it. This is a feature we will add after the prototype once we have completed those features that still need to be implemented before hand. The maps api is the final touch to the web application.

Overall, As a team we believe we have worked hard to closely follow the documentation of our systems requirement and our design documentation. However, we have had a few slip ups such as lack of communication between the two teams that were made. Initially when we had our first meeting regarding this prototype, we split ourselves into small teams which were the backend team and the frontend team. In this project we found there was a lack of communication with backend and frontend teams. This in turn slowed our process down which meant that implementing certain features became fairly impossible due to the time constraint as a result of lack of communication. Also a big part of the functions which were not implemented was also the switch from using HTML, CSS, JavaScript and PHP to now implementing our web application using AngularJS, which was new to most, if not all of us. This took time to understand and implement. In conclusion to this, we would say our biggest problems we faced were lack of available time between the team and communication between the two teams and a big switch between the use of languages very far into the project. 

Implemented Functions:
<br>-Register a new user</br>
<br>-Login exiting user</br>
<br>-view reviews of locations</br>
<br>-Favourite</br>
<br>-report</br>
<br>-log out</br>
<br></br>

Functions which haven't been implemented:
<br>-location search</br>
<br>-Add rating</br>
<br>-Add feedback</br>
<br>-account deletion</br>
