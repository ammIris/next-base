import React from 'react'
import FavIcon from './fav-icon'
export default function BookItem({
  isbn,
  title,
  author,
  handleToggleFav,
  fav,
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon fav={fav} isbn={isbn} handleToggleFav={handleToggleFav} />
        </td>
      </tr>
    </>
  )
}
