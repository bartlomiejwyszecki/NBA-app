## Table of Contents

* [Description](#description)
* [Components description](#components-descripton)
* [Technologies](#technologies)
* [Installation](#installation)
* [Live version](#live-version)
* [Warnings](#warnings)

## <a name="description"></a>Description 

Mini NBA website with real-time data provided from two API's, like: players stats, teams stats, team informations, standings, etc. Application is based on original NBA website https://www.nba.com/. API's is providing real-time data, but unfortunately regular season is up to end on May 17th, so from May to December data will practically won't be chaning. Anyway user still can read informations and stats about this or previous season (if it's currently break in the NBA). Application is composed of four lazy modules based components: Home Component, Teams Component, Players Component, Rank Component.

![Home component dekstop](https://github.com/bartlomiejwyszecki/NBA-app/blob/master/src/assets/readme1.jpg)

Application looks as well on bigger devices as on smaller devices.

![Home component mobile](https://github.com/bartlomiejwyszecki/NBA-app/blob/master/src/assets/readme2.jpg)

## <a name="components-description"></a>Components description

* **Home Component** - Component with static information data, and carousel. Unfortunately API's I use are not providing data like news, articles, etc., so all data here comes from static data file.

* **Teams Component** - Component that shows list of NBA teams divided by conferences, and divisions. All team element includes link to profile, and stats about this team, that are separated component in separated routing direction.

![Teams component dekstop](https://github.com/bartlomiejwyszecki/NBA-app/blob/master/src/assets/readme3.jpg)

![Teams component dekstop](https://github.com/bartlomiejwyszecki/NBA-app/blob/master/src/assets/readme4.jpg)

* **Players Component** - Component showing list of currently active NBA players. Table of players might be sorted by property, filtered by provided text, and might be showing choosen amount of players per page. Every player has a link with direction to stats component, with statistics of this specific player from current or previous season, like: ponits, assists, blocks, steals and much more.

![Players component dekstop](https://github.com/bartlomiejwyszecki/NBA-app/blob/master/src/assets/readme5.jpg)

* **Rank Component** - Component representing standings of teams in current NBA season (if it lasts actually) or previous (if it's break right now). Teams are divided by conference. Teams ranked 1-6 are clinched into play-offs, teams ranked 7-10 have to play 'play-in' tournament, which determines two winners clinched to play-offs, teams ranked 11-15 are not clinched into play-offs.

![Rank component dekstop](https://github.com/bartlomiejwyszecki/NBA-app/blob/master/src/assets/readme6.jpg)

Teams, Players and Rank Components are all based on Lazy Modules, REST API, and Resolvers.

## <a name="technologies"></a>Technologies/tools used

* Angular 11 including modules, libraries and other functionalities like: Lazy Modules, Resolvers, HttpClient, Renderer, ElementRef, Pipes, Custom Pipes, RxJs, Routing, Activated Routes,
* Typescript 4,
* Angular Material,
* SCSS,
* Bootstrap 5.


## <a name="installation"></a>Installation

1. Download zip or clone repository,
2. Navigate to folder with downloaded application in your terminal,
3. Write command
```
npm install
```
and then
```
npm start
```
4. Your project will be running on localhost:4200 in web browser.

## <a name="live-version"></a>Live version

Live version is available in link below:

[Live version](https://nba-app-angular.herokuapp.com/)

## <a name="warnings"></a>Warnings

* Application might be running a little bit slowly sometimes because of free hosting used to deployed this project,
* Players component might load a few seconds because of resolver, large data size provided in this component, and hosting quality.
