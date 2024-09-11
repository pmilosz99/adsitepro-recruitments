export function Header() {
  return (
    <header className="flex flex-row justify-between items-center content-center mt-6 xl:mx-32 sm: mx-2">
      <a href="#">
        <img className="h-7" src="src\assets\logo.svg"/>
      </a>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600">Galeria zdjęć</a>
        <a href="#" className="text-gray-600">FaQ</a>
      </nav>
      <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-300 active:bg-blue-200">Zadzwoń do nas</button>
    </header>
  );
}