'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export default function DataList() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const offset = (currentPage - 1) * itemsPerPage;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offset}`
        );
        const data: PokemonResponse = await response.json();
        setPokemon(data.results);
        setTotalPages(data.count / itemsPerPage | 0);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [currentPage]);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPokemonId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Pokémon..."
          className="w-full p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPokemon.map((p) => (
              <Link 
                href={`/pokemon/${getPokemonId(p.url)}`} 
                key={p.name}
                className="border p-4 rounded hover:bg-gray-50 transition-colors"
              >
                <div className="capitalize font-medium">{p.name}</div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}