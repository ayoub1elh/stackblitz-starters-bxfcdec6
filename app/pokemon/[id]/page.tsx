import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";

interface PokemonDetails {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  stats: {
    name: string;
    value: number;
  }[];
  types: string[];
}

async function getPokemon(id: string): Promise<PokemonDetails> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon");
  }

  const data = await res.json();
  return {
    id: data.id,
    name: data.name,
    sprites: {
      front_default:
        data.sprites.other["official-artwork"].front_default,
    },
    stats: data.stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    types: data.types.map((type) => type.type.name),
  };
}

export default async function PokemonPage({
  params,
}: {
  params: { id: string };
}) {
  const pokemon = await getPokemon(params.id);

  return (
    <div>

      <Header />

    <div className="container mx-auto px-4 py-8 text-black">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative w-full aspect-square">
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              fill
              unoptimized
              className="object-contain"
              priority
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold capitalize mb-4">
              {pokemon.name}{" "}
              <span className="text-gray-600">#{pokemon.id}</span>
            </h1>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Types</h2>
              <div className="flex gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full capitalize text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                {pokemon.stats.map(({ name, value }) => (
                  <div key={name} className="bg-gray-50 p-4 rounded">
                    <h3 className="font-medium mb-1 capitalize">
                      {name.replace("-", " ")}
                    </h3>
                    <p className="text-lg">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
