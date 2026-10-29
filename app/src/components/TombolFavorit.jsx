export default function TombolFavorit({ nilai, onUbah }) {
  return (
    <button
      type="button"
      onClick={() => onUbah(!nilai)}
    >
      {nilai ? 'Favorit' : 'Tambah Favorit'}
    </button>
  )
}