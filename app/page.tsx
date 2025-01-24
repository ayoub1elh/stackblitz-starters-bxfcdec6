import Link from 'next/link';
import Header from '../components/header';

export default function IndexPage() {
  const id = '{id}';
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4">
          Next.js Pokémon Application Test
        </h1>
        <p className="mb-3">
          <strong>Objective:</strong> Develop a simple web application using
          Next.js that displays a list of Pokémon, provides a details page for
          each Pokémon, and includes basic search and pagination features.
        </p>

        <h2 className="text-lg font-semibold mb-3">Task Overview:</h2>
        <ol className="list-decimal list-inside mb-6">
          <li>
            <strong>Pokémon List Page:</strong> Create a page that fetches and
            displays a list of Pokémon from the PokéAPI (
            <Link href="https://pokeapi.co/api/v2/pokemon">
              https://pokeapi.co/api/v2/pokemon
            </Link>
            ). Implement pagination to show a limited number of Pokémon per page
            (e.g., 20 Pokémon). Include a search input to filter Pokémon by
            name.
          </li>

          <br />
          <li>
            <strong>Pokémon Details Page:</strong> Create dynamic routes in
            Next.js to display details for each Pokémon. For example, clicking
            on "Pikachu" should navigate to a page with a URL like
            <code>/pokemon/25</code>. Fetch and display detailed information for
            the selected Pokémon on its details page. NB: Use SSR or SSG
          </li>
          <br />

          <li>
            <strong>Add Pokémon List Page link to the header </strong>
          </li>
        </ol>

        <h2 className="text-lg font-semibold mb-3">Resources:</h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>PokéAPI Endpoint for Listing Pokémon:</strong>
            <Link href="https://pokeapi.co/api/v2/pokemon">
              https://pokeapi.co/api/v2/pokemon
            </Link>
          </li>
          <li>
            <strong>Fetching a Single Pokémon:</strong> Use a URL in the format:
            <code> https://pokeapi.co/api/v2/pokemon/{id}</code>, where
            <code> {id}</code> is the Pokémon ID.
          </li>
          <li>
            <strong>Pagination:</strong> The PokéAPI returns pagination
            information in its response, allowing you to fetch specific pages.
          </li>
        </ul>

        <hr className="my-6" />

        <h2 className="text-lg font-semibold mb-3">
          Second section: SQL related QCM
        </h2>
        <p className="mb-3">
          You'll find all the details in the file SQL_Tasks.md
        </p>

        <h2 className="text-lg font-semibold mb-3">
          Third section: Docker related QCM
        </h2>
        <p className="mb-3">
          You'll find all the details in the file Docker_Tasks.md
        </p>
      </div>
    </>
  );
}
