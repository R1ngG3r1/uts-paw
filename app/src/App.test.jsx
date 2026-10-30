import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'


const DATA = [{ id: '1', judul: 'Lidah Mertua', kategori: 'Daun', namaLatin: 'Dracaena trifasciata', frekuensiSiram: 1, kebutuhanCahaya: 'sedang'  }]
// Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByText('Lidah Mertua')).toBeInTheDocument()
})

test('menampilkan teks mahasiswa pada halaman tentang', async () => {
  buka('/tentang')
  expect(await screen.getByText('Hafidz Raihan Putra Anfa')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Judul wajib diisi')
})

test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('test tombol favorit berubah saat diklik pada halaman koleksi', async () => {
  buka('/koleksi')
  await screen.findByText('Lidah Mertua')
  await userEvent.click(screen.getByRole('button', { name: 'Tambah Favorit' }))
  expect(screen.getByRole('button', { name: 'Favorit' })).toBeInTheDocument()
})
