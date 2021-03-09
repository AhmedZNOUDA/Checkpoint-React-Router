import React, {Component} from 'react'
import Header from './Header'
import MovieList from './MovieList';
import SearchWithName from './SearchWithName'
import SearchWithRate from './SearchWithRate';


const movieList = [ {
    id: "1",
    picture:"https://img4.cdn.cinoche.com/images/591587145c8e772c64fa4847eba6cbf5.jpg",
    title:"Parasite",
    label: " 2h 12min | Thriller, Comedy | 30 May 2019 (South Korea) ",
    rate: 5,
    video:"isOGD_7hNIY",
    description: `La famille Kim, pauvre et au chômage, vit dans les bas-fonds de Goyang, dans la banlieue de Séoul. Ils s'intéressent au train de vie de la richissime famille Park. 
                 Un jour, grâce à un ami, le fils de la famille Kim, Ki-woo, va réussir à se faire embaucher pour donner des cours d'anglais à Da-hye, la fille de la famille Park. Mais la suite des événements ne va pas se passer comme prévu...`
  },
  {
    id: "2",
    picture:"https://www.themoviedb.org/t/p/original/uw6rLtSGDtXkFU3zPcjR3jx779F.jpg",
    title:"Alive",
    label: " 1h 39min | Drama , Thriller | 24 January 2020 (South Korea) ",
    rate: 3,
    video: "jQ8CCg1tOqc",
    description: `Joon-woo (Yoo Ah-in) passe ses journées à faire des streaming de jeux vidéo en direct et à végéter dans son appartement. 
                   Un jour, d'autres joueurs semblent paniquer et l'exhortent à regarder la télévision. Joon-woo réalise alors qu'un mystérieux virus se propage dans toute la Corée et voit, par sa fenêtre, des personnes en train de courir dans tous les sens et se dévorer.`
  },
  {
    id: "3",
    picture:"https://fr.web.img5.acsta.net/pictures/16/08/03/12/17/530666.jpg",
    title:"Train To Busan",
    label: "2h 1min | Action , Thriller, Horror | July 2016 (South Korea)  ",
    rate: 4,
    video: "pyWuHv2-Abk",
    description: `Un chauffeur de camion est arrêté sur une petite route par des hommes portant des tenues de protection contre les risques biologiques. 
                    Ils désinfectent son véhicule avant de le laisser passer. Peu après, il percute une chevrette qui, bien que morte, se relève.`
  },
  
  {
    id: "4",
    picture:"https://media.senscritique.com/media/000019221067/source_big/Peninsula.jpg",
    title:"Peninsula",
    label: "1h 56min | Action , Thriller, Horror | 15 July 2020 (South Korea)  ",
    rate: 2,
    video: "yVucSRLLeIM",
    description: `Quatre ans après les évènements en Corée du Sud, Jung-seok est un ancien soldat qui a réussi à s'échapper de la péninsule de Corée désormais infestée de zombies. 
                   Une dernière mission l'oblige à retourner à Séoul pour récupérer un bien précieux. Il va y découvrir que des personnes non-infectées y vivent encore, livrées à elles-mêmes.`
  },
]
const filterMovie = (movie, minRate, searchField) => {
    return (movie.rate >= minRate) && (movie.title.toLowerCase().trim().includes(searchField.toLowerCase()))
}

class MovieContainer extends Component {
        state = { 
            minRate:1,
            searchField:"",
            movieList:movieList
        };

    changeTitle = (title) => {
        this.setState(
            { 
                searchField: title
            }
        )
    }
    changeMinRate= (newMinRate) => {
        this.setState(
            {
                minRate:newMinRate
            }
        )
    }
    addMovie = (newMovie = {}) => {
        this.setState(
            {
                movieList:this.state.movieList.concat(newMovie)
            }
        )
        console.log("MOVIE" , newMovie)
    }

    removeMovie = (movieToRemoveTitle) => {
        console.log(movieToRemoveTitle)
        this.setState(
          {
              movieList: this.state.movieList.filter(movie => movie.title!== movieToRemoveTitle)
            }
        )
    }
    render(){
        return (
            <div className>
                <Header/>
                <div className="container">

                    <div className="searchAria">
                        <SearchWithName  inputValue={this.state.searchField} inputChange={this.changeTitle}/>
                        <SearchWithRate rateValue={this.state.minRate} minRateChange={(newMinRate) =>this.changeMinRate(newMinRate)}/>
                    </div>
                    <div className="col moviesGallery">
                        <MovieList  movies=
                            {
                                this.state.movieList.filter(movie => filterMovie(movie, this.state.minRate, this.state.searchField))
                            }
                            addMovie={this.addMovie}
                            removeMovie={this.removeMovie} 
                        />
                    </div>                   
                </div>
            </div>
        )
    }
} 

export default MovieContainer;