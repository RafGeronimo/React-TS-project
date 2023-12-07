import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Note } from "./App";

type NoteLayoutProps = {
  notes: Note[];
};

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams(); // custom hook do react-router pega o id direto da url
  const note = notes.find((note) => note.id === id);

  if (note === null) return <Navigate to="/" replace />;

  //Componente Outlet renderiza o que estiver em seu contexto:
  return <Outlet context={note} />;
}

//A função permite a importação das infos de cada note. Será utilizada para
//renderizar a página Show
export function useNote() {
  return useOutletContext<Note>();
}
