import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage.js";
import TombolFavorit from "./TombolFavorit.jsx";

export default function KartuItem({ item }) {
  const { id, judul, kategori, namaLatin, frekuensiSiram, kebutuhanCahaya } = item;
  const [Favorit, setFavorit] = useLocalStorage(`Favorit-${id}`, false);
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · {namaLatin} · siram {frekuensiSiram}x seminggu · cahaya{" "} {kebutuhanCahaya}
      </p>
      <TombolFavorit nilai={Favorit} onUbah={setFavorit}/>
    </article>
  );
}
