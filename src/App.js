import './App.css';

function Header() {
  return (
    <p> <h3>Hi, My name is Heet</h3>
   My Favourite game is:</p>
    
  );
}  

const games = 
  {
  title: 'Need for Speed: Most Wanted',
  publisher: 'Electronic Arts',
  published: "2007",
  image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Need_for_Speed_Most_Wanted_Box_Art.jpg',
  width: "264",
  height: '378'
};


function FavGame() {
  return(
  <div>
    <h2> {games.title} ({games.published}) </h2>
    <p>{games.publisher}</p>
    {games.image &&
  <img
    className="gameCover" 
    src={games.image}
    alt={games.title + ' cover'}
    style={{
      width: games.width,
      height: games.height
    }}
    />
    }
    </div>  
  );
}

const GameCollection = [
  { id: 1, title: 'Need for Speed: ProStreet', theme: 'Racing', isAvailable: true },
  { id: 2, title: 'Ludo', theme: 'Board', isAvailable: true },
  { id: 3, title: 'Poker', theme: 'Arcade', isAvailable: false },
];
  
function GameRack() {
  const listGame = GameCollection.map(game =>
    <li
      key={game.id}
      style={{
        color: game.isAvailable ? 'green' : 'red'
      }}
    >
      {game.title}
    </li>
  );
  return (
    <ul>{listGame}</ul>
  ) 
}  

function LikeButton() {
  return (
    <button>Like</button>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FavGame />
        <GameRack />

        <LikeButton />
      </header>
    </div>
  ); 
}

export default App;
