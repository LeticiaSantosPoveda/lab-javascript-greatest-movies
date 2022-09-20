// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArr = moviesArray.map(movie => movie.director)
    return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergArr = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) 
    return spielbergArr.length;
}

// como es sintaxis de una linea no hace falta poner dos returns, sino tendría que poner uno dentro del filtro. 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }
    
    const averageArr = moviesArray.reduce((acumulator, currentValue) => {   
        if (!currentValue.score){                                     // hay que coger el currentValue que es el que itera por cada score
            return acumulator;
        } else { 
            return acumulator + currentValue.score;
        }    
        },0)
    
    let newArr = averageArr/moviesArray.length;
    return Number(newArr.toFixed(2));     
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))

    if (!dramaMovies.length){
        return 0;
    }

    const averageArr = dramaMovies.reduce((acumulator, currentValue) => {   
        if (!currentValue.score){                                     
            return acumulator;
        } else { 
            return acumulator + currentValue.score;
        }    
        },0)
    
    let newAverage = averageArr/dramaMovies.length;
    return Number(newAverage.toFixed(2));  

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArr = moviesArray.map((x) => x);  //para clonar el array.map((x) => x)

    copyArr.sort((a, b) => {
       return a.year - b.year;
    });
    return copyArr.sort((a, b) => {
        if (a.year === b.year){
            if (a.title > b.title){
                return 1
            } else {
                return -1
            }
        }
    })

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    

    const moviesByTitle = moviesArray.map(movie => movie.title);
        
    moviesByTitle.sort();
        if(moviesByTitle.length > 20) {
            moviesByTitle.splice(20)
          }
        
        return moviesByTitle;
        
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
