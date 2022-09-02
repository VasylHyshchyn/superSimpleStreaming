
var genre = {
    daredevil: 'action',
    elite: 'drama',
    euphoria: 'drama',
    ann: 'drama'
}

let User = class {

    constructor(nickname, subcriptions) {
        this.nickname = nickname;
        this.subcriptions = subcriptions;
    }

    subscribe(service) {
        this.subcriptions.push(service)
            return(
                function Subcription(service){
                    this.service = service;
                    this.getRecommendationTrending = function(){
                        const popular = service.getMostViewedShowsOfYear();
                        const rand = Math.floor(Math.random()*myArray.length);
                        const recShow = popular[rand];
                        return recShow;
                    };
                }
            );
    };

    get subs(){
        return this.subscribe();
    };
};

// let user = new User('vasyl', []);
// console.log(user)

let sub = new User('Netflix', []);
console.log(sub.subscribe());

let StreamingService = class {
    constructor(name, shows, viewsByShowNames) {
         this.name = name;
         this.shows = shows;
         this.viewsByShowNames = viewsByShowNames;
    };

    addShow(show){
        return this.shows.push(show);
    };

    getMostViewedShowsOfYear(shows) {
        return this.shows.sort((a, b) => a.views < b.age ? 1: -1 );
    };
    get popular() {
        return this.getMostViewedShowsOfYear;
    };
};

let Show = class { 
    constructor(name, genre, releaseDate, views, duration) {
        this.name = name;
        this.genre = genre[name]
        this.releaseDate = releaseDate;
        this.views = views;
        this.duration = duration;
    };

    getDuration(){
        return this.duration;
    };
}; 




let daredevil = new Show('daredevil', genre, '11.07.2017', 1500000, 650);
let elite = new Show('elite', genre, '12.10.2015', 2000000, 540);
let euphoria = new Show('euphoria', genre, '18.06.2019', 25000000, 780);
let ann = new Show('ann', genre, '13.09.2020', 30000000, 900)

let service = new StreamingService('netflix', [], new Map());

service.addShow(daredevil);
service.addShow(elite);
service.addShow(euphoria);
service.addShow(ann)
console.log(service);
let mostViewed = service.getMostViewedShowsOfYear();
console.log(mostViewed);
console.log(daredevil.getDuration());
console.log(sub.subscribe(service));

