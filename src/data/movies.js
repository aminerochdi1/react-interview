const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1
    }, 
    {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, 
    {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, 
    {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, 
    {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, 
    {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, 
    {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, 
    {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, 
    {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, 
    {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
      //  ------------------------------------------------------------------------------------------
    {
      id: '11',
      title: 'James Bond 007',
      category: 'Action',
      likes: 5562,
      dislikes: 60
    },
    {
      id: '12',
      title: 'The Dark Knight',
      category: 'Action',
      likes: 9804,
      dislikes: 73
    },
    {
      id: '13',
      title: 'Forrest Gump',
      category: 'Drama',
      likes: 12043,
      dislikes: 88
    },
    {
      id: '14',
      title: 'The Godfather',
      category: 'Crime',
      likes: 15324,
      dislikes: 120
    },
    {
      id: '15',
      title: 'The Shawshank Redemption',
      category: 'Drama',
      likes: 14230,
      dislikes: 65
    },
    {
      id: '16',
      title: 'Avengers: Endgame',
      category: 'Action',
      likes: 13256,
      dislikes: 230
    },
    {
      id: '17',
      title: 'Inception',
      category: 'Science Fiction',
      likes: 11245,
      dislikes: 178
    },
    {
      id: '18',
      title: 'Parasite',
      category: 'Thriller',
      likes: 9783,
      dislikes: 150
    },
    {
      id: '19',
      title: 'Titanic',
      category: 'Romance',
      likes: 14000,
      dislikes: 210
    },
    {
      id: '20',
      title: 'The Matrix',
      category: 'Science Fiction',
      likes: 10540,
      dislikes: 98
    },
    {
      id: '21',
      title: 'Gladiator',
      category: 'Action',
      likes: 9870,
      dislikes: 120
    }
    


  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))