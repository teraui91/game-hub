import React, { useEffect, useState } from 'react'
import apiClients from '../services/api-clients';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClients.get<FetchGamesResponse>('/games')
    .then(res => setGames(res.data.results))
    .catch((err) => setError(err.message))
  }, [])

  //{error && <Text>{error}</Text>}
  //<li>{games.map(game => <li key={game.id}>{game.name}</li>)}</li>
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(g => <li key={g.id}>{g.id} {g.name}</li>)}
      </ul>
    </>
  )
}

export default GameGrid