export default function TombolFavorit({ nilai, onUbah }) {
  return (
    <button id={nilai ? "Sesudah-Favorit" : "Sebelum-Favorit"}
     type="button" onClick={() => onUbah(!nilai)} >
      {nilai ? 'Favorit' : 'Tambah Favorit'}
    </button>
  )
}